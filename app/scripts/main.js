class HandlePopUp {
  constructor (open, popUp) {
    this.open = document.querySelector(open)
    this.popUp = document.querySelector(popUp)
    this.close = document.querySelector(popUp + ' .close')
    this.handleClick = this.handleClick.bind(this)
  }

  addEvents () {
    this.open.addEventListener('click', this.handleClick)
    this.close.addEventListener('click', this.handleClick)
  }

  handleClick (e) {
    e.preventDefault()
    this.popUp.classList.toggle('active')
  }

  init () {
    if (this.open && this.popUp && this.close) {
      this.addEvents()
    }
  }
}

class VirtualTour {
  constructor () {
    this.buttonsOpen = document.querySelectorAll('.tourVirtual')
    this.tourContainer = document.querySelector('.tourContainer')
    this.buttonClose = document.querySelector('.tourContainer .close')
    this.heightClose = this.buttonClose.getClientRects()[0].height
    this.windowHeight = window.innerHeight
    this.setHeightViewer = document.querySelector('#viewer')
  }

  handleEvents () {
    this.buttonsOpen.forEach(button =>
      button.addEventListener('click', () =>
        this.tourContainer.classList.add('active')
      )
    )

    this.buttonClose.addEventListener('click', () =>
      this.tourContainer.classList.remove('active')
    )
  }

  init () {
    const baseHeight = (this.windowHeight - this.heightClose) - 40
    this.setHeightViewer.style.height = `${ baseHeight }px`
    this.handleEvents()
  }
}

//funcoes do DOM

;(function () {
  const popUp = new HandlePopUp('.open', '.pop-up').init()
  const virtualTour = new VirtualTour().init()
  const viewer = new PhotoSphereViewer.Viewer({
    container: document.querySelector('#viewer'),
    panorama: '../images/tourVirtual/pano.jpg',
    defaultLat: 0.9,
    // touchmoveTwoFingers: true,
    mousewheelCtrlKey: true,
    navbar: ['fullscreen', 'zoom', 'autorotate', 'move', 'zoomOut', 'zoomIn']
  })

  
  // height flip
  window.onload = function () {
    const flipperContainer = document.querySelectorAll('.flip-container')
    const baseFlip = document.querySelector('.flipper img').clientHeight

    flipperContainer.forEach(container => {
      container.style.height = `${baseFlip}px`
    })
  }

  window.onresize = function () {
    const flipperContainer = document.querySelectorAll('.flip-container')
    const baseFlip = document.querySelector('.flipper img').clientHeight

    flipperContainer.forEach(container => {
      container.style.height = `${baseFlip}px`
    })
  }

  window.onscroll = function (e) {
    e.preventDefault()
    const menuFixo = document.querySelector('.menuFixo')
    const sections = document.querySelectorAll('section')
    const position = sections[1].getClientRects()[0].top
    if (position > 0) {
      menuFixo.classList.contains('active') &&
        menuFixo.classList.remove('active')
    } else {
      !menuFixo.classList.contains('active') && menuFixo.classList.add('active')
    }

    // animacao facilidades de compra
    const facilidadesOpacity = document.querySelector('.facilidadesDeCompra')
    const elementsFacilidades = document.querySelectorAll('.facilidades p')
    const facilidadesPosition = facilidadesOpacity.getClientRects()[0].top
    const mid = window.innerHeight * 0.5
    const total = elementsFacilidades.length - 1

    if (
      facilidadesPosition < mid &&
      !elementsFacilidades[total].classList.contains('show')
    ) {
      elementsFacilidades.forEach((el, index) => {
        el.style['animation-delay'] = `${index / 2}s`
        !el.classList.contains('show') && el.classList.add('show')
      })
    }
    return
  }
})()
