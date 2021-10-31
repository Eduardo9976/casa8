export default class HandleFlip {
  constructor(container, imgBase) {
    this.container = document.querySelectorAll(container);
    this.baseHeight = document.querySelector(imgBase).clientHeight;
  }

  addEvents() {
    window.onload = this.defineHeight();
    window.onresize = this.defineHeight();
  }

  defineHeight() {
    flipperContainer.forEach((container) => {
      container.style.height = `${baseFlip}px`;
    });
  }

  init() {
    if (this.container && this.imgBase) {
      this.addEvents();
    }
  }
}
