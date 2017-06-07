$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        nav: false,
        items: 1
    });

    $('.owl-carousel1').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        nav: true,
        navText: ["<img src='img/works-left.png'>", "<img src='img/works-right.png'>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            640: {
                items: 2
            },
            768: {
                items: 3
            },
            980: {
                items: 4
            }
        }
    });
});
