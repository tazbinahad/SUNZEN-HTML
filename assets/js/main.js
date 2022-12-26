(function ($) {
  'use strict';

  jQuery(document).ready(function () {
    /* Slider Item Slide
  ============================*/
    $('.slider-active').slick({
      infinite: true,
      slidesToShow: 1,
      arrows: false,
      slidesToScroll: 1,
      autoplay: true,
      loop: true,
      dots: true,
      autoplaySpeed: 2000,
    });
  });

  jQuery(window).load(function () {
    /* Sticky Header
    ============================*/
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 20) {
        $('.header-aria').addClass('sticky');
      } else {
        $('.header-aria').removeClass('sticky');
      }
    });


  });
})(jQuery);
