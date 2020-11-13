/*$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
  });
}); */
var scrolled = 0;
$(document).ready(function() {
   $("#downClick").on("click" ,function() {
       // I assume scrolled is the height of the element you want to scroll to
       scrolled = scrolled + 700;
       $('body,html').animate({ scrollTop: scrolled }, 600);
       scrolled = 0;
   });
});
