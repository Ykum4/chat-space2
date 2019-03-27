$(document).on('turbolinks:load', function(){
  var target = $('.notification')[0];  
  if (target) {
    $('.notification').fadeOut(3000);
  }
});