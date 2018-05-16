$(document).ready(function(){
    $('.ui.dropdown').dropdown({
        on: 'hover'
    });

    $('#hamburger-menu-btn').on('click touchstart', function() {
        $('.ui.sidebar').sidebar('toggle');
    });
});
