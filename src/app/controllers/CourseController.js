const Course = require("../models/Course"); // ghi hoa để ám chỉ model dùng để get dữ liệu từ DB,
//ghi thường courses là list course lấy về được, course là course lấy về được
const { mongooseToObject } = require("../../util/mongoose");
const { response } = require("express");

class CourseController {
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        // có nhiều param return về thì phải bao lại (course, param2...) => {}
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => {
        res.redirect("/");
      })
      .catch((error) => {});
  }

  // [GET] /courses/:id/create
  edit(req, res, next) {
    Course.findById(req.params.id).then((course) =>
      res.render("courses/edit", {
        course: mongooseToObject(course),
      })
    );
  }

  // [PUT] /course/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.redirect('/me/stored/courses');
    })
    .catch(next);
  }
}

module.exports = new CourseController();
