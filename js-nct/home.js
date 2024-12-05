// =========    HOME VERTICAL FULL SLIDER ANIMATION CODE JS    ========= 
$('#home-sliding').pagepiling({
        verticalCentered: false,
        css3: false,
        scrollingSpeed: 900,
            keyboardScrolling: false,
        easing: 'swing',
        onLeave: function (index, nextIndex, direction) {

            $('.section').eq(index - 1).find('h1, p').fadeOut(700, 'easeInQuart');

            $('.section').eq(nextIndex - 1).find('h1, p').fadeIn(700, 'easeInQuart');


            if (nextIndex == 5) {
                $('#arrow, .vertical-nav, .bottom-menu').hide();

                $('#pp-nav').fadeOut();
                $('header').addClass('header-bg');

                $('#section5').find('.content').animate({
                    top: '0%'
                }, 700, 'easeInQuart');
            }

            if (index == 5) {
                $('#arrow, .vertical-nav, .bottom-menu').show();
                $('#pp-nav').fadeIn();
                $('header').removeClass('header-bg');
                $('#section5 .content').animate({
                    top: '100%'
                }, 700, 'easeInQuart');
            }
        },
    });

    $('#arrow').click(function () {
        $.fn.pagepiling.moveSectionDown();
    });
    $(document).on('click', '#moveUp', function(){
      $.fn.pagepiling.moveTo(1);
    });
var $ = jQuery.noConflict();
$(document).ready(function () {

    // =========    OWL CAROUSEL SLIDER ANIMATION CODE JS    ========= 

    $('.home-slider-carouser').owlCarousel({
        loop:false,
        smartSpeed: 1400,
        slideSpeed: 500,
        rewindSpeed: 100,
        navText: ['', ''],
        nav:true,
        dots: false,
        autoplay: true,
        responsive:{
            0:{
                items:1,
                touchDrag:false
            },
            767:{
                items:1,
                touchDrag:false
            },
            1000:{
                items:1,
                touchDrag:false
            }
        }
    })

// =========    SVG CODE ANIMATION CODE JS    =========  
    var v_text2 = new Vivus('logo-ani', { 
        type: 'delayed', 
        duration: 300, 
        start: 'autostart', pathTimingFunction: Vivus.EASE_OUT, }, 
        function(fill) {
        fill.el.classList.add('logo-fill');
    });


 // =========    CUSTOME CURSOR MOVING ANIMATION CODE JS    =========  

});

$(window).load(function () {
    owlCarouselInResponsive();
});
$(window).resize(function () {
    owlCarouselInResponsive();
});

function owlCarouselInResponsive() {
    if ($(window).width() <= 767) {
        $(".mission-steps").each(function () {
            $(this).owlCarousel({
                loop: false,
                autoplay: true,
                nav: true,
                navText: [''],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    }
                }
            })
        });
    } 
    else {
        $(".mission-steps").each(function () {
            var slider = $(this).data("owlCarousel");
            if (slider) {
                slider.destroy();
                $(this).removeClass('owl-carousel owl-loaded');
                $(this).find('.owl-stage-outer').children().unwrap();
            }
        });
    }
}


