$(document).ready(function() {
    $(".page-header__toggle").click(function() {
        $(".main-nav").slideToggle();
    });
});
$(window).resize(function() {
    if ($(window).width() > 768) {
        $(".main-nav").css("display", "block");
    }
    if ($(window).width() < 769) {
        $(".main-nav").css("display", "none");
    }
});
