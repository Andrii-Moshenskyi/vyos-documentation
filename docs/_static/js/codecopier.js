// import hamburgerIcon from '../images/hamburger-icon.svg'

const hamburgerIcon = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 5.3335H24M0 12.0002H24M0 18.6668H24" stroke="#FFAE12" stroke-width="3"/>
  </svg>
`

const svg = `
  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4.95605" y="4.5" width="7" height="7" rx="1.5" stroke="#FD8F01"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.456055 2C0.456055 0.895431 1.35149 0 2.45605 0H6.45605C7.56062 0 8.45605 0.895431 8.45605 2V3H7.45605V2C7.45605 1.44772 7.00834 1 6.45605 1H2.45605C1.90377 1 1.45605 1.44772 1.45605 2V6C1.45605 6.55228 1.90377 7 2.45605 7H3.45605V8H2.45605C1.35149 8 0.456055 7.10457 0.456055 6V2Z" fill="#FD8F01"/>
  </svg>
`

function formDiv(id) {
  return `
  <div class='copyDiv' data-identifier='${id}'>
    ${svg}
  </div>
`
}

$(document).ready(async function () {
  const codeSnippets = $(
    '.rst-content div[class^=highlight] div[class^=highlight], .rst-content pre.literal-block div[class^=highlight]'
  )

  codeSnippets.each((index, el) => {
    el.insertAdjacentHTML('beforeend', formDiv(index))
  })

  const copyButton = $('.copyDiv')

  copyButton.click(async ({
    currentTarget
  }) => {
    // we obtain text and copy it
    const id = currentTarget.dataset.identifier

    try {
      await navigator.clipboard.writeText(currentTarget.offsetParent.innerText)
    } catch (error) {
      console.log('Copiing text failed, please try again', {
        error
      })
    }

    // we edit the copyDiv connected to copied text
    const divWithNeededId = $(`div[data-identifier='${id}']`)
    divWithNeededId.addClass('copiedNotifier')
    divWithNeededId.html('<p>copied</p>')

    setTimeout(() => {
      divWithNeededId.html(svg)
      divWithNeededId.removeClass('copiedNotifier')

    }, 2000)
  })

});


// sidebar part
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

function changeBackgroundOnBreadcrumbs() {
  const breadcrumbs = $('ul.wy-breadcrumbs li:not(:last-of-type)')
  breadcrumbs.each((el, index) => {
    changeBreadcrumbs(el, index)
  })
}

function changeBreadcrumbs(element, index) {
  
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
  changeBackgroundOnBreadcrumbs()

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

function formOpenSidebarButton() {
  return `
    <div class='openLeftSidebarMenuButton'>
      ${hamburgerIcon}
    </div>
  `
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
  // const updatedLeftSidebarScrollDiv = $('div.wy-side-scroll')
  const updatedLeftSidebarScrollDiv = $('nav.wy-nav-side')

  const alreadyCreatedButtonCheck = $('div.closeLeftSidebarMenuButton')
  if(alreadyCreatedButtonCheck[0]) return 

  updatedLeftSidebarScrollDiv[0].insertAdjacentHTML('beforeend', formCloseLeftSidebarButton())
  updatedLeftSidebarScrollDiv.addClass('additionalStylesForShift')

  const createdCloseSidebarButton = $('.closeButtonDivLine')

  createdCloseSidebarButton.on('click', function () {
    const sidebar = $('nav.wy-nav-side.shift')

    sidebar.removeClass('shift')
  })
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