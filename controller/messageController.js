var Message = require("../models/message.js");

exports.generateMessage = function (req, res) {
    res.render("admin/message/form.ejs");
};

exports.sendMessage = function (req, res) {
    var message = new Message({
        wish: req.body.wish,
        image: req.body.image,
        from: req.body.from,
        to: req.body.to,
    });
    message.save();
    res.send("Gui thành công !");
};

exports.listMessage = function (req, res) {
    Message.find({}, function(err, messages) {
        // console.log({"listMessage": messages});
        res.render("admin/message/list.ejs", {
            "listMessage": messages
        });
    });

};