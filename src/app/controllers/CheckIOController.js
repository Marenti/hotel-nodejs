

const ListIO = require('../models/ListIO');
const {multipleMongooseToObject } = require('../../util/mongoose');
const {mongooseToObject} = require('../../util/mongoose');


class CheckIOController{

    //[GET] /checkIO
    showIO(req, res, next){
        ListIO.find({})
            .then(listIO => 
                res.render('checkIO/listIO', { listIO: multipleMongooseToObject(listIO) })
                // res.json(listIO)
            )
            .catch(next);
    }

    //[GET] /checkIO/:id/edit
    edit(req, res, next){
        ListIO.findById( req.params.id)
            .then(listIO => 
                res.render('bill/chinhHoaDon', { listIO: mongooseToObject(listIO) })
                // res.json(listIO)
            )
            .catch(next);
    }

    //[PUT] /checkIO/:id
    async update(req, res, next) {
        // await ListIO.updateOne({ _id: req.params.id }, req.body)
        //     .then(() => res.redirect('/checkIO'))
        //     .catch(next);

        await ListIO.updateOne({ _id: req.params.id }, {
            sophieucheckIO: req.body.sophieucheckin,
            sohoadon: req.body.sohoadon,
            tinhtranghoadon: req.body.tinhtranghoadon,
            ngaytao: req.body.ngaytao,
            sophong: req.body.sophong,
            loaiphong: req.body.loaiphong,
            tenKH: req.body.tenkhachhang,
            sdt: req.body.sodienthoaiKH,
            ngayvao: req.body.ngaynhanphong,
            ngayra: req.body.ngaytraphong,
            giaphong: req.body.giaphong,
          })
          
        // Load the document to see the updated value
        
        .then(() => res.redirect('/checkIO'))
        .catch(next);

        // ListIO.findOne({ _id: req.params.id}, function(err, listIO) {
        //     listIO.tenKH = "nguyen le";
            
        //     listIO.save(function(err) {
        //         if(err){
        //             console.log(err);
        //             return;
        //        }
        //     })
        // })
        
        // ListIO.findOneAndUpdate({ _id: req.params.id }, req.body)
        //     .then(() => res.redirect('/checkIO'))
        //     .catch(next);

    }

    

}

module.exports = new CheckIOController;