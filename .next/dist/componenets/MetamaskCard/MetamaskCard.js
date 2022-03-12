"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/atulsingh/Projects/Decentralized_OSN/componenets/MetamaskCard/MetamaskCard.js";


var metamaskCard = function metamaskCard(props) {
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
		src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa-%2FAAuE7mC1z-HXEKxL4YhAhc7WDHWA6Rnly1I592T5ag%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1&nofb=1",
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
	}, "OOPS!"), _react2.default.createElement("h5", { style: { margin: "10px" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 37
		}
	}, "Either the MetaMask extension is not installed or you aren't logged into metamask."), _react2.default.createElement("button", {
		onClick: props.takeback,
		className: "btn btn-info",
		style: { margin: "20px 40px" },
		__source: {
			fileName: _jsxFileName,
			lineNumber: 41
		}
	}, _react2.default.createElement("i", { className: "fa fa-arrow-left", __source: {
			fileName: _jsxFileName,
			lineNumber: 46
		}
	}), " | Naah! Take me back to feeds"), _react2.default.createElement("a", {
		href: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
		className: "btn btn-warning",
		target: "_blank",
		style: { margin: "20px 40px" },
		__source: {
			fileName: _jsxFileName,
			lineNumber: 49
		}
	}, _react2.default.createElement("i", { className: "fa fa-chrome", __source: {
			fileName: _jsxFileName,
			lineNumber: 55
		}
	}), " | Get MetaMask Extenstion")));
};

exports.default = metamaskCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVuZXRzL01ldGFtYXNrQ2FyZC9NZXRhbWFza0NhcmQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJtZXRhbWFza0NhcmQiLCJwcm9wcyIsInBvc2l0aW9uIiwiekluZGV4Iiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibGVmdCIsInRvcCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luIiwidGFrZWJhY2siXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sZUFBZSxTQUFmLEFBQWUsYUFBQSxBQUFDLE9BQVUsQUFDL0I7d0JBQ0MsY0FBQTs7YUFDUSxBQUNJLEFBQ1Y7V0FGTSxBQUVFLEFBQ1I7VUFITSxBQUdDLEFBQ1A7V0FKTSxBQUlFLEFBQ1I7Y0FMTSxBQUtLLEFBQ1g7WUFOTSxBQU1HLEFBQ1Q7ZUFQTSxBQU9NLEFBQ1o7bUJBUk0sQUFRVSxBQUNoQjtTQVRNLEFBU0EsQUFDTjtRQVZNLEFBVUQsQUFDTDtlQVpGLEFBQ1EsQUFXTTtBQVhOLEFBQ047O2FBRkY7ZUFBQSxBQWVDO0FBZkQ7QUFDQyxFQURELGtCQWVDLGNBQUE7O1VBQ1EsQUFDQyxBQUNQO1dBRk0sQUFFRSxBQUNSO2VBSE0sQUFHTSxBQUNaO2lCQUpNLEFBSVEsQUFDZDtZQU5GLEFBQ1EsQUFLRztBQUxILEFBQ047O2FBRkY7ZUFBQSxBQVNDO0FBVEQ7QUFDQztPQVFBLEFBQ0ssQUFDSjs7VUFBTyxBQUNDLEFBQ1A7V0FKRixBQUVRLEFBRUU7QUFGRixBQUNOOzthQUhGO2VBVEQsQUFTQyxBQU9BO0FBUEE7QUFDQyxxQkFNRCxjQUFBLFFBQUksT0FBTyxFQUFFLFFBQWIsQUFBVyxBQUFVO2FBQXJCO2VBQUE7QUFBQTtJQWhCRCxBQWdCQyxBQUNBLDBCQUFBLGNBQUEsUUFBSSxPQUFPLEVBQUUsUUFBYixBQUFXLEFBQVU7YUFBckI7ZUFBQTtBQUFBO0lBakJELEFBaUJDLEFBSUEsdUdBQUEsY0FBQTtXQUNVLE1BRFYsQUFDZ0IsQUFDZjthQUZELEFBRVcsQUFDVjtTQUFPLEVBQUUsUUFIVixBQUdRLEFBQVU7O2FBSGxCO2VBQUEsQUFLQztBQUxEO0FBQ0MseUNBSUcsV0FBSCxBQUFhO2FBQWI7ZUFMRCxBQUtDO0FBQUE7S0ExQkYsQUFxQkMsQUFRQSxtREFBQSxjQUFBO1FBQUEsQUFDTSxBQUNMO2FBRkQsQUFFVyxBQUNWO1VBSEQsQUFHUyxBQUNSO1NBQU8sRUFBRSxRQUpWLEFBSVEsQUFBVTs7YUFKbEI7ZUFBQSxBQU1DO0FBTkQ7QUFDQyx5Q0FLRyxXQUFILEFBQWE7YUFBYjtlQU5ELEFBTUM7QUFBQTtLQW5ESixBQUNDLEFBZUMsQUE2QkMsQUFXSDtBQXpERCxBQTJEQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJNZXRhbWFza0NhcmQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYXR1bHNpbmdoL1Byb2plY3RzL0RlY2VudHJhbGl6ZWRfT1NOIn0=