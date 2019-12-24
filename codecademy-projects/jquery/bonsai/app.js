var main = function(){

  var formTextChange = function(a,b){
      $(a).keyup(function(){
        $(b).text($(this).val());
      });
  };

  var textTop =  formTextChange("#top-text",".top-caption");
  var textBottom = formTextChange("#bottom-text",".bottom-caption");

  $("#image-url").keyup(function(){
      $("#image-background").attr("src",$(this).val());
  });

};

$(document).ready(main);
