var main = function() {

  $(".dropdown").on("click", function(){
    $(this).children("ul").toggle();
    $(this).siblings().children("ul").hide();
  });

};

$(document).ready(main);
