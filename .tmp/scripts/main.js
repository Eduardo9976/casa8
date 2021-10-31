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
}(); //funcoes do DOM


(function () {
  var popUp = new HandlePopUp('.open', '.pop-up').init(); // height flip

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
    var menuFixo = document.querySelector('.menuFixo');
    var sections = document.querySelectorAll('section');
    var position = sections[1].getClientRects()[0].top;

    if (position > 0) {
      menuFixo.classList.contains('active') && menuFixo.classList.remove('active');
    } else {
      !menuFixo.classList.contains('active') && menuFixo.classList.add('active');
    }
  };
})();
//# sourceMappingURL=main.js.map