
var scrolled = 0;
$(document).ready(function() {
   $("#downClick").on("click" ,function() {
       // I assume scrolled is the height of the element you want to scroll to
       $('body,html').animate({ scrollTop: scrolled }, 800);
       scrolled = scrolled + 900;
       scrolled = 0;
   });
});
/*For scrolldown button
$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});*/

