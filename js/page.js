$(document).ready(function(){
    $('.ui.dropdown').dropdown({
        on: 'hover'
    });

    $('#mobile-navbar').on('click touch', function() {
        $('.ui.sidebar')
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle');
    });
});
