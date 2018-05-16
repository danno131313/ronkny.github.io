$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 6000,
        loop: true,
        dots: false,
        smartSpeed: 700,
        autoHeight: true,
    });
    
    $('.ui.dropdown').dropdown({
        on: 'hover'
    });

    $('#hamburger-menu-btn').on('click touchstart', function() {
        $('.ui.sidebar').sidebar('toggle');
    });
});
