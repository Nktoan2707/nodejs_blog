const Course = require('../models/Course'); // ghi hoa để ám chỉ model dùng để get dữ liệu từ DB,
//ghi thường courses là list course lấy về được, course là course lấy về được
const { multipleMongooseToObject } = require('../../util/mongoose');

class CourseController {
	// [GET] /me/stored/courses
	storedCourses(req, res, next) {
		Promise.all([Course.find(), Course.countDocumentsDeleted()]).then(
			([courses, deletedCount]) => {
				res.render('me/stored-courses', {
					deletedCount, // tương đương deletedCount: deletedCount do 2 đứa giống nhau nên có thể viết gọn
					courses: multipleMongooseToObject(courses),
				});
			},
		);
	}

	// [GET] /me/trash/courses
	trashCourses(req, res, next) {
		Course.findDeleted()
			.then((courses) =>
				res.render('me/trash-courses', {
					courses: multipleMongooseToObject(courses),
				}),
			)
			.catch(next);
	}
}

module.exports = new CourseController();
