export default class HandlePopUp {
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
