(function ($) {
    "use strict";
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        loop: true,

    // Default (mobile)
        dots: true,
        nav: false,

        responsive: {
            0:{
                items:1,
                nav:false,
                dots:true
            },
            576:{
                items:1,
                nav:false,
                dots:true
            },
            768:{
                items:2,
                nav:true,
                dots:false
            },
            992:{
                items:3,
                nav:true,
                dots:false
            }
        },

        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });



    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        loop: true,

    // Mobile: dots on, nav off
        dots: true,
        nav: false,

        responsive: {
            0:{
                items:1,
                nav:false,
                dots:true
            },
            576:{
                items:2,
                nav:false,
                dots:true
            },
            768:{
                items:3,
                nav:true,
                dots:false
            },
            992:{
                items:4,
                nav:true,
                dots:false
            }
        },

        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });



    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

    $('.product-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  smartSpeed: 800,
  margin: 30,
  dots: true,
  nav: true,
  responsive: {
    0: { items: 1 },      // mobile: 1 item
    768: { items: 3 },    // tablet
    992: { items: 4 }     // laptop/desktop
  }
});

    $('.service-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  smartSpeed: 800,
  margin: 30,
  dots: true,
  nav: true,
  responsive: {
    0: { items: 1 },      // mobile: 1 item (swipe)
    768: { items: 2 },
    992: { items: 3 }
  }
});
