$(document).ready(function() {
  insertIframe()
  changeSidebarHeightAndCreateIframe()

  $(window).resize(function() {
    changeSidebarHeightAndCreateIframe()
  })

  $(window).scroll(function() {
    changeSidebarHeightAndCreateIframe()
  })
});

function insertIframe() {
  const body = $('.wy-body-for-nav')
  body.append(divWithIframe)
}

function changeSidebarHeightAndCreateIframe() {
  
  const iframeContainer = $('.iframe-container')
  const screenWidth = $(window).width()
  const windowHeight = $(document).height(); // maximum height
  const iframeHeight = iframeContainer.height() // height of bottom iframe
  const sidebar = $('.wy-nav-side') // sidebar element
  const currentPosition = $(document).scrollTop()
  const browserHeight = $(window).height()
  const additionalPaddingFromSidebar = screenWidth > 991 ? 70 : 83
  const heightThatIsAddedByPaddings = 36
  const resultOfSums = windowHeight - 
    iframeHeight - 
    currentPosition - 
    additionalPaddingFromSidebar - 
    heightThatIsAddedByPaddings
  const topPointofIframe = iframeContainer.offset().top
  const isIframeInViewport = 
    (currentPosition + browserHeight + additionalPaddingFromSidebar) > 
    (windowHeight - topPointofIframe - additionalPaddingFromSidebar)
  const innerSidebarPart = $('.wy-side-scroll')

  console.log(
    // 'windowHeight=', windowHeight,
    // 'iframeHeight=', iframeHeight,
    // 'currentPosition=', currentPosition,
    // 'browserHeight=', browserHeight,
    // 'resultOfSums=', resultOfSums,
    // 'screenWidth=', screenWidth,
    // 'currentPositionMinusBrowserHeight=', ( currentPosition - browserHeight),
    // 'additionalPaddingFromSidebar=', additionalPaddingFromSidebar,
    // 'topPointofIframe=', topPointofIframe,
    // 'isIframeInViewport=', isIframeInViewport, 
    // currentPosition + browserHeight + additionalPaddingFromSidebar, 
    // windowHeight - topPointofIframe - additionalPaddingFromSidebar,
    {innerSidebarPart}
  )

  if(isIframeInViewport) {
    if(resultOfSums <= 50) {
      $(sidebar).hide()
      return 
    }
    $(sidebar).show()
    $(sidebar).height(resultOfSums)
    $(sidebar).css('margin-bottom', '20px')
    $(innerSidebarPart).css('height', `84% - ${resultOfSums}`)
    return

  } else {
    $(sidebar).removeAttr('style')
    $(innerSidebarPart).removeAttr('style')
  }
  
}

const divWithIframe = `<div class="iframe-container">
  <iframe src='https://vyos.io/iframes/footer' id='vyos-footer-iframe'></iframe>
</div>`
