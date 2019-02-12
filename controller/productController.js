var Product = require("../models/product.js");

exports.generateProduct = function (req, res) {
    res.render("admin/product/form.ejs");
};

exports.saveProduct = function (req, res) {
    var product = new Product({
                productId: req.body.productId,
                name: req.body.name,
                thumbnail: req.body.thumbnail,
                price: req.body.price,
                description: req.body.description,
                artist: req.body.artist,
                createdAt: req.body.createdAt,
                deletedAt: req.body.deletedAt,
                status: req.body.status,

            });
    product.save();

    res.send("Saved product success !");
};

exports.listProduct = function (req, res) {
    Product.find({}, function(err, products) {
        console.log({"listProduct": products});
        res.render("admin/product/list.ejs", {
            "listProduct": products
        });
    });
};