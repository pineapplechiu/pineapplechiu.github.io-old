$(document).ready(function() {
  var offset = 220;
  var duration = 500;

  var $win = $(window);
  var $backToTop = $('.back-to-top');

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > offset) {
      $backToTop.fadeIn(duration);
    } else {
      $backToTop.fadeOut(duration);
    }
  });
  
  $backToTop.on('click', function(event) {
    $('html, body').animate({scrollTop: 0}, duration);
    event.preventDefault();
  })
});