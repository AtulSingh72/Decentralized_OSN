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

var _jsxFileName = "/home/atulsingh/Projects/Decentralized_OSN/componenets/DonateCard/DonateCard.js";


var donateCard = function donateCard(props) {
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
		src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FMVgBbtMBGQTi6og4mF%2Fgiphy.gif&f=1&nofb=1",
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
	}, "Choose your TIP amount"), _react2.default.createElement("div", {
		className: "input-group input-group-lg flex-nowrap",
		style: {
			width: "60%",
			margin: "30px auto 10px"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}, _react2.default.createElement("input", {
		className: "form-control",
		type: "number",
		placeholder: "Minimum TIP Amount is " + props.min_tip + " ETH",
		min: "10",
		onChange: props.isdonatebuttonon,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	}), _react2.default.createElement("span", { className: "input-group-text", id: "addon-wrapping", __source: {
			fileName: _jsxFileName,
			lineNumber: 31
		}
	}, "ETH")), _react2.default.createElement("button", {
		onClick: props.takeback,
		className: "btn btn-info",
		style: { margin: "20px 40px" },
		__source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}, _react2.default.createElement("i", { className: "fa fa-close", __source: {
			fileName: _jsxFileName,
			lineNumber: 40
		}
	}), " | Naah! Take me back to feeds"), _react2.default.createElement("button", {
		className: "btn btn-warning",
		style: { margin: "20px 40px" },
		id: "donate-ok",
		onClick: props.transact,
		disabled: props.disable_transact_okay,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 43
		}
	}, _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 50
		}
	}, props.donating == true && _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 52
		}
	}, _react2.default.createElement("img", {
		src: "https://c.tenor.com/k-A2Bukh1lUAAAAi/loading-loading-symbol.gif",
		style: {
			height: "28px",
			margin: "0 15px 0 0"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 53
		}
	}), "| Transaction is being performed"), props.donating == false && _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 64
		}
	}, _react2.default.createElement("i", { className: "fa fa-check", __source: {
			fileName: _jsxFileName,
			lineNumber: 65
		}
	}), "| Done! Send this TIP amount")))));
};

exports.default = donateCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVuZXRzL0RvbmF0ZUNhcmQvRG9uYXRlQ2FyZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkJhY2tkcm9wIiwiTW9kYWwiLCJkb25hdGVDYXJkIiwicHJvcHMiLCJ0YWtlYmFjayIsIndpZHRoIiwibWFyZ2luIiwibWluX3RpcCIsImlzZG9uYXRlYnV0dG9ub24iLCJ0cmFuc2FjdCIsImRpc2FibGVfdHJhbnNhY3Rfb2theSIsImRvbmF0aW5nIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVzs7Ozs7Ozs7O0FBRWxCLElBQU0sYUFBYSxTQUFiLEFBQWEsV0FBQSxBQUFDLE9BQVUsQUFDN0I7d0JBQ0MsQUFBQyxvQ0FBUyxVQUFVLE1BQXBCLEFBQTBCO2FBQTFCO2VBQUEsQUFDQztBQUREO0VBQUEsa0JBQ0MsQUFBQzs7YUFBRDtlQUFBLEFBQ0M7QUFERDtBQUFBO09BQ0MsQUFDSyxBQUNKOztVQUFPLEFBQ0MsQUFDUDtXQUpGLEFBRVEsQUFFRTtBQUZGLEFBQ047O2FBSEY7ZUFERCxBQUNDLEFBT0E7QUFQQTtBQUNDLHFCQU1ELGNBQUEsUUFBSSxPQUFPLEVBQUUsUUFBYixBQUFXLEFBQVU7YUFBckI7ZUFBQTtBQUFBO0lBUkQsQUFRQyxBQUNBLDJDQUFBLGNBQUE7YUFBQSxBQUNXLEFBQ1Y7O1VBQU8sQUFDQyxBQUNQO1dBSkYsQUFFUSxBQUVFO0FBRkYsQUFDTjs7YUFIRjtlQUFBLEFBT0M7QUFQRDtBQUNDO2FBTUEsQUFDVyxBQUNWO1FBRkQsQUFFTSxBQUNMOzBDQUFzQyxNQUF0QyxBQUE0QyxVQUg3QyxBQUlDO09BSkQsQUFJSyxBQUNKO1lBQVUsTUFMWCxBQUtpQjs7YUFMakI7ZUFQRCxBQU9DLEFBT0E7QUFQQTtBQUNDLHFCQU1ELGNBQUEsVUFBTSxXQUFOLEFBQWdCLG9CQUFtQixJQUFuQyxBQUFzQzthQUF0QztlQUFBO0FBQUE7SUF2QkYsQUFTQyxBQWNDLEFBSUQseUJBQUEsY0FBQTtXQUNVLE1BRFYsQUFDZ0IsQUFDZjthQUZELEFBRVcsQUFDVjtTQUFPLEVBQUUsUUFIVixBQUdRLEFBQVU7O2FBSGxCO2VBQUEsQUFLQztBQUxEO0FBQ0MseUNBSUcsV0FBSCxBQUFhO2FBQWI7ZUFMRCxBQUtDO0FBQUE7S0FoQ0YsQUEyQkMsQUFRQSxtREFBQSxjQUFBO2FBQUEsQUFDVyxBQUNWO1NBQU8sRUFBRSxRQUZWLEFBRVEsQUFBVSxBQUNqQjtNQUhELEFBR0ksQUFDSDtXQUFTLE1BSlYsQUFJZ0IsQUFDZjtZQUFVLE1BTFgsQUFLaUI7O2FBTGpCO2VBQUEsQUFPQztBQVBEO0FBQ0Msb0JBTUEsY0FBQTs7YUFBQTtlQUFBLEFBQ0U7QUFERjtBQUFBLFVBQ0UsQUFBTSxZQUFOLEFBQWtCLHdCQUNsQixjQUFBOzthQUFBO2VBQUEsQUFDQztBQUREO0FBQUEsRUFBQTtPQUNDLEFBQ0ssQUFDSjs7V0FBTyxBQUNFLEFBQ1I7V0FKRixBQUVRLEFBRUU7QUFGRixBQUNOOzthQUhGO2VBREQsQUFDQztBQUFBO0FBQ0MsS0FKSixBQUVFLEFBV0EsMkNBQUEsQUFBTSxZQUFOLEFBQWtCLHlCQUNsQixjQUFBOzthQUFBO2VBQUEsQUFDQztBQUREO0FBQUEsRUFBQSx1Q0FDSSxXQUFILEFBQWE7YUFBYjtlQURELEFBQ0M7QUFBQTtLQTNEUCxBQUNDLEFBQ0MsQUFtQ0MsQUFPQyxBQWNFLEFBVU47QUFyRUQsQUF1RUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiRG9uYXRlQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hdHVsc2luZ2gvUHJvamVjdHMvRGVjZW50cmFsaXplZF9PU04ifQ==