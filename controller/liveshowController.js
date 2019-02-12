var Liveshow = require("../models/liveshow.js");

exports.generateLiveshow = function (req, res) {
    res.render("admin/customer/form.ejs");
};

exports.saveLiveshow = function (req, res) {
    var liveshow = new Liveshow({
        liveshowId: req.body.liveshowId,
        name: req.body.name,
        thumbnail: req.body.thumbnail,
        price: req.body.price,
        timeShow: req.body.timeShow,
        description: req.body.description,
        artist: req.body.artist,
        createdAt: req.body.createdAt,
        deletedAt: req.body.deletedAt,
        status: req.body.status,

    });
    liveshow.save();
    res.send("Saved liveshow success !");
};

exports.listLiveshow = function (req, res) {
    Liveshow.find({}, function(err, liveshows) {
        console.log({"listLiveshow": liveshows});
        res.render("admin/customer/list.ejs", {
            "listLiveshow": liveshows
        });
    });
};