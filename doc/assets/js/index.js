(function($){
"use strict";

/* === BASIC SETTING === */

var themeApp = {
    theme_navigation:function(){
        $('.hidden a').click(function(e){
            e.preventDefault();
            $('#theme-navigation-list').slideToggle();
        });
    },

    // --- 29-10-2014, 01:35 am
    // imam firmansyah add this function

    theme_scroll:function() {
    	$('#theme-navigation-list, p').find("a").click(function(e) {
            e.preventDefault();
            var target = $(this).attr("href");

            $('html,body').animate({
               scrollTop: $(target).offset().top
            },500);
    	});

    },

    theme_init:function(){
        themeApp.theme_navigation();
        themeApp.theme_scroll();
    }
}

/* === INITIALING === */

$(document).ready(function(){
    themeApp.theme_init();

    //  Smooth scroll

    try {
        $.browserSelector();
            if($("html").hasClass("chrome" || "opera")) {
                $.smoothScroll();
            }
        } catch(err) {}

    });

}(jQuery));