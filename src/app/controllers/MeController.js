const Course = require("../models/Course"); // ghi hoa để ám chỉ model dùng để get dữ liệu từ DB,
//ghi thường courses là list course lấy về được, course là course lấy về được
const { multipleMongooseToObject } = require('../../util/mongoose');

class CourseController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next){
    Course.find({})
      .then(courses => res.render('me/stored-courses', {
        courses: multipleMongooseToObject(courses)}))
      .catch(next);
  }
}

module.exports = new CourseController();
