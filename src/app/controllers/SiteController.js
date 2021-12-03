const Room = require('../models/Room');
const { multipleMongooseToObject } = require('../../util/mongoose');
// import lib ulti to convert object in mongoose to normal object

class SiteController {
    
    //[GET] /room
    index(req, res, next){
        Room.find({})
            .then(room => 
                res.render('home', { room: multipleMongooseToObject(room) })
            )
            .catch(next);
    }
    
    // Get /home
    // index(req, res, next) {
    //     Course.find({})
    //         .then((courses) => {
    //             res.render('home', {
    //                 courses: multipleMongooseToObject(courses),
    //                 /*co nghia la course: course*/
    //             });
    //         })
    //         .catch(next);
    // }



    // Get /search
    // search(req, res) {
    //     res.render('search');
    // }
}

module.exports = new SiteController();
