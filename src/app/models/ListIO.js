const mongoose = require('mongoose');
const slug =require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

let ListIO = new Schema({
    sophieucheckIO: { type: String, maxLength: 255},
    sohoadon: { type: String, maxLength: 255},
    tinhtranghoadon: { type: String, maxLength: 255},
    ngaytao: { type: String, maxLength: 255},
    sophong: { type: String, maxLength: 255 },
    giaphong: { type: String, maxLength: 255 },
    loaiphong: { type: String, maxLength: 255 },
    tenKH: { type: String, maxLength: 1000},
    sdt: { type: String, maxLength: 255},
    ngayvao: { type: String, maxLength: 255},
    ngayra: { type: String, maxLength: 255},
    tongtien: { type: String, maxLength: 255},
}, {
    timestamps: true,
});

// var ListIOModel = mongoose.model('listIO', ListIO);
// module.exports =  ListIOModel
module.exports =  mongoose.model('listIO', ListIO);