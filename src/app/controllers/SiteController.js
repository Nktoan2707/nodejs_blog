const Course = require('../models/Course');

class SiteController {
    // [GET] /home, để tên handler là index hay home cũng dc
    index(req, res) {
        
        Course.find({}, function(err, courses){
            if (!err) {
                res.json(courses);
                return;
            }
            else{
                res.status(400).json({error: 'ERROR!!!'});
            }
        });

        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
