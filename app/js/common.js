$(function() {
   $(document).ready(function () {
      toggleMenu()
      scrollChangeMenu()
   });

   function toggleMenu() {
      $('#burger__input').click(function() {
         $('.header__wrap').toggleClass('header__open')
         $('.header__menu').toggleClass('menu__hide')
      })
   }
   function scrollChangeMenu() {
      let scrolled;
      window.onscroll = function() {
         scrolled = window.pageYOffset || document.documentElement.scrollTop;
         if(scrolled > 50){
            $('.header__wrap').addClass('header__open')
         }
         if(50 > scrolled){
            $('.header__wrap').removeClass('header__open')
         }

      }
   }

});
