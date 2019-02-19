var Product = require("../models/product.js");
var Order = require("../models/order.js");
var OrderDetail = require("../models/order-detail.js");
var cloudinary = require('cloudinary').v2;

exports.generateProduct = function (req, res) {
    res.render("admin/product/form.ejs");
};

exports.saveProduct = function (req, res) {
    var product = new Product({
                productId: req.body.productId,
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                artist: req.body.artist,
                createdAt: req.body.createdAt,
                deletedAt: req.body.deletedAt,
                status: req.body.status,

    });
    if (req.files && req.files.thumbnail != undefined) {
        var fileGettingUploaded = req.files.thumbnail.data;
        cloudinary.uploader
            .upload_stream(function (error, result) {
                var imageUrl = result.url;
                product.thumbnail = imageUrl;
                console.log(req.body);
                product.save();
                res.redirect('/admin/product/list');
            })
            .end(fileGettingUploaded);
    } else {
        console.log("Have no file");
        product.thumbnail = "https://www.touchtaiwan.com/images/default.jpg";
        product.save();
        res.redirect('/admin/product/list');
    }
    // product.save();
    // res.redirect('/admin/product/list');
    // res.send("Saved product success !");
};

exports.listProduct = function (req, res) {
    Product.find({}, function(err, products) {
        // console.log({"listProduct": products});
        res.render("admin/product/list.ejs", {
            "listProduct": products
        });
    });
};

exports.detailProduct = function (req, res) {
    Product.findById(req.params.id, function(err, result){
        res.render("admin/product/details.ejs",{product: result});
        // console.log(result)
    });
};


exports.complete = function (req, res) {
    console.log("Complete order." + JSON.stringify(req.body));
    var order = new Order({
        orderid: 'ORDER_' + new Date().getTime() + makeid(),
        customerId: 1, // default
        totalPrice:  req.body.totalPrice,
        shippedDate: req.body.shippedDate,
        requiredDate: req.body.requiredDate,
        createdAt: req.body.createdAt,
        deletedAt: req.body.deletedAt,
        status: req.body.status,
        // createdAt: new Date()
    });
    var totalPrice = 0;
    for (var key in req.body) {
        var orderDetail = new OrderDetail({
            orderId: order.id,
            productId: key,
            count: req.body[key].count,
            unitPrice: req.body[key].unitPrice,
        });
        // tìm sản phẩm theo id ở đây.
        totalPrice += parseInt(req.body[key].count);
        // check cả số lượng.
        console.log(key);
        console.log(orderDetail.count);
        orderDetail.save();
    }
    order.totalPrice = totalPrice;
    order.save();
    res.send(JSON.stringify(req.body));
}

exports.listOrder = function (req, res) {
    Order.find({}, function(err, orders) {
        res.render("admin/orders/lists.ejs", {
            "listOrder": orders
        });
    });
};

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}