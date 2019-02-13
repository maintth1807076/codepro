var userController = require("../controller/userController");
var productController = require("../controller/productController");
var categoryController = require("../controller/categoryController.js");
var homeController = require("../controller/homeController");
var customerController = require("../controller/customerController");
// var messageController = require("../controller/messageController");
// var shortid = require('shortid');

exports.routing = function (app) {

    app.get("/register", userController.generateRegister);
    app.post("/register", userController.processRegister);
    app.get("/login", userController.generateLoginForm);
    app.post("/login", userController.processLogin);

    app.get("/admin/product/create", productController.generateProduct);
    app.get("/admin/product/list", productController.listProduct);
    app.post("/admin/product/save", productController.saveProduct);
    app.get("/admin/product/:id", productController.detailProduct);

    app.get("/client/home", homeController.generateHome);
    app.get("/client/DVD", homeController.DVDpage);
    app.get("/client/CD", homeController.CDpage);
    app.get("/client/book", homeController.Bookpage);
    app.get("/client/magazine", homeController.Magazinepage);
    app.get("/client/detail-product", homeController.detailProductPage);

    app.get("/admin/product/create", categoryController.generateForm);
    app.get("/admin/product/list", categoryController.list);
    app.post("/admin/product/save", categoryController.save);

    app.get("/admin/customer/create", customerController.generateCustomer);
    app.get("/admin/customer/list", customerController.listCustomer);
    app.post("/admin/customer/save", customerController.saveCustomer);

    // app.get("/admin/message/create", messageController.generateMessage);
    // app.get("/admin/message/list", messageController.listMessage);
    // app.post("/admin/message/send", messageController.sendMessage);


};

// exports.routing = function (app) {

    // var listUser = [];

    // var listProduct = [];
    //
    // // Khu vực xử lý đăng ký và đăng nhập người dùng.
    // app.get("/register", function (req, res) {
    //     res.render("client/register.ejs");
    // });
    // app.post("/register", function (req, res) {
    //     var user = {
    //         "fullName": req.body.fullName,
    //         "username": req.body.username,
    //         "password": req.body.password
    //     };
    //     // Kiểm tra dữ liệu và lưu vào cơ sở dữ liệu.
    //     listUser.push(user);
    //     res.render("client/register-success.ejs", {
    //         "user": user
    //     });
    // });
    // app.get("/login", function (req, res) {
    //     res.render("client/login.ejs");
    // });
    // app.post("/login", function (req, res) {
    //     var user = {
    //         "username": req.body.username,
    //         "password": req.body.password
    //     };
    //     var loginSuccess = false;
    //     for (var i = 0; i < listUser.length; i++) {
    //         var tempUser = listUser[i];
    //         if(tempUser.username == user.username && tempUser.password == user.password){
    //             loginSuccess = true;
    //             break;
    //         }
    //     }
    //     if(loginSuccess){
    //         res.send("Login thành công với tài khoản " + user.username);
    //     }else{
    //         res.send("Sai thông tin tài khoản!");
    //     }
    // });
    // // // Khu vực xử lý quản lý sản phẩm của admin.
    // app.get("/admin/product/create", function (req, res) {
    //     res.render("admin/product/form.ejs");
    // });
    //
    // // app.get("/admin/product/list", function (req, res) {
    // //     res.render("admin/product/form.ejs");
    // // });
    //
    // app.post("/admin/product/list", function (req, res) {
    //     var product = {
    //         "name": req.body.name,
    //         "picture": req.body.picture,
    //         "description": req.body.description,
    //         "price": req.body.price,
    //     };
    //     listProduct.push(product);
    //     res.render("admin/product/list.ejs", {"listProduct" : listProduct});
    // });





    // app.get("/admin/product/edit", function (req, res) {
    //     res.render("admin/product/edit.ejs");
    // });
    // app.get("/admin/product/update", function (req, res) {
    //     res.render("admin/product/edit.ejs");
    // });
    // app.get("/admin/product/delete", function (req, res) {
    //     res.render("admin/product/edit.ejs");
    // });
    //
    // // Khu vực xử lý quản lý danh mục sản phẩm của admin.
    // app.get("/admin/category/list", function (req, res) {
    //     res.render("admin/category/list.ejs");
    // });
    // app.get("/admin/category/create", function (req, res) {
    //     res.render("admin/category/form.ejs");
    // });
    // app.post("/admin/category/save", function (req, res) {
    //     res.render("admin/category/form.ejs");
    // });
    // app.get("/admin/category/edit", function (req, res) {
    //     res.render("admin/category/edit.ejs");
    // });
    // app.get("/admin/category/update", function (req, res) {
    //     res.render("admin/category/edit.ejs");
    // });
    // app.get("/admin/product/delete", function (req, res) {
    //     res.render("admin/category/edit.ejs");
    // });
// }

// var userController = require("../controller/userController");
//
// exports.routing = function (app) {
//
//     app.get("/register", userController.generateRegister());
//     app.post("/register", userController.processRegister());
//     app.get("/login", userController.generateLoginForm());
//     app.post("/login", userController.processLogin());
// };