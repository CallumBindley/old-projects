var main = function() {

  $(".notification img").on("click", function(){
    $(".notification-menu").toggle();
  });

  $('.post .btn').on("click", function() {
    $(this).toggleClass('btn-like');
  });

};

$(document).ready(main);
