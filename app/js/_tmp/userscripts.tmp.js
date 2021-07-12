"use strict";

document.addEventListener('DOMContentLoaded', function () {
  /* Hamburher menu */
  var menu = document.querySelector('.mobile-menu');
  /* Aside menu */

  var burger = document.querySelector('.burger');
  /* desktop btn aside menu  */

  var menuClose = document.querySelector('.mobile-menu__close');
  /* close btn for aside menu */

  var overlay = document.querySelector('.overlay');
  /* overlay for aside menu */

  /* lock screen scroll */

  var lockScroll = function lockScroll() {
    document.body.classList.add('lock');
  };
  /* unlock screen scroll */


  var unlockScroll = function unlockScroll() {
    document.body.classList.remove('lock');
  };
  /* Open menu */


  burger.addEventListener('click', function () {
    menu.classList.add('open');
    overlay.classList.add('open');
    lockScroll();
  });
  /* Close aside menu */

  menuClose.addEventListener('click', function () {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    unlockScroll();
  });
  /* Remove overlay and unlock screen scroll */

  overlay.addEventListener('click', function () {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    unlockScroll();
  });
  /* End of Hamburher menu */

  var welcomeBlogSlider = document.querySelector('.welcome-blog-slider');

  if (welcomeBlogSlider) {
    var BlogSlider = new Swiper(welcomeBlogSlider, {
      // Optional parameters

      /* loop: true, */
      slidesPerView: 3,
      spaceBetween: 32,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1
        },
        // when window width is >= 480px
        950: {
          slidesPerView: 2
        },
        // when window width is >= 640px
        1350: {
          slidesPerView: 3
        }
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }
  /* $('.commerce__tab-item').click(function (e) {
  	e.preventDefault();
  
  	$('.commerce__tab-item').removeClass('floor-switch__tab-item--active');
  	$('.commerce__tab-content').removeClass('commerce__tab-content--active').removeClass('in');
  
  	
  	var href = $(this).attr('href');
  
  	$(this).addClass('floor-switch__tab-item--active');
  	$(href).addClass('commerce__tab-content--active');
  
  	  setTimeout(function () {
  		$(href).addClass('in');
  	}, 200);
  }); */

  /* const BigGallery = document.querySelectorAll('.big-gallery');
  BigGallery.forEach((el) => {
  	let swiper = new Swiper(el, {
  	
  	observer: true,
  	observeParents: true,
  	slidesPerView: 1,
  		
  	pagination: {
  		el: '.custom-swiper-pagination',
  		type: 'fraction',
  		renderFraction: function (currentClass, totalClass) {
  		return '<span class="' + currentClass + '"></span>' +
  			' из ' +
  			'<span class="' + totalClass + '"></span>';
  		},
  	},
  	
  	navigation: {
  		nextEl: '.big-gallery-button-next ',
  		prevEl: '.big-gallery-button-prev',
  	},
  	});
  }); */

});