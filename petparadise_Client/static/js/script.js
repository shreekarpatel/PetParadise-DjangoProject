(function ($) {

    "use strict";

    //Hide Loading Box (Preloader)

    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }
    $(window).on('load', function () {
        handlePreloader();
    });

    // $('.popup-img').magnificPopup({
    //     type: 'image',
    //     // other options
    // });
    /*==========================================================
            countdown timer
    ======================================================================*/
    $('.countdown-timer[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');

        $this.countdown(finalDate, function (event) {
            var $this = $(this).html(event.strftime(' ' +
                '<span class="timer-count">%-D <span class="timer-title">Days</span></span>  ' +
                '<span class="timer-count">%H <span class="timer-title">Hours</span></span> ' +
                '<span class="timer-count">%M <span class="timer-title">Minutes</span></span> ' +
                '<span class="timer-count">%S <span class="timer-title">Secods</span></span>'));
        });
    });

    /* ----- MASONRY ISOTOP GALLERY ----- */
    if ($('.masonry-gallery').length > 0 || $('.masonry-grid').length > 0 || $('.masonry-grid-fitrows').length > 0) {
        // $(window).load(function() {

        $('.masonry-gallery').fadeIn();
        var $container = $('.masonry-gallery').isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'masonry',
            transitionDuration: '0.6s',
            filter: "*"
        });
        $('.masonry-grid').isotope({
            itemSelector: '.masonry-grid-item',
            layoutMode: 'masonry'
        });
        $('.masonry-grid-fitrows').isotope({
            itemSelector: '.masonry-grid-item',
            layoutMode: 'fitRows'
        });
        // filter items on button click
        $('.masonry-filter').on('click', 'li a', function () {
            var filterValue = $(this).attr('data-filter');
            $(".masonry-filter").find("a.active").removeClass("active");
            $(this).parent().addClass("active");
            $container.isotope({ filter: filterValue });
            return false;
        });
        // init Isotope
        /* var $grid = $('.masonry-gallery').isotope({
          // options
        });
        // filter items on button click
        $('.filter-button-group').on( 'click', 'button', function() {alert($(this).attr('data-filter'));
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });*/
        //  });
    };

    //Fact Counter + Text Count

    if ($('.count-box').length) {
        $('.count-box').appear(function () {

            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function () {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            }

        }, { accY: 0 });
    }



    /* ----- LighvtBox / Fancybox ----- */
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox();
    }


    if ($('.testimonial-carousel-two').length) {
        $('.testimonial-carousel-two').owlCarousel({
            loop: true,
            margin: 60,
            nav: true,
            navText: [
                '<i class="fa fa-long-arrow-left"></i>',
                '<i class="fa fa-long-arrow-right"></i>'
            ],
            dots: false,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                // 480: {
                //     items: 1,
                //     autoWidth: false
                // },
                991: {
                    items: 1,
                    autoWidth: false
                },
                992: {
                    items: 2,
                    autoWidth: false
                },
                1200: {
                    items: 2,
                    autoWidth: false
                },
                1400: {
                    items: 2,
                    autoWidth: false
                }
            }
        });
    };

    if ($('.accrodion-grp').length) {

        $('.accrodion-grp').each(function () {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            Self.find('.accrodion').each(function () {
                $(this).find('.accrodion-title').on('click', function () {
                    if ($(this).parent().hasClass('active') === false) {
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().addClass('active');
                        $(this).parent().find('.accrodion-content').slideDown();
                    };
                });
            });
        });

    };

    //Update Header Style and Scroll to Top

    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-to-top');
            if (windowpos >= 250) {
                siteHeader.addClass('fixed-header');
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.fadeOut(300);
            }
        }
    }

    headerStyle();


    //Submenu Dropdown Toggle
    if ($('.main-header .navigation li.dropdown ul').length) {
        $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

        //Dropdown Button
        $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
        });
    }


    //Fixed Right Top Consultation Form Toggle
    if ($('.main-header .outer-box .nav-btn').length) {
        //Show Form
        $('.main-header .outer-box .nav-btn').on('click', function (e) {
            e.preventDefault();
            $('body').addClass('appointment-form-visible');
        });
        //Hide Form
        $('.appointment-box .inner-box .cross-icon,.form-back-drop').on('click', function (e) {
            e.preventDefault();
            $('body').removeClass('appointment-form-visible');
        });
    }


    //Event Countdown Timer
    if ($('.time-countdown').length) {
        $('.time-countdown').each(function () {
            var $this = $(this),
                finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function (event) {
                var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span><span class="unit">Days</div></div> ' + '<div class="counter-column"><span class="count">%H</span><span class="unit">Hours</div></div>  ' + '<div class="counter-column"><span class="count">%M</span><span class="unit">Mins</div></div>  ' + '<div class="counter-column"><span class="count">%S</span><span class="unit">SECS</div></div>'));
            });
        });
    }


    //Custom Seclect Box
    if ($('.custom-select-box').length) {
        $('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
    }


    //Fact Counter + Text Count
    if ($('.count-box').length) {
        $('.count-box').appear(function () {

            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function () {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            }

        }, { accY: 0 });
    }




    //Single Item Carousel
    if ($('.single-item-carousel').length) {
        $('.single-item-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },

                768: {
                    items: 1
                },

                800: {
                    items: 1
                },
                960: {
                    items: 1
                },
                1024: {
                    items: 1
                }
            }
        });
    }


    //Testimonial Item Carousel
    if ($('.testimonials-item-carousel').length) {
        $('.testimonials-item-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="fa fa-long-arrow-left"></span>', '<span class="fa fa-long-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },

                768: {
                    items: 1
                },

                800: {
                    items: 1
                },
                960: {
                    items: 1
                },
                1024: {
                    items: 1
                }
            }
        });
    }


    //Date Picker
    if ($('.datepicker').length) {
        $('.datepicker').datepicker();
    }


    //Gallery Filters
    if ($('.filter-list').length) {
        $('.filter-list').mixItUp({});
    }


    //LightBox / Fancybox
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            buttons: [
                "slideShow",
                "fullScreen",
                "share",
                "close"
            ],
            helpers: {
                media: {}
            }
        });
    }

    //Contact Form Validation
    if ($('#contact-form').length) {
        $('#contact-form').validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                }
            }
        });
    }


    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-bs-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }


    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: false, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }

    /* ==========================================================================
       When document is Scrollig, do
       ========================================================================== */

    $(window).on('scroll', function () {
        headerStyle();
    });

    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */
    $(window).load(function () {
        if ($('#petcarousel').length) {
            $('#petcarousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 210,
                itemMargin: 5,
                asNavFor: '#petslider'
            });

            $('#petslider').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                sync: "#petcarousel",
                start: function (slider) {
                    $('body').removeClass('loading');
                }
            });
        }
    });

})(window.jQuery);


/* ==========================================================================
    Home 5 Script
   ========================================================================== */


$(document).ready(function () {

    // Preloader

    $("#preloading").fadeOut("slow");

    // Header

    if ($(".header").length) {
        $('ul.navbar-nav li.dropdown').hover(function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(10).fadeIn(0);
            $(this).addClass("active");
        }, function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(0);
            $(this).removeClass("active");
        });
    }

    // Custom Classes

    // Pet

    $(".pet a.btn.main").addClass("hvr-rectangle-in");
    $(".pet button.btn").addClass("hvr-rectangle-in");
    $(".pet .new_foot a.btn").addClass("hvr-radial-in");

    // About Pet

    $(".about.pet .team .member p a").addClass("hvr-radial-in");

    // Job Profile

    $(".pet.detail .jb_detail .card .links a").addClass("hvr-radial-in");

    // Team Detail

    $(".pet.tm_profile .profile .images+.card ul li.links a").addClass("hvr-radial-in");

    // Blog Profile

    $(".pet.b_profile .job .profile .elements span.share a").addClass("hvr-radial-in");


    // Pet

    if ($(window).width() < 992) {
        $(".pet img").addClass("img-fluid");
        $(".pet .slider img").removeClass("img-fluid");
    };
    if ($(window).width() < 768) {
        $(".pet img").addClass("img-fluid");
        $(".pet img").css("max-width", "100%");
    };

    // About Pet

    if ($(window).width() < 768) {

        // Global

        $(".pet.about .col-sm-4.custom").css("width", "33.33%");
        $(".pet.about .col-sm-8.custom").css("width", "66.66%");

        // About Pet

        $(".about.pet .about_us .image .an_image, .about.second .about_us .image .an_image").removeClass("an_image_vt_ps_middle");
        $(".about.pet .about_us .image .an_image, .about.second .about_us .image .an_image").addClass("an_image_vt_ps_bottom");

        // About Pet 2

    };


    // Search Field

    if ($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function () {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function () {
            $('body').removeClass('search-active');
        });
    }

    // Back to top button

    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('.pet #back2Top').fadeIn();
        } else {
            $('.pet #back2Top').fadeOut();
        }
    });
    $(".pet #back2Top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 1400);
        return false;
    });

    // Accordion FAQ

    $('.pet .faq .accordion-item').on('click', function () {
        $(".pet .faq .accordion-item").removeClass("active");
        $(this).addClass("active");
    });

    // Owl Carousel

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        autoHeight: false,
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-paw'>", "<i class='fas fa-paw'>"],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            }
        }
    });

    var owl = $('.pet .new_custom .owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        autoHeight: false,
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-paw'>", "<i class='fas fa-paw'>"],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            }
        }
    });

    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })

    // Mousewheel Animation

    var owl = $(".pet .new_custom .owl-carousel");
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });

    // Wow Animation

    new WOW().init();

    // Scroll Animation

    window.pt_requestAnimFrame = function () {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            }
        );
    }();

    window.an_image_loop = function () {
        var win_w = window.innerWidth;
        var win_h = window.innerHeight;
        $('html:not(.pt_touch) .an_image').each(function () {
            var elem = $(this).find('.an_image_image');
            var bounds = this.getBoundingClientRect();
            if (bounds.top < win_h && bounds.bottom > 0) {
                var speed = $(this).attr('data-speed') / 10;
                var ypos = (bounds.top - win_h / 2) * speed;
                var xpos = (bounds.top - win_w / 2) * speed;
                elem.css('transform', 'translateY(' + ypos + 'px)');
            }

        });
        window.an_image_lock = false;
    }

    window.an_image_lock = false;

    $(window).on('scroll', function () {
        if (!window.an_image_lock) {
            window.an_image_lock = true;
            pt_requestAnimFrame(an_image_loop);
        }
    });

    // FAQ

    $(".pet .contact .collapse").on('show.bs.collapse', function () {
        $(this).prev(".accord").find(".fas").removeClass("fa-paw").addClass("fa-paw");
    }).on('hide.bs.collapse', function () {
        $(this).prev(".accord").find(".fas").removeClass("fa-paw").addClass("fa-paw");
    });

    if ($(".svg-icon ").length) {
        var $svgIconBox = $('.card');
        $svgIconBox.each(function () {
            var $this = $(this),
                $svgIcon = $this.find('.svg-icon'),
                $id = $svgIcon.attr('id'),
                $icon = $svgIcon.data('svg-icon');
            if ($id != null)
                var $vivus = new Vivus($id, { duration: 200, file: $icon });
            $this.on('mouseenter', function () {
                $vivus.reset().play();
            });
        });
    }



    // Range Slider

    if ($(".range_slider").length) {

        var range = document.getElementById("myRange");
        var result = document.getElementById("result");
        var hour = document.getElementById("day");

        var rate = 100;
        var pet_t = 0;
        var serve_t = 0;

        result.innerHTML = 100;
        hour.innerHTML = 1;

        $('#pet').change(function () {
            var pet = $('#pet :selected').val();
            if (pet == "") {
                pet_t = 0;
            }
            if (pet == "Cat") {
                pet_t = 100;
            }
            if (pet == "Dog") {
                pet_t = 150;
            }
            result.innerHTML = rate + pet_t + serve_t;
        });

        $('#service').change(function () {
            var service = $('#service :selected').val();
            if (service == "") {
                serve_t = 0;
            }
            if (service == "Bath") {
                serve_t = 100;
            }
            if (service == "Grooming") {
                serve_t = 150;
            }
            result.innerHTML = rate + pet_t + serve_t;
        });

        range.oninput = function () {
            rate = this.value * 100;
            result.innerHTML = rate + pet_t + serve_t;
            hour.innerHTML = this.value;
        }

    }

    // Counter

    if ($(".counter-portion").length) {

        jQuery(window).scroll(startCounter);

        function startCounter() {
            var hT = jQuery('.counter-portion').offset().top,
                hH = jQuery('.counter-portion').outerHeight(),
                wH = jQuery(window).height();
            if (jQuery(window).scrollTop() > hT + hH - wH) {
                jQuery(window).off("scroll", startCounter);
                jQuery('.counting-value').each(function () {
                    var $this = jQuery(this);
                    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
            }
        }

    }

});

$('.mobile_small_menu').on('click', function () {
    $(".menu-small").css({ "display": "block !important" });
});