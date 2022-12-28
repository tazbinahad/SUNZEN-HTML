(function ($) {
  'use strict';

  jQuery(document).ready(function () {
    /* Mobile-Menu Active
      ============================*/
    $('#mobile-menu-active').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: '767',
    });

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

  /* Smooth Scrolling
  ============================*/
  // $('#nav').onePageNav({
  //   currentClass: 'current',
  //   changeHash: false,
  //   scrollSpeed: 300,
  //   scrollThreshold: 0.5,
  //   filter: '',
  //   easing: 'swing',
  //   begin: function () {
  //     //I get fired when the animation is starting
  //   },
  //   end: function () {
  //     //I get fired when the animation is ending
  //   },
  //   scrollChange: function ($currentListItem) {
  //     //I get fired when you enter a section and I pass the list item of the section
  //   },
  // });

  jQuery(window).load(function () {
    /* Sticky Header
    ============================*/
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 50) {
        $('.header-area').addClass('sticky');
      } else {
        $('.header-area').removeClass('sticky');
      }
    });
  });

  function stopPropagation(e) {
    e?.stopPropagation();
  }
})(jQuery);
