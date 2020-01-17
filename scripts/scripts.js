$(document).ready(function() {

  var width = 720;
  var animationSpeed = 1250;
  var pause = 3500;
  var currentSlide = 1;

  var $slider = $('#slider');
  var $slideContainer = $('.slides', $slider);
  var $slides = $('.slide', $slider);

  var interval;

  interval = setInterval(function() {
      $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
          if (++currentSlide === $slides.length) {
              currentSlide = 1;
              $slideContainer.css('margin-left', 0);
          }
      });
  }, pause);

    function pauseSlider() {
        clearInterval(interval);
    }
    startSlider();
});
