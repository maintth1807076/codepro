const express = require("express");
const bodyParser = require("body-parser");
const app = express();


const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost:27017/shoptify', {useNewUrlParser: true});
mongoose.connect('mongodb://sa:abcd1234@ds163044.mlab.com:63044/shoptify', {useNewUrlParser: true});
// mongoose.connect('mongodb://admin:admin123@ds331145.mlab.com:31145/hpny', {useNewUrlParser: true});


// const fileUpload = require('express-fileupload');
// var clouddinary = require('cloudinary');

app.set("views", "views");
app.set("views engine", "ejs");
app.use(bodyParser.urlencoded());
app.use(express.static('public'));
// Tách phần xử lý chức năng routing ra một file bên ngoài.
var router = require("./router/application-router.js");
router.routing(app);

app.listen(process.env.PORT || 5000, function () {
    console.log("Run Success!");
});