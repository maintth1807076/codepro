var Order = require("../models/order.js");

exports.generateOrder = function (req, res) {
    res.render("admin/customer/form.ejs");
};

exports.saveOrder = function (req, res) {
    var order = new Order({
        orderId: req.body.orderId,
        customerId: req.body.customerId,
        totalPrice: req.body.totalPrice,
        shippedDate: req.body.shippedDate,
        requiredDate: req.body.requiredDate,
        createdAt: req.body.createdAt,
        deletedAt: req.body.deletedAt,
        status: req.body.status,

    });
    order.save();
    res.send("Saved order success !");
};

exports.listCustomer = function (req, res) {
    Order.find({}, function(err, orders) {
        console.log({"listOrder": orders});
        res.render("admin/customer/list.ejs", {
            "listOrder": orders
        });
    });
};