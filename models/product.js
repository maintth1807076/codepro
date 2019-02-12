const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    productId: {type:String},
    name: {type: String},
    thumbnail: {type: String},
    price: {type: Number},
    description: {type: String},
    artist: {type: String},
    createdAt: {type: Date},
    deletedAt: {type: Date},
    status: {type: Number},
});

module.exports = mongoose.model("Product", ProductSchema);


