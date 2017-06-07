$(document).ready(function() {
    $(".toggle").click(function() {
        $(".nav").slideToggle();
    });
});
$(window).resize(function() {
    if ($(window).width() > 640) {
        $(".nav").css("display", "inline-block");
    }
    if ($(window).width() < 641) {
        $(".nav").css("display", "none");
    }
});
