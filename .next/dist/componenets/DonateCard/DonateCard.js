"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/atulsingh/Projects/Decentralized_OSN/componenets/DonateCard/DonateCard.js";


var donateCard = function donateCard(props) {
	return _react2.default.createElement("div", {
		style: {
			position: "fixed",
			zIndex: "1",
			width: "100%",
			height: "100%",
			textAlign: "center",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			left: "0",
			top: "0",
			background: "rgba(0, 0, 0, 0.8)"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, _react2.default.createElement("div", {
		style: {
			width: "50%",
			height: "50%",
			background: "white",
			borderRadius: "70px",
			padding: "25px"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}, _react2.default.createElement("img", {
		src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FMVgBbtMBGQTi6og4mF%2Fgiphy.gif&f=1&nofb=1",
		style: {
			width: "200px",
			margin: "0px 20px 10px"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}), _react2.default.createElement("h2", { style: { margin: "5px" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 36
		}
	}, "Choose your TIP amount"), _react2.default.createElement("div", {
		className: "input-group input-group-lg flex-nowrap",
		style: {
			width: "60%",
			margin: "30px auto 10px"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 37
		}
	}, _react2.default.createElement("input", {
		className: "form-control",
		type: "number",
		placeholder: "Minimum TIP Amount is " + props.min_tip + " ETH",
		min: "10",
		onChange: props.isdonatebuttonon,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 44
		}
	}), _react2.default.createElement("span", { className: "input-group-text", id: "addon-wrapping", __source: {
			fileName: _jsxFileName,
			lineNumber: 51
		}
	}, "ETH")), _react2.default.createElement("button", {
		onClick: props.takeback,
		className: "btn btn-info",
		style: { margin: "20px 40px" },
		__source: {
			fileName: _jsxFileName,
			lineNumber: 55
		}
	}, _react2.default.createElement("i", { className: "fa fa-close", __source: {
			fileName: _jsxFileName,
			lineNumber: 60
		}
	}), " | Naah! Take me back to feeds"), _react2.default.createElement("button", {
		className: "btn btn-warning",
		style: { margin: "20px 40px" },
		id: "donate-ok",
		onClick: props.transact,
		disabled: props.disable_transact_okay,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 63
		}
	}, _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 70
		}
	}, props.donating == true && _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 72
		}
	}, _react2.default.createElement("img", {
		src: "https://c.tenor.com/k-A2Bukh1lUAAAAi/loading-loading-symbol.gif",
		style: {
			height: "28px",
			margin: "0 15px 0 0"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 73
		}
	}), "| Transaction is being performed"), props.donating == false && _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 84
		}
	}, _react2.default.createElement("i", { className: "fa fa-check", __source: {
			fileName: _jsxFileName,
			lineNumber: 85
		}
	}), "| Done! Send this TIP amount")))));
};

exports.default = donateCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVuZXRzL0RvbmF0ZUNhcmQvRG9uYXRlQ2FyZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImRvbmF0ZUNhcmQiLCJwcm9wcyIsInBvc2l0aW9uIiwiekluZGV4Iiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibGVmdCIsInRvcCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luIiwibWluX3RpcCIsImlzZG9uYXRlYnV0dG9ub24iLCJ0YWtlYmFjayIsInRyYW5zYWN0IiwiZGlzYWJsZV90cmFuc2FjdF9va2F5IiwiZG9uYXRpbmciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sYUFBYSxTQUFiLEFBQWEsV0FBQSxBQUFDLE9BQVUsQUFDN0I7d0JBQ0MsY0FBQTs7YUFDUSxBQUNJLEFBQ1Y7V0FGTSxBQUVFLEFBQ1I7VUFITSxBQUdDLEFBQ1A7V0FKTSxBQUlFLEFBQ1I7Y0FMTSxBQUtLLEFBQ1g7WUFOTSxBQU1HLEFBQ1Q7ZUFQTSxBQU9NLEFBQ1o7bUJBUk0sQUFRVSxBQUNoQjtTQVRNLEFBU0EsQUFDTjtRQVZNLEFBVUQsQUFDTDtlQVpGLEFBQ1EsQUFXTTtBQVhOLEFBQ047O2FBRkY7ZUFBQSxBQWVDO0FBZkQ7QUFDQyxFQURELGtCQWVDLGNBQUE7O1VBQ1EsQUFDQyxBQUNQO1dBRk0sQUFFRSxBQUNSO2VBSE0sQUFHTSxBQUNaO2lCQUpNLEFBSVEsQUFDZDtZQU5GLEFBQ1EsQUFLRztBQUxILEFBQ047O2FBRkY7ZUFBQSxBQVNDO0FBVEQ7QUFDQztPQVFBLEFBQ0ssQUFDSjs7VUFBTyxBQUNDLEFBQ1A7V0FKRixBQUVRLEFBRUU7QUFGRixBQUNOOzthQUhGO2VBVEQsQUFTQyxBQU9BO0FBUEE7QUFDQyxxQkFNRCxjQUFBLFFBQUksT0FBTyxFQUFFLFFBQWIsQUFBVyxBQUFVO2FBQXJCO2VBQUE7QUFBQTtJQWhCRCxBQWdCQyxBQUNBLDJDQUFBLGNBQUE7YUFBQSxBQUNXLEFBQ1Y7O1VBQU8sQUFDQyxBQUNQO1dBSkYsQUFFUSxBQUVFO0FBRkYsQUFDTjs7YUFIRjtlQUFBLEFBT0M7QUFQRDtBQUNDO2FBTUEsQUFDVyxBQUNWO1FBRkQsQUFFTSxBQUNMOzBDQUFzQyxNQUF0QyxBQUE0QyxVQUg3QyxBQUlDO09BSkQsQUFJSyxBQUNKO1lBQVUsTUFMWCxBQUtpQjs7YUFMakI7ZUFQRCxBQU9DLEFBT0E7QUFQQTtBQUNDLHFCQU1ELGNBQUEsVUFBTSxXQUFOLEFBQWdCLG9CQUFtQixJQUFuQyxBQUFzQzthQUF0QztlQUFBO0FBQUE7SUEvQkYsQUFpQkMsQUFjQyxBQUlELHlCQUFBLGNBQUE7V0FDVSxNQURWLEFBQ2dCLEFBQ2Y7YUFGRCxBQUVXLEFBQ1Y7U0FBTyxFQUFFLFFBSFYsQUFHUSxBQUFVOzthQUhsQjtlQUFBLEFBS0M7QUFMRDtBQUNDLHlDQUlHLFdBQUgsQUFBYTthQUFiO2VBTEQsQUFLQztBQUFBO0tBeENGLEFBbUNDLEFBUUEsbURBQUEsY0FBQTthQUFBLEFBQ1csQUFDVjtTQUFPLEVBQUUsUUFGVixBQUVRLEFBQVUsQUFDakI7TUFIRCxBQUdJLEFBQ0g7V0FBUyxNQUpWLEFBSWdCLEFBQ2Y7WUFBVSxNQUxYLEFBS2lCOzthQUxqQjtlQUFBLEFBT0M7QUFQRDtBQUNDLG9CQU1BLGNBQUE7O2FBQUE7ZUFBQSxBQUNFO0FBREY7QUFBQSxVQUNFLEFBQU0sWUFBTixBQUFrQix3QkFDbEIsY0FBQTs7YUFBQTtlQUFBLEFBQ0M7QUFERDtBQUFBLEVBQUE7T0FDQyxBQUNLLEFBQ0o7O1dBQU8sQUFDRSxBQUNSO1dBSkYsQUFFUSxBQUVFO0FBRkYsQUFDTjs7YUFIRjtlQURELEFBQ0M7QUFBQTtBQUNDLEtBSkosQUFFRSxBQVdBLDJDQUFBLEFBQU0sWUFBTixBQUFrQix5QkFDbEIsY0FBQTs7YUFBQTtlQUFBLEFBQ0M7QUFERDtBQUFBLEVBQUEsdUNBQ0ksV0FBSCxBQUFhO2FBQWI7ZUFERCxBQUNDO0FBQUE7S0FqRlAsQUFDQyxBQWVDLEFBMkNDLEFBT0MsQUFjRSxBQVVOO0FBM0ZELEFBNkZBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkRvbmF0ZUNhcmQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYXR1bHNpbmdoL1Byb2plY3RzL0RlY2VudHJhbGl6ZWRfT1NOIn0=