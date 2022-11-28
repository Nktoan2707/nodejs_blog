const Course = require("../models/Course");
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
  // [GET] /home, để tên handler là index hay home cũng dc
  index(req, res, next) {
    // Course.find({}, function(err, courses){
    //     if (!err) {
    //         res.json(courses);
    //         return;
    //     }
    //     else{
    //         next(err);
    //     }
    // });

    // viết lại cái trên nhưng ở dạng promise
    Course.find({}) //.lean() thì không cần xài hàm multipleMongooseToObject, chọn 1 trong 2 cách
      .then(courses => {
        res.render("home", { courses: multipleMongooseToObject(courses)});
      })
      .catch(next); //tương đương với .catch(error => next(error));
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
