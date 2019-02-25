var Product = require("../models/product.js");

exports.generateHome = function (req, res) {
    Product.find({}, function(err, products) {
        // console.log({"listProduct": products});
        res.render("client/home.ejs", {
            "listProduct": products
        });
    });
};
exports.contact = function (req, res) {
    res.render("client/contact.ejs");
};
exports.about = function (req, res) {
    res.render("client/about.ejs");
};
exports.DVDpage = function (req, res) {
    res.render("client/DVD.ejs");
};

exports.CDpage = function (req, res) {
    res.render("client/CD.ejs");
};

exports.diskPage = function (req, res) {
    res.render("client/disk.ejs");
};

exports.liveshowPage = function (req, res) {
    res.render("client/liveshow.ejs");
};

exports.Bookpage = function (req, res) {
    res.render("client/book.ejs");
};

exports.Magazinepage = function (req, res) {
    res.render("client/magazine.ejs");
};

exports.detailProductPage = function (req, res) {
    Product.findById(req.params.id, function(err, result){
        res.render("client/detail-product.ejs",{product: result});
    });
};


exports.cartpage = function (req, res) {
    res.render("client/cart.ejs");

};
exports.paypage = function (req, res) {
    res.render("client/pay.ejs");

};

exports.newReleasesDVD = function (req, res) {
    res.render("client/new-releases-dvd.ejs");
};
exports.topSellerDVD = function (req, res) {
    res.render("client/top-seller-dvd.ejs");
};
exports.clearanceDVD = function (req, res) {
    res.render("client/clearance-dvd.ejs");
};

exports.newReleasesCD = function (req, res) {
    res.render("client/new-releases-cd.ejs");
};
exports.topSellerCD = function (req, res) {
    res.render("client/top-seller-cd.ejs");
};
exports.clearanceCD = function (req, res) {
    res.render("client/clearance-cd.ejs");
};

exports.newReleasesBook = function (req, res) {
    res.render("client/new-releases-book.ejs");
};
exports.topSellerBook = function (req, res) {
    res.render("client/top-seller-book.ejs");
};
exports.clearanceBook = function (req, res) {
    res.render("client/clearance-book.ejs");
};

exports.newReleasesMagazine = function (req, res) {
    res.render("client/new-releases-magazine.ejs");
};
exports.topSellerMagazine = function (req, res) {
    res.render("client/top-seller-magazine.ejs");
};
exports.clearanceMagazine = function (req, res) {
    res.render("client/clearance-magazine.ejs");
};


exports.moviePage = function (req, res) {
    res.render("client/movie.ejs");
};
exports.bandPage = function (req, res) {
    res.render("client/band.ejs");
};
exports.soloPage = function (req, res) {
    res.render("client/solo.ejs");
};
