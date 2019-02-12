const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var messageSchema = new Schema({
    wish: {type: String},
    image:{type:String},
    from: {type:String},
    to: {type:String},
});

module.exports = mongoose.model("Message", messageSchema);


