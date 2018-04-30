$(document).ready(function() {

    /*    Sticky Navigation    */

    $('.js--section-features').waypoint(function(direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }

        },
        {
            offset: '60px;'
        });

    /*    Button Click Navigation    */

    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });

    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });

    /*      Navigation scroll       */
    $(function() {
        $('a[href*="#"]:not([href="#"]').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                            scrollTop: target.offset().top
                        },
                        1000);
                }
            }
        });
    });

    /*     Animation     */
    $('.js--wp-1').waypoint(function(direction) {
            $('.js--wp-1').addClass('animated fadeIn');
        },
        {
            offset: '50%'
        });

    $('.js--wp-2').waypoint(function (direction) {
            $('.js--wp-2').addClass('animated fadeInUp');
        },
        {
            offset: '50%'
        });

    $('.js--wp-3').waypoint(function (direction) {
            $('.js--wp-3').addClass('animated fadeIn');
        },
        {
            offset: '50%'
        });

    $('.js--wp-4').waypoint(function (direction) {
            $('.js--wp-4').addClass('animated pulse');
        },
        {
            offset: '50%'
        });


    /*  Mobile Navigation   */

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('fas fa-bars')) {
            icon.addClass('far fa-times-circle');
            icon.removeClass('fas fa-bars');

        } else {
            icon.addClass('fas fa-bars');
            icon.removeClass('far fa-times-circle');
        }
        
    });
});

