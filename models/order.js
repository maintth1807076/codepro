const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var orderSchema = new Schema({
    orderId: {type:String},
    customerId: {type: String},
    totalPrice: {type: Number},
    createdAt: {type: Date},
    shippedDate: {type: Date},
    requiredDate: {type: Date},
    deletedAt: {type: Date},
    status: {type: Number},
});

module.exports = mongoose.model("Order", orderSchema);


