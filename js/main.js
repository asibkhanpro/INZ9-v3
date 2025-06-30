(function ($) {
    "use strict";


    // preloader
    $(window).on('load', function () {
        // ------- Prealoder ------
        $("#preloader").delay(300).fadeOut("slow");
    });

    // Events when window is scrolled
    $(window).on('scroll', function () {
        // back-to-top statement
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').addClass("topbtn_hide");
        } else {
            $('.back-to-top').removeClass("topbtn_hide");
        }

        // site_header
        if ($(this).scrollTop() >= 100) {
            $('.site_header').addClass('menu_sticky');
        } else {
            $('.site_header').removeClass('menu_sticky');
        }
    });

    $(function () {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const $img = $(entry.target);

                    // Only act when image finishes loading
                    $img.on('load', function () {
                        setTimeout(() => {
                            $img.addClass('loaded');
                        }, 500);
                    });

                    // If image is already loaded (rare but possible), trigger manually
                    if ($img[0].complete && $img[0].naturalHeight !== 0) {
                        $img.trigger('load');
                    }

                    // Stop observing once triggered
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Trigger when at least 10% is visible
        });

        $('img[loading="lazy"]').each(function () {
            observer.observe(this);
        });
    });


    // Events when document is ready
    $(document).ready(function () {

        // toggled_menu_icon
        // $(".toggled_menu_icon").click(function (e) {
        //     $('body').toggleClass("menu_active overflow-hidden");
        // });

        // favorite_btn
        $(".favorite_btn").click(function (e) {
            $(this).toggleClass("active");
        });

        // menu_toggle
        $(".menu_toggle").click(function (e) {
            $('.mobile_menu').fadeToggle();
        });

        // exclamation_btn
        $(".exclamation_btn").hover(function (e) {
            $(this).closest('.favourite_box').toggleClass("active");
        });


        // partners_slider
        $('.hero_slider').owlCarousel({
            loop: false,
            margin: 0,
            items: 1,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    margin: 0,
                },
                576: {
                    margin: 0,
                },
                768: {
                    margin: 0,
                },
                992: {
                    margin: 0,
                }
            }
        });

        // odometer
        var qty = 12345678900;
        var $el = $(".odometer");
        var od = new Odometer({
            el: $el[0], // jQuery object to plain DOM element
            format: "(,ddd)",
            theme: "default"
        });
        setInterval(function () {
            qty += 15000;
            $el.html(qty); // jQuery equivalent of innerHTML
        }, 5000);


    });

})(jQuery);

