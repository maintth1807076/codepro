const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var liveshowSchema = new Schema({
    liveshowId: {type:String},
    name: {type: String},
    thumbnail: {type: String},
    price: {type: Number},
    timeShow: {type: Date},
    description: {type: String},
    artist: {type: String},
    createdAt: {type: Date},
    deletedAt: {type: Date},
    status: {type: Number},
});

module.exports = mongoose.model("Liveshow", liveshowSchema);


