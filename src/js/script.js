$(document).ready(function() {
    $('.ban__carousel-inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.variant__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});