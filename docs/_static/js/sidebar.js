$(document).ready(function () {
  removeOverlay()
  documentLoaded()

  $(window).on("resize", function () {
    const screenWidth = window.innerWidth

    if (screenWidth <= 768) return userIsInTabletScreenWidth(screenWidth)
    return removeOverlayAndButtons()
  })

})

function removeButtons() {
  const alreadyCreatedOpenButtonCheck = $('.openLeftSidebarMenuButton')
  const alreadyCreatedCloseButtonCheck = $('.closeButtonDivLine')

  if(alreadyCreatedOpenButtonCheck[0]) alreadyCreatedOpenButtonCheck[0].remove()
  if(alreadyCreatedCloseButtonCheck[0]) alreadyCreatedCloseButtonCheck[0].remove()
}

function documentLoaded() {
  const screenWidth = window.innerWidth

  if (screenWidth <= 768) return userIsInTabletScreenWidth(screenWidth)
  return
}

function userIsInTabletScreenWidth(screenWidth) {
  const alreadyCreatedButtonCheck = $('.openLeftSidebarMenuButton')
  if (alreadyCreatedButtonCheck[0]) return

  createOpenSidebarButton()
  createCloseSidebarButton()
}

function createOverlay() {
  const contentContainer = $('.wy-nav-content')
  contentContainer.addClass('overlay')

  $('.wy-nav-content.overlay').on('click', onOverlayClickHandler)
}

function onOverlayClickHandler() {
  removeOverlay()
}

function removeOverlay() {
  const contentContainer = $('.wy-nav-content')
  contentContainer.removeClass('overlay')

  const leftSidebarOpened = $('nav.wy-nav-side.shift')
  leftSidebarOpened.removeClass('shift')
}

function createOpenSidebarButton() {
  const divToInsert = $('div[role=navigation][aria-label="Page navigation"]')
  divToInsert[0].insertAdjacentHTML('afterbegin', formOpenSidebarButton())
 
  const newlyCreatedButton = $('.openLeftSidebarMenuButton')

  newlyCreatedButton.on('click', onOpenLeftSidebarMenuButtonClickHandler)
}

function onOpenLeftSidebarMenuButtonClickHandler(e) {
  e.stopPropagation()
  const leftSidebar = $('nav.wy-nav-side')
  const leftSidebarOpened = $('nav.wy-nav-side.shift')
  if(leftSidebarOpened[0]) {
    leftSidebarOpened.removeClass('shift')
    removeOverlay()
  }

  createOverlay()
  return leftSidebar.addClass('shift')
}

function createCloseSidebarButton() {
  const updatedLeftSidebarScrollDiv = $('nav.wy-nav-side')

  const alreadyCreatedButtonCheck = $('div.closeLeftSidebarMenuButton')
  if(alreadyCreatedButtonCheck[0]) return 

  updatedLeftSidebarScrollDiv[0].insertAdjacentHTML('beforeend', formCloseLeftSidebarButton())
  updatedLeftSidebarScrollDiv.addClass('additionalStylesForShift')

  const createdCloseSidebarButton = $('.closeButtonDivLine')

  createdCloseSidebarButton.on('click', function () {
    removeOverlay()
  })
}

function formOpenSidebarButton() {
  return `
    <div class='openLeftSidebarMenuButton'>
      ${hamburgerIcon}
    </div>
  `
}

function formCloseLeftSidebarButton() {
  return `
    <div class='closeButtonDivLine'>
      <div class='closeLeftSidebarMenuButton'>
        Close
      </div>
    </div>
  `
}

function removeOverlayAndButtons() {
  removeOverlay()
  removeButtons()
}
