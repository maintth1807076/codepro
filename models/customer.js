const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var customerSchema = new Schema({
    customerId: {type:String},
    name: {type: String},
    avatar:{type: String},
    password: {type: String},
    address: {type: String},
    email: {type: String},
    phone: {type: Number},
    createdAt: {type: Date},
    deletedAt: {type: Date},
    status: {type: Number},
});

module.exports = mongoose.model("Customer", customerSchema);


