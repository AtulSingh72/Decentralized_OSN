"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Backdrop = require("../Overlay/Backdrop/Backdrop");

var _Backdrop2 = _interopRequireDefault(_Backdrop);

var _Modal = require("../Overlay/Modal/Modal");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/atulsingh/Projects/Decentralized_OSN/componenets/MetamaskCard/MetamaskCard.js";


var metamaskCard = function metamaskCard(props) {
	return _react2.default.createElement(_Backdrop2.default, { takeback: props.takeback, __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement(_Modal2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement("img", {
		src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa-%2FAAuE7mC1z-HXEKxL4YhAhc7WDHWA6Rnly1I592T5ag%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1&nofb=1",
		style: {
			width: "200px",
			margin: "0px 20px 10px"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}), _react2.default.createElement("h2", { style: { margin: "5px" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}, "OOPS!"), _react2.default.createElement("h5", { style: { margin: "10px" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}, "Either the MetaMask extension is not installed or you aren't logged into metamask."), _react2.default.createElement("button", {
		onClick: props.takeback,
		className: "btn btn-info",
		style: { margin: "20px 40px" },
		__source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}, _react2.default.createElement("i", { className: "fa fa-arrow-left", __source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}), " | Naah! Take me back to feeds"), _react2.default.createElement("a", {
		href: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
		className: "btn btn-warning",
		target: "_blank",
		style: { margin: "20px 40px" },
		__source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}, _react2.default.createElement("i", { className: "fa fa-chrome", __source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}), " | Get MetaMask Extenstion")));
};

exports.default = metamaskCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVuZXRzL01ldGFtYXNrQ2FyZC9NZXRhbWFza0NhcmQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJCYWNrZHJvcCIsIk1vZGFsIiwibWV0YW1hc2tDYXJkIiwicHJvcHMiLCJ0YWtlYmFjayIsIndpZHRoIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVzs7Ozs7Ozs7O0FBRWxCLElBQU0sZUFBZSxTQUFmLEFBQWUsYUFBQSxBQUFDLE9BQVUsQUFDL0I7d0JBQ0MsQUFBQyxvQ0FBUyxVQUFVLE1BQXBCLEFBQTBCO2FBQTFCO2VBQUEsQUFDQztBQUREO0VBQUEsa0JBQ0MsQUFBQzs7YUFBRDtlQUFBLEFBQ0M7QUFERDtBQUFBO09BQ0MsQUFDSyxBQUNKOztVQUFPLEFBQ0MsQUFDUDtXQUpGLEFBRVEsQUFFRTtBQUZGLEFBQ047O2FBSEY7ZUFERCxBQUNDLEFBT0E7QUFQQTtBQUNDLHFCQU1ELGNBQUEsUUFBSSxPQUFPLEVBQUUsUUFBYixBQUFXLEFBQVU7YUFBckI7ZUFBQTtBQUFBO0lBUkQsQUFRQyxBQUNBLDBCQUFBLGNBQUEsUUFBSSxPQUFPLEVBQUUsUUFBYixBQUFXLEFBQVU7YUFBckI7ZUFBQTtBQUFBO0lBVEQsQUFTQyxBQUlBLHVHQUFBLGNBQUE7V0FDVSxNQURWLEFBQ2dCLEFBQ2Y7YUFGRCxBQUVXLEFBQ1Y7U0FBTyxFQUFFLFFBSFYsQUFHUSxBQUFVOzthQUhsQjtlQUFBLEFBS0M7QUFMRDtBQUNDLHlDQUlHLFdBQUgsQUFBYTthQUFiO2VBTEQsQUFLQztBQUFBO0tBbEJGLEFBYUMsQUFRQSxtREFBQSxjQUFBO1FBQUEsQUFDTSxBQUNMO2FBRkQsQUFFVyxBQUNWO1VBSEQsQUFHUyxBQUNSO1NBQU8sRUFBRSxRQUpWLEFBSVEsQUFBVTs7YUFKbEI7ZUFBQSxBQU1DO0FBTkQ7QUFDQyx5Q0FLRyxXQUFILEFBQWE7YUFBYjtlQU5ELEFBTUM7QUFBQTtLQTdCSixBQUNDLEFBQ0MsQUFxQkMsQUFXSDtBQW5DRCxBQXFDQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJNZXRhbWFza0NhcmQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYXR1bHNpbmdoL1Byb2plY3RzL0RlY2VudHJhbGl6ZWRfT1NOIn0=