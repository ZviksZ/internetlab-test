$(function() {
   $(document).ready(function () {
      toggleMenu()
      scrollChangeMenu()
      sliderBlockSlider()
   });

   function toggleMenu() {
      $('#burger__icon').click(function() {
         $('.header').toggleClass('header__open')
         $('.header__menu').toggleClass('menu__hide')
      })
   }

   function scrollChangeMenu() {
      let scrolled;
      window.onscroll = function() {
         scrolled = window.pageYOffset || document.documentElement.scrollTop;
         if(scrolled > 50){
            $('.header').addClass('header__scroll')
         }
         if(50 > scrolled){
            $('.header').removeClass('header__scroll')
         }
      }
   }

   function sliderBlockSlider() {
      let sliderLength = $('.slider-block__slider .item').length
      $('.slider-block__slider').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         adaptiveHeight: true,
         arrows: true,
         dots: true,
         nextArrow: '<div class="slider-arrow slider-next"></div>',
         prevArrow: '<div class="slider-arrow slider-prev"></div>',
         customPaging : function(slider, i) {
            return '<a>'+(i+1)+' из '+ sliderLength +' </a>';
         },
      });
   }

});
