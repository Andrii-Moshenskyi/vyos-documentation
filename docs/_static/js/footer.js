$(document).ready(function() {
  const $scrollTrigger = $('.scroll-trigger');
  const $iframeContainer = $('.iframe-container');

  $(window).scroll(function() {
    const scrollTriggerPosition = $scrollTrigger.offset().top;
    const windowHeight = $(window).height();

    if (scrollTriggerPosition < windowHeight) {
      // Show the iframe container when the scroll trigger is in the viewport
      $iframeContainer.show();
    } else {
      // Hide the iframe container when the scroll trigger is out of the viewport
      $iframeContainer.hide();
    }
  });
});