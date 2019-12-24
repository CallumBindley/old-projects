var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
  $('form').submit(function() {

    var text = $('#todo').val();
    var html = template(text);

    /* \S is used to find a non-whitespace character /\S/ is simplified version of " new RegExp("\\S") "
     .test() looks for a match in a string
     if there is a non-whitespace character in the string of var text then return true
     append the value of var template with text as an argument to div class="list"
     then clear all characters from input with id="todo". */
    if (/\S/.test(text)) {
      $('.list').append(html);
      $('#todo').val("");
    }

  return false;
});

  // when .glyphicon-star is clicked toggle active class
  $('.list').on( 'click', '.glyphicon-star', function(){
    $(this).toggleClass('active');
  });

  // when .glyphicon-remove is clicked remove the p tag that its nested in
  $('.list').on( 'click', '.glyphicon-remove', function(){
    $(this).parent('p').remove();
  });

};

$(document).ready(main);
