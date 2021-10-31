"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

exports.default = HandlePopUp;
//# sourceMappingURL=HandlePopUp.js.map