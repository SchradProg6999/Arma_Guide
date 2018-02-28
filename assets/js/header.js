// This fixes my header

// Adjusts the headers when first loaded
$(document).ready(function() {
    adjustHeaders();
});

// Adjusts the headers when the window is resized
$(window).resize(function() {
    adjustHeaders();
});

// Fixes the mobile header; adjusts the size and position of
// the menu and menu seperator to cling to the header
function adjustHeaders() {
    var imgDisplay = $('.menuimages').css('display');
    if (imgDisplay == 'none') {
        var header = $('header');
        var menu = $('.menu');
        var menuSep = $('#menu-sep');

        menu.css('top', header.outerHeight() + "px");
        menuSep.css('height', header.outerHeight() + menu.outerHeight());
    }
    else {
        var menu = $('.menu');
        var menuSep = $('#menu-sep');
        menu.css('top', 0 + "px");
        menuSep.css('height', 0);
    }
}
