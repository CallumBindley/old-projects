var main = function() {
  $('.nav li').click(function() {

    //STORES THE CLASS OF THE NAV BUTTON CLICKED IN A VARIABLE
    var category = $(this).attr('class');

    //REMOVES 'ACTIVE' CLASS ON ALL , ASSIGNS TO THE CLICKED NAV BUTTON
    $('.nav li').removeClass('active');
    $(this).addClass('active');

    //REMOVES 'SELECTED' CLASS ON ALL THUMBNAILS, ASSIGNS TO ARGUMENT
    var activeThumb = function(thumbnailClass){
      $('.thumbnail').removeClass('selected');
      $(thumbnailClass).addClass('selected');
    };

    //WHEN NAV IS CLICKED RUN activeThumb FUNCTION ON CORRESPONDING THUMBNAIL
    if(category === 'nav-all'){
      $('.thumbnail').removeClass('selected');
    }else if(category === 'nav-consumer'){
      activeThumb('.consumer');
    }else if(category === 'nav-mobile'){
      activeThumb('.mobile');
    }else if(category === 'nav-commerce'){
      activeThumb('.commerce');
    }else if(category === 'nav-enterprise'){
      activeThumb('.enterprise');
    }

    /* SWITCH VERSION

    switch (category){
      case ('nav-all'):
        $('.thumbnail').removeClass('selected');
        break;
      case ('nav-consumer'):
        activeThumb('.consumer');
        break;
      case ('nav-mobile'):
        activeThumb('.mobile');
        break;
      case ('nav-commerce'):
        activeThumb('.commerce');
        break;
      case ('nav-enterprise'):
        activeThumb('.enterprise');
        break;
      default:
        break;
    }
    
    */

  });
};

$(document).ready(main);
