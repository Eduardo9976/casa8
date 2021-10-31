class HandlePopUp {
  constructor(open, popUp) {
    this.open = document.querySelector(open);
    this.popUp = document.querySelector(popUp);
    this.close = document.querySelector(popUp + ' .close');
    this.handleClick = this.handleClick.bind(this);
  }

  addEvents() {
    this.open.addEventListener('click', this.handleClick);
    this.close.addEventListener('click', this.handleClick);
  }

  handleClick(e) {
    e.preventDefault();
    this.popUp.classList.toggle('active');
  }

  init() {
    if (this.open && this.popUp && this.close) {
      this.addEvents();
    }
  }
}

//funcoes do DOM

(function () {
  const popUp = new HandlePopUp('.open', '.pop-up').init();

  // height flip

  window.onload = function () {
    const flipperContainer = document.querySelectorAll('.flip-container');
    const baseFlip = document.querySelector('.flipper img').clientHeight;

    flipperContainer.forEach((container) => {
      container.style.height = `${baseFlip}px`;
    });
  };

  window.onresize = function () {
    const flipperContainer = document.querySelectorAll('.flip-container');
    const baseFlip = document.querySelector('.flipper img').clientHeight;

    flipperContainer.forEach((container) => {
      container.style.height = `${baseFlip}px`;
    });
  };

  window.onscroll = function (e) {
    const menuFixo = document.querySelector('.menuFixo')
    const sections = document.querySelectorAll('section');
    const position = sections[1].getClientRects()[0].top
    if (position > 0) {
      menuFixo.classList.contains('active') && menuFixo.classList.remove('active');
    } else {
      !menuFixo.classList.contains('active') && menuFixo.classList.add('active');
    }
  }
})();
