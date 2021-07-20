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
  /* Work shop tabs */


  $('.work-shop-sliders__nav-link').click(function (e) {
    e.preventDefault();
    $('.work-shop-sliders__nav-link').removeClass('work-shop-sliders__nav-link_active');
    $('.work-shop-sliders__tab').removeClass('work-shop-sliders__tab_active').removeClass('in');
    var href = $(this).attr('href');
    $(this).addClass('work-shop-sliders__nav-link_active');
    $(href).addClass('work-shop-sliders__tab_active');
    setTimeout(function () {
      $(href).addClass('in');
    }, 200);
  });
  /* Flors tabs */

  $('.floor-nav__link').click(function (e) {
    e.preventDefault();
    $('.floor-nav__link').removeClass('floor-nav__link_active');
    $('.floor-nav__tab').removeClass('floor-nav__tab_active').removeClass('in');
    var href = $(this).attr('href');
    $(this).addClass('floor-nav__link_active');
    $(href).addClass('floor-nav__tab_active');
    setTimeout(function () {
      $(href).addClass('in');
    }, 200);
  });
  var slidersMain = document.querySelectorAll('.work-shop-slider__main');
  var slidersThumbs = document.querySelectorAll('.work-shop-slider__thumbs');

  for (i = 0; i < slidersMain.length; i++) {
    slidersMain[i].classList.add('gallery-top-' + i);
    slidersThumbs[i].classList.add('thumbs-class-' + i);
    var galleryThumbs = new Swiper('.thumbs-class-' + i, {
      observer: true,
      observeParents: true,
      spaceBetween: 17,
      slidesPerView: 'auto',
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    });
    var galleryTop = new Swiper('.gallery-top-' + i, {
      observer: true,
      observeParents: true,
      spaceBetween: 30,
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
  }
});