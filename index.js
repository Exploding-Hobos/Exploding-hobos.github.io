$(document).ready(function() {
  
    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        console.log($(window).scrollTop())
      if ($(window).scrollTop() > 280) {
        $('#navStyle').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < 281) {
        $('#navStyle').removeClass('navbar-fixed');
      }
    });
  });



//   $(document).ready(function() {
//     var navpos = $('#navStyle').offset();
//     console.log(navpos.top);
//       $(window).bind('scroll', function() {
//         if ($(window).scrollTop() > navpos.top) {
//          $('#navStyle').addClass('navbar-fixed-top');
//          }
//          else {
//            $('#navStyle').removeClass('navbar-fixed-top');
//          }
//       });
//   });