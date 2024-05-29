$(document).ready(function () {

  const devwarning = $('.devwarning')

  if(devwarning.length) {
    const container = $('.wy-grid-for-nav')
    jQuery(jQuery(".devwarning").detach()).appendTo(".wy-grid-for-nav")
    container.addClass('additionalPaddingForMainContent')
  }

})