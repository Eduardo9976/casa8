"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HandlePopUp = /*#__PURE__*/function () {
  function HandlePopUp(open, popUp) {
    _classCallCheck(this, HandlePopUp);

    this.open = document.querySelector(open);
    this.popUp = document.querySelector(popUp);
    this.close = document.querySelector(popUp + ' .close');
    this.handleClick = this.handleClick.bind(this);
  }

  _createClass(HandlePopUp, [{
    key: "addEvents",
    value: function addEvents() {
      this.open.addEventListener('click', this.handleClick);
      this.close.addEventListener('click', this.handleClick);
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      e.preventDefault();
      this.popUp.classList.toggle('active');
    }
  }, {
    key: "init",
    value: function init() {
      if (this.open && this.popUp && this.close) {
        this.addEvents();
      }
    }
  }]);

  return HandlePopUp;
}();

var VirtualTour = /*#__PURE__*/function () {
  function VirtualTour() {
    _classCallCheck(this, VirtualTour);

    this.buttonsOpen = document.querySelectorAll('.tourVirtual');
    this.tourContainer = document.querySelector('.tourContainer');
    this.buttonClose = document.querySelector('.tourContainer .close');
    this.heightClose = this.buttonClose.getClientRects()[0].height;
    this.windowHeight = window.innerHeight;
    this.setHeightViewer = document.querySelector('#viewer');
  }

  _createClass(VirtualTour, [{
    key: "handleEvents",
    value: function handleEvents() {
      var _this = this;

      this.buttonsOpen.forEach(function (button) {
        return button.addEventListener('click', function () {
          return _this.tourContainer.classList.add('active');
        });
      });
      this.buttonClose.addEventListener('click', function () {
        return _this.tourContainer.classList.remove('active');
      });
    }
  }, {
    key: "init",
    value: function init() {
      var baseHeight = this.windowHeight - this.heightClose - 40;
      this.setHeightViewer.style.height = "".concat(baseHeight, "px");
      this.handleEvents();
    }
  }]);

  return VirtualTour;
}(); //funcoes do DOM


;

(function () {
  var popUp = new HandlePopUp('.open', '.pop-up').init();
  var virtualTour = new VirtualTour().init();
  var viewer = new PhotoSphereViewer.Viewer({
    container: document.querySelector('#viewer'),
    panorama: '../images/tourVirtual/pano.jpg',
    defaultLat: 0.9,
    // touchmoveTwoFingers: true,
    mousewheelCtrlKey: true,
    navbar: ['fullscreen', 'zoom', 'autorotate', 'move', 'zoomOut', 'zoomIn']
  }); // height flip

  window.onload = function () {
    var flipperContainer = document.querySelectorAll('.flip-container');
    var baseFlip = document.querySelector('.flipper img').clientHeight;
    flipperContainer.forEach(function (container) {
      container.style.height = "".concat(baseFlip, "px");
    });
  };

  window.onresize = function () {
    var flipperContainer = document.querySelectorAll('.flip-container');
    var baseFlip = document.querySelector('.flipper img').clientHeight;
    flipperContainer.forEach(function (container) {
      container.style.height = "".concat(baseFlip, "px");
    });
  };

  window.onscroll = function (e) {
    e.preventDefault();
    var menuFixo = document.querySelector('.menuFixo');
    var sections = document.querySelectorAll('section');
    var position = sections[1].getClientRects()[0].top;

    if (position > 0) {
      menuFixo.classList.contains('active') && menuFixo.classList.remove('active');
    } else {
      !menuFixo.classList.contains('active') && menuFixo.classList.add('active');
    } // animacao facilidades de compra


    var facilidadesOpacity = document.querySelector('.facilidadesDeCompra');
    var elementsFacilidades = document.querySelectorAll('.facilidades p');
    var facilidadesPosition = facilidadesOpacity.getClientRects()[0].top;
    var mid = window.innerHeight * 0.5;
    var total = elementsFacilidades.length - 1;

    if (facilidadesPosition < mid && !elementsFacilidades[total].classList.contains('show')) {
      elementsFacilidades.forEach(function (el, index) {
        el.style['animation-delay'] = "".concat(index / 2, "s");
        !el.classList.contains('show') && el.classList.add('show');
      });
    }

    return;
  };
})();
//# sourceMappingURL=main.js.map