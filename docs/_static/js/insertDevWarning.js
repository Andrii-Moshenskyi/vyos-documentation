$(document).ready(function () {
  const devwarning = $('.devwarning')

  if(devwarning) {
    const body = $('.wy-body-for-nav')
    const container = $('.wy-grid-for-nav')
    // devwarning.after(body).appendTo(container)
    jQuery(jQuery(".devwarning").detach()).appendTo(".wy-grid-for-nav")
    container.addClass('additionalPaddingForMainContent')
  }
})