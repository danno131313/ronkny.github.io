$(document).ready(function(){
    $('.ui.dropdown').dropdown({
        on: 'hover'
    });

    $('#mobile-navbar').on('click touchstart', function() {
        $('.ui.sidebar').sidebar('toggle');
    });
});
