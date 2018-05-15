$(document).ready(function(){
    $('.ui.dropdown').dropdown({
        on: 'hover'
    });

    $('#hamburger-menu-btn').click(function() {
        $('.ui.sidebar').sidebar('toggle');
    });
});
