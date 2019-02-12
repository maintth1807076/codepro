var listUser = [];


exports.processRegister = function (req, res) {
    var user = {
        "name": req.body.name,
        "email": req.body.email,
        "password": req.body.password,
        "phone": req.body.phone,
        "address": req.body.address,
        "birthday": req.body.birthday,
        "gender": req.body.gender,
    };
    listUser.push(user);
    res.render("client/register-success.ejs", {
        "user": user
    });
};

exports.generateRegister = function (req, res) {
    res.render("client/register.ejs");
};

exports.generateLoginForm = function (req, res) {
    res.render("client/login.ejs")
};

exports.processLogin = function (req, res) {
    var user = {
        "name" : req.body.name,
        "email":req.body.email,
        "password" : req.body.password,
    };
    var loginSuccess = false;
    for (var i = 0; i < listUser.length; i++) {
        var tempUser = listUser[i];
        if(tempUser.name == user.name &&tempUser.email == user.email && tempUser.password == user.password ){
            loginSuccess = true;
            break;
        }if(loginSuccess){
            res.send("Login thành công với tài khoản " + user.name);
        }else{
            res.send("Sai thông tin tài khoản!");
        }
    }
};