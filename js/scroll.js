var scrolled = 0;
$(document).ready(function() {
   $("#downClick").on("click" ,function() {
       // I assume scrolled is the height of the element you want to scroll to
       scrolled = scrolled + 750;
       $('body,html').animate({ scrollTop: scrolled }, 700);
       scrolled = 0;
   });
});

var scrolled = 0;
$(document).ready(function() {
   $("#contact-button").on("click" ,function() {
       // I assume scrolled is the height of the element you want to scroll to
       scrolled = scrolled + 3000;
       $('body,html').animate({ scrollTop: scrolled }, 700);
       scrolled = 0;
   });
});