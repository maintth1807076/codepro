const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var OrderDetailSchema = new Schema({
    orderId: {type: String},
    productId: {type: String},
    count: {type: String},
    unitPrice: {type: String}
});

module.exports = mongoose.model("OrderDetail", OrderDetailSchema);


