$(window).scroll(function() {
  if ($(document).scrollTop() > 0) {
    $('nav').addClass('inverse');
  } else {
    $('nav').removeClass('inverse');
  }
});