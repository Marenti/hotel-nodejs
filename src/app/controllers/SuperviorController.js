

const Room = require('../models/Room');
const {multipleMongooseToObject } = require('../../util/mongoose');
const {mongooseToObject} = require('../../util/mongoose');


class SuperviorController{

    //[GET] /standard
    general(req, res, next){
        Room.findOne({})
            .then(room => 
                res.render('rooms/supervior', { room: mongooseToObject(room) })
                // res.json(room)
            )
            .catch(next);
    }

}

module.exports = new SuperviorController;