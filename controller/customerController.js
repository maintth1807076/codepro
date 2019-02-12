var Customer = require("../models/customer.js");

exports.generateCustomer = function (req, res) {
    res.render("admin/customer/form.ejs");
};

exports.saveCustomer = function (req, res) {
    var customer = new Customer({
        customerId: req.body.customerId,
        name: req.body.name,
        password: req.body.password,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone,
        createdAt: req.body.createdAt,
        deletedAt: req.body.deletedAt,
        status: req.body.status,

    });
    customer.save();
    res.send("Saved customer success !");
};

exports.listCustomer = function (req, res) {
    Customer.find({}, function(err, customers) {
        console.log({"listCustomer": customers});
        res.render("admin/customer/list.ejs", {
            "listCustomer": customers
        });
    });
};