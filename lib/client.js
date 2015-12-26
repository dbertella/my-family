'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _containers = require('containers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
	_reactRouter.Router,
	null,
	_react2.default.createElement(
		_reactRouter.Route,
		{ path: '/', component: _containers.App },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _containers.Home }),
		_react2.default.createElement(_reactRouter.Route, { path: '/about', component: _containers.About }),
		_react2.default.createElement(_reactRouter.Route, { path: '*', component: _containers.Home })
	)
), document.getElementById('root'));