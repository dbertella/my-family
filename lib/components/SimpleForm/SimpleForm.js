'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleForm = (function (_Component) {
  _inherits(SimpleForm, _Component);

  function SimpleForm(props) {
    _classCallCheck(this, SimpleForm);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SimpleForm).call(this, props));

    _this.state = {
      inputs: _this.props.inputs || []
    };
    return _this;
  }

  _createClass(SimpleForm, [{
    key: 'addOwner',
    value: function addOwner(e) {
      e.preventDefault();
      var input = this.refs.newInput.value.trim();
      var inputs = this.state.inputs;
      if (input) {
        inputs.push(input);
        this.setState({
          inputs: inputs
        });
      }
      this.refs.newInput.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      var inputs = this.state.inputs.map(function (el, i) {
        return _react2.default.createElement(
          'li',
          { key: i },
          el
        );
      });
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'FOLDER’S inputs'
        ),
        _react2.default.createElement(
          'ul',
          null,
          inputs
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.addOwner.bind(this) },
          _react2.default.createElement('input', { type: 'text', ref: 'newInput' }),
          _react2.default.createElement(
            'button',
            null,
            'ADD OWNER'
          )
        )
      );
    }
  }]);

  return SimpleForm;
})(_react.Component);

exports.default = SimpleForm;