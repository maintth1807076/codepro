var userController = require("../controller/userController");
var productController = require("../controller/productController");
// var categoryController = require("../controller/categoryController.js");
var homeController = require("../controller/homeController");
var customerController = require("../controller/customerController");
var cloudinary = require('cloudinary');

exports.routing = function (app) {

    app.get("/register", userController.generateRegister);
    app.post("/register", userController.processRegister);
    app.get("/login", userController.generateLoginForm);
    app.post("/login", userController.processLogin);

    // app.get("/admin/product/create", productController.generateProduct);
    app.get("/admin/product/list", productController.listProduct);
    app.post("/admin/product/save", productController.saveProduct);
    app.get("/admin/product/:id", productController.detailProduct);
    app.get("/admin/orders/list", productController.listOrder);

    app.get("/client/home", homeController.generateHome);
    app.get("/client/contact", homeController.contact);
    app.get("/client/about", homeController.about);
    app.get("/client/DVD", homeController.DVDpage);
    app.get("/client/CD", homeController.CDpage);
    app.get("/client/book", homeController.Bookpage);
    app.get("/client/ticket", homeController.liveshowPage);
    app.get("/client/magazine", homeController.Magazinepage);
    app.get("/client/disk", homeController.diskPage);
    app.get("/client/detail-product/:id", homeController.detailProductPage);
    app.get("/client/cart", homeController.cartpage);
    app.get("/client/pay", homeController.paypage);
    app.get("/client/top-seller-dvd", homeController.topSellerDVD);
    app.get("/client/new-releases-dvd", homeController.newReleasesDVD);
    app.get("/client/clearance-dvd", homeController.clearanceDVD);
    app.get("/client/top-seller-cd", homeController.topSellerCD);
    app.get("/client/new-releases-cd", homeController.newReleasesCD);
    app.get("/client/clearance-cd", homeController.clearanceCD);
    app.get("/client/top-seller-book", homeController.topSellerBook);
    app.get("/client/new-releases-book", homeController.newReleasesBook);
    app.get("/client/clearance-book", homeController.clearanceBook);
    app.get("/client/top-seller-magazine", homeController.topSellerMagazine);
    app.get("/client/new-releases-magazine", homeController.newReleasesMagazine);
    app.get("/client/clearance-magazine", homeController.clearanceMagazine);
    app.get("/client/search", homeController.clearanceMagazine);



    // app.get("/admin/customer/create", customerController.generateCustomer);
    app.get("/admin/customer/list", customerController.listCustomer);
    app.post("/admin/customer/save", customerController.saveCustomer);
};
