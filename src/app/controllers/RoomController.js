
const Room = require('../models/Room');
const {multipleMongooseToObject } = require('../../util/mongoose');
const {mongooseToObject} = require('../../util/mongoose');


class RoomController{

    //[GET] /room
    showRoom(req, res, next){
        Room.find({})
            .then(room => 
                res.render('room', { room: multipleMongooseToObject(room) })
            )
            .catch(next);
    }

    // [GET] /room/:slug
    showSlug(req, res, next){
        Room.findOne({ slug: req.params.slug })
            .then(room => 
                res.render('rooms/showSlug', {room: mongooseToObject(room) })
            )
            .catch(next);
    }

    // [GET] /room/
    booking(req, res, next){
        res.send('booking')
    }

}

module.exports = new RoomController;