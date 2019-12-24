
var main = function(){
  $(".login p").on("click", function(){
    $(".dropdown-menu").toggle();
  });

  $( "#accordion" ).accordion();

};

$(document).ready(main);
