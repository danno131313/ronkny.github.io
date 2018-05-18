$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 6000,
        loop: true,
        dots: false,
        smartSpeed: 700,
        autoHeight: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        freeDrag: false,
    });
    
    $('.ui.dropdown').dropdown({
        on: 'hover'
    });

    $('#mobile-navbar').on('click touch', function() {
        $('.ui.sidebar').sidebar('toggle');
    });
});
