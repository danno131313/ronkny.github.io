$(document).ready(function(){
    $('.ui.dropdown').dropdown({
        on: 'hover'
    });

    $('.ui.sidebar').sidebar({
        transition: 'overlay'
    });

    $('.ui.sidebar').sidebar('attach events', '#mobile-navbar');
});
