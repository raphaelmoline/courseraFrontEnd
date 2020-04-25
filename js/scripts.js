$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
      if ($('#carouselButton').children('span').hasClass('fa-pause')) {
          $("#mycarousel").carousel('pause');
          $('#carouselButton').children('span').removeClass('fa-pause');
          $('#carouselButton').children('span').addClass('fa-play');
      }
      else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
      }
    });
});
$("#loginClose").click(function() {
 $('#loginModal').modal('hide');
});
$("#loginCancel").click(function() {
 $('#loginModal').modal('hide');
});
$("#reserveClose").click(function() {
 $('#reserveTable').modal('hide');
});
$("#reserveCancel").click(function() {
 $('#reserveTable').modal('hide');
});
$("#reserveFormButton").click(function() {
 $('#reserveTable').modal('toggle');
});
$("#loginButton").click(function() {
 $('#loginModal').modal('toggle');
});
