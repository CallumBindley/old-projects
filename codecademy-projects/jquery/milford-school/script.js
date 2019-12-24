
var main = function() {


  //dropdown menu toggle when clicked
  $(".dropdown img").on("click", function(){
    $(".dropdown-menu").toggle();
  });

  //error message on forms if not filled in
  $("form").on("submit", function(){
    var emailInput = $("#email").val();
    var passwordInput = $("#password").val();

    //if there is not a non-whitespace character in the string
    if (/\S/.test(emailInput) === false ) {
      $(".email-error").text("Please enter your email.");
    }else {
      $(".email-error").text("");
    }
    // or a whitespace character at all
    if (/\S/.test(passwordInput) === false  || /\s/g.test(passwordInput)) {
      $(".password-error").text("Please enter your password.");
    }else {
      $(".password-error").text("");
    }


    return false;
  });


};

$(document).ready(main);
