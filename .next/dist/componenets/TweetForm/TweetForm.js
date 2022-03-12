"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/atulsingh/Projects/Decentralized_OSN/componenets/TweetForm/TweetForm.js";


var tweetForm = function tweetForm(props) {
	return _react2.default.createElement("form", {
		onSubmit: props.submit,
		style: {
			margin: "20px auto",
			textAlign: "center",
			width: "650px",
			borderRadius: "5px",
			border: "1px solid gray"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, _react2.default.createElement("textarea", {
		placeholder: "Let's tweet something...",
		style: {
			width: "100%",
			height: "150px",
			padding: "12px",
			border: "0px solid black"
		},
		onChange: props.readContent,
		value: props.content,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}), _react2.default.createElement("br", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}), _react2.default.createElement("input", {
		type: "file",
		onChange: props.captureFile,
		style: { margin: "10px" },
		id: "file_upload",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}), _react2.default.createElement("button", {
		type: "submit",
		className: "btn btn-primary",
		style: { margin: "10px" },
		__source: {
			fileName: _jsxFileName,
			lineNumber: 33
		}
	}, props.uploading && _react2.default.createElement("div", { style: { margin: "5px" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 39
		}
	}, _react2.default.createElement("span", { style: { float: "left" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 40
		}
	}, _react2.default.createElement("img", {
		src: "https://c.tenor.com/k-A2Bukh1lUAAAAi/loading-loading-symbol.gif",
		style: {
			height: "28px",
			margin: "0 15px 0 0"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 41
		}
	})), _react2.default.createElement("span", { style: { float: "right" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 49
		}
	}, _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 50
		}
	}, "Uploading...", _react2.default.createElement("br", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 51
		}
	}), "It might take upto 10 mins!!"))), !props.uploading && "Submit"));
};

exports.default = tweetForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVuZXRzL1R3ZWV0Rm9ybS9Ud2VldEZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJ0d2VldEZvcm0iLCJwcm9wcyIsInN1Ym1pdCIsIm1hcmdpbiIsInRleHRBbGlnbiIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiaGVpZ2h0IiwicGFkZGluZyIsInJlYWRDb250ZW50IiwiY29udGVudCIsImNhcHR1cmVGaWxlIiwidXBsb2FkaW5nIiwiZmxvYXQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sWUFBWSxTQUFaLEFBQVksVUFBQSxBQUFDLE9BQVUsQUFDNUI7d0JBQ0MsY0FBQTtZQUNXLE1BRFgsQUFDaUIsQUFDaEI7O1dBQU8sQUFDRSxBQUNSO2NBRk0sQUFFSyxBQUNYO1VBSE0sQUFHQyxBQUNQO2lCQUpNLEFBSVEsQUFDZDtXQVBGLEFBRVEsQUFLRTtBQUxGLEFBQ047O2FBSEY7ZUFBQSxBQVVDO0FBVkQ7QUFDQyxFQUREO2VBVUMsQUFDYSxBQUNaOztVQUFPLEFBQ0MsQUFDUDtXQUZNLEFBRUUsQUFDUjtZQUhNLEFBR0csQUFDVDtXQU5GLEFBRVEsQUFJRSxBQUVUO0FBTk8sQUFDTjtZQUtTLE1BUlgsQUFRaUIsQUFDaEI7U0FBTyxNQVRSLEFBU2M7O2FBVGQ7ZUFWRCxBQVVDLEFBV0E7QUFYQTtBQUNDOzthQVVEO2VBckJELEFBcUJDLEFBQ0E7QUFEQTtBQUFBO1FBQ0EsQUFDTSxBQUNMO1lBQVUsTUFGWCxBQUVpQixBQUNoQjtTQUFPLEVBQUUsUUFIVixBQUdRLEFBQVUsQUFDakI7TUFKRCxBQUlJOzthQUpKO2VBdEJELEFBc0JDLEFBTUE7QUFOQTtBQUNDLHFCQUtELGNBQUE7UUFBQSxBQUNNLEFBQ0w7YUFGRCxBQUVXLEFBQ1Y7U0FBTyxFQUFFLFFBSFYsQUFHUSxBQUFVOzthQUhsQjtlQUFBLEFBS0U7QUFMRjtBQUNDLFVBSUMsQUFBTSw2QkFDTixjQUFBLFNBQUssT0FBTyxFQUFFLFFBQWQsQUFBWSxBQUFVO2FBQXRCO2VBQUEsQUFDQztBQUREO0VBQUEsa0JBQ0MsY0FBQSxVQUFNLE9BQU8sRUFBRSxPQUFmLEFBQWEsQUFBUzthQUF0QjtlQUFBLEFBQ0M7QUFERDs7T0FDQyxBQUNLLEFBQ0o7O1dBQU8sQUFDRSxBQUNSO1dBSkYsQUFFUSxBQUVFO0FBRkYsQUFDTjs7YUFIRjtlQUZGLEFBQ0MsQUFDQyxBQVFEO0FBUkM7QUFDQyxzQkFPRixjQUFBLFVBQU0sT0FBTyxFQUFFLE9BQWYsQUFBYSxBQUFTO2FBQXRCO2VBQUEsQUFDQztBQUREO29CQUNDLGNBQUE7O2FBQUE7ZUFBQTtBQUFBO0FBQUEsSUFDYTs7YUFBQTtlQURiLEFBQ2E7QUFBQTtBQUFBLEtBbEJqQixBQU1FLEFBVUMsQUFDQyxBQU9GLG9DQUFDLE1BQUQsQUFBTyxhQXJEWCxBQUNDLEFBNEJDLEFBd0JzQixBQUl4QjtBQTFERCxBQTREQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJUd2VldEZvcm0uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYXR1bHNpbmdoL1Byb2plY3RzL0RlY2VudHJhbGl6ZWRfT1NOIn0=