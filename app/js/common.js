$(function() {
   $(document).ready(function () {
      toggleMenu()
      scrollChangeMenu()
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

});
