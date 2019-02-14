var userController = require("../controller/userController");
var productController = require("../controller/productController");
var categoryController = require("../controller/categoryController.js");
var homeController = require("../controller/homeController");
var customerController = require("../controller/customerController");
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
    app.get("/client/disk", homeController.generateDisk);
    app.get("/client/CD", homeController.CDpage);
    app.get("/client/DVD", homeController.DVDpage);
    app.get("/client/book", homeController.Bookpage);
    app.get("/client/ticket", homeController.liveshowPage);
    app.get("/client/magazine", homeController.Magazinepage);
    app.get("/client/detail-product", homeController.detailProductPage);

    app.get("/admin/product/create", categoryController.generateForm);
    app.get("/admin/product/list", categoryController.list);
    app.post("/admin/product/save", categoryController.save);

    app.get("/admin/customer/create", customerController.generateCustomer);
    app.get("/admin/customer/list", customerController.listCustomer);
    app.post("/admin/customer/save", customerController.saveCustomer);
};
