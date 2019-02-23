import 'promise-polyfill/src/polyfill';
import SETUP from './setup.js';

(function ($) {
  SETUP.run($);

  $('.slider').slick({
    dots: true,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev">\x3c</button>',
    nextArrow: '<button type="button" class="slick-next">\x3e</button>',
    autoplay: true,
    autoplaySpeed: 5000,
  });

})(jQuery);
