var $ = jQuery.noConflict();
$(document).ready(function () {
    // =========    RESPONSIVE MENU ANIMATION CODE JS    =========  
    $('.nav-toggle-sm').on('click', function(){
        if ($('html').hasClass('body-menu-opened')) {
            $('html').removeClass('body-menu-opened').addClass('body-menu-close');
        } else {
            $('html').addClass('body-menu-opened').removeClass('body-menu-close');
        }
    });


    // =========    SVG CODE ANIMATION CODE JS    =========  
    var v_text2 = new Vivus('mission-ani', { 
        type: 'delayed', 
        duration: 500, 
        start: 'autostart', pathTimingFunction: Vivus.EASE_OUT, 
    }, 
        function(fill) {
        fill.el.classList.add('mission-stroke');
    });

});


$(".opening-form").click(function() {
    $('html, body').animate({
        scrollTop: $(".current-opening").offset().top
    }, 1000);
});  


$(window).load(function () {
    // CustomcursorIn();
    eqHeight();
});
$(window).resize(function () {
    // CustomcursorIn();
    eqHeight();
});

 // =========    CUSTOME CURSOR MOVING ANIMATION CODE JS    =========  

// function CustomcursorIn() {
//     if ($(window).width() >= 768) {
//         var initCursor = new NodeCursor({
//           cursor: true,
//           node: true,
//           cursor_velocity: 0,
//           node_velocity: 0.15,
//           native_cursor: 'none',
//           element_to_hover: 'a',
//           element_to_hover : '.nodeHover',
//           cursor_class_hover: 'disable',
//           node_class_hover: 'expand',
//           hide_mode: true,
//           hide_timing: 200 });
//     } 
// } 

(function ($) {
    $.fn.isOnScreen = function (test) {
        var height = this.outerHeight();
        var width = this.outerWidth();
        if (!width || !height) {
            return false;
        }
        var win = $(window);
        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft()
        };
        viewport.right = viewport.left + win.outerWidth();
        viewport.bottom = viewport.top + win.outerHeight();
        var bounds = this.offset();
        bounds.right = bounds.left + width;
        bounds.bottom = bounds.top + height;
        var deltas = {
            top: viewport.bottom - bounds.top,
            left: viewport.right - bounds.left,
            bottom: bounds.bottom - viewport.top,
            right: bounds.right - viewport.left
        };
        if (typeof test == 'function') {
            return test.call(this, deltas);
        }
        return deltas.top > 0 && deltas.left > 0 && deltas.right > 0 && deltas.bottom > 0;
    };
})(jQuery);

$(window).scroll(function () {
    $(".about-sec, .fin-outer-view, .whyus-sec, .team-heading, .vision-img, .career-lft-heading").each(function () {
        if ($(this).isOnScreen()) {
            $(this).addClass("onView");
        }
    });
});
$(window).load(function () {
    $(".team-heading, .about-sec, .vision-img, .career-lft-heading").each(function () {
        if ($(this).isOnScreen()) {
            $(this).addClass("smooth");
        }
    });
});

function eqHeight() {
    var maxheight = 0;
    $(".same-height").css("height", "auto");
    $(".same-height").each(function () {
        if ($(this).outerHeight() > maxheight) {
            maxheight = $(this).outerHeight();
        }
    });
    $(".same-height").outerHeight(maxheight);
}
jQuery(document).ready(function () {
    eqHeight();
});