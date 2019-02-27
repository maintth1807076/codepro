$(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) $(".ontop").fadeIn();
        else $(".ontop").fadeOut();
    });
    $(".ontop").click(function () {
        $("body,html").animate({scrollTop: 0}, "slow");
    });
});
var modal = document.getElementById('boxchat');
var btn = document.getElementById("openchat");
var span = document.getElementById("closechat");
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
