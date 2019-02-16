

exports.generateHome = function (req, res) {
    res.render("client/home.ejs");
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

exports.DVDpage = function (req, res) {
    res.render("client/DVD.ejs");
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
    // var id = parseInt(req.params.id);
    //
    // var detailP = db.get('client').find({id: id}).value();
    res.render("client/detail-product.ejs");
};