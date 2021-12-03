



const ListIO = require('../models/ListIO');
const {multipleMongooseToObject } = require('../../util/mongoose');
const {mongooseToObject} = require('../../util/mongoose');


class CheckIOController{

    //[GET] /:id/watch
    watch(req, res, next){
        ListIO.findById( req.params.id)
            .then(listIO => 
                res.render('bill/xemHoadon', { listIO: mongooseToObject(listIO) })
                // res.json(listIO)
            )
            .catch(next);
    }
    

    
    

}

module.exports = new CheckIOController;