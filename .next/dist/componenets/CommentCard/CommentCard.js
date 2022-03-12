"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/atulsingh/Projects/Decentralized_OSN/componenets/CommentCard/CommentCard.js";


var commentCard = function commentCard(props) {
	return _react2.default.createElement("div", {
		className: "card",
		style: {
			margin: "20px auto 20px",
			width: "550px",
			height: "fit-content"
		},
		key: "comments_" + props.comment_index,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, _react2.default.createElement("p", {
		className: "card-header",
		style: {
			fontWeight: "500",
			fontSize: "13px"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, _react2.default.createElement("img", {
		src: "https://identicon-api.herokuapp.com/" + props.comment.author + "/20?format=png",
		style: {
			margin: "5px 20px 5px 5px",
			borderRadius: "50%",
			background: "white"
		},
		key: "comments_" + props.comment_index,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}), props.comment.author), _react2.default.createElement("div", {
		className: "card-img-top img-fluid",
		style: {
			maxWidth: "90%",
			height: "auto",
			overflow: "hidden",
			display: "flex",
			margin: "0 auto",
			padding: "10px"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	}, _react2.default.createElement("img", {
		src: "https://ipfs.io/ipfs/" + props.comment.imageUrl,
		className: "card-img-top img-fluid",
		style: {
			objectFit: "contain",
			borderRadius: "25px",
			height: "auto",
			width: "auto",
			margin: "0 auto",
			maxHeight: "250px"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 43
		}
	})), _react2.default.createElement("div", { className: "card-body", style: { height: "auto" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 56
		}
	}, _react2.default.createElement("p", {
		className: "card-text",
		style: {
			fontSize: "16px",
			margin: "0px"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 57
		}
	}, props.comment.content)));
};

exports.default = commentCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVuZXRzL0NvbW1lbnRDYXJkL0NvbW1lbnRDYXJkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29tbWVudENhcmQiLCJwcm9wcyIsIm1hcmdpbiIsIndpZHRoIiwiaGVpZ2h0IiwiY29tbWVudF9pbmRleCIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImNvbW1lbnQiLCJhdXRob3IiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwibWF4V2lkdGgiLCJvdmVyZmxvdyIsImRpc3BsYXkiLCJwYWRkaW5nIiwiaW1hZ2VVcmwiLCJvYmplY3RGaXQiLCJtYXhIZWlnaHQiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLGNBQWMsU0FBZCxBQUFjLFlBQUEsQUFBQyxPQUFVLEFBQzlCO3dCQUNDLGNBQUE7YUFBQSxBQUNXLEFBQ1Y7O1dBQU8sQUFDRSxBQUNSO1VBRk0sQUFFQyxBQUNQO1dBTEYsQUFFUSxBQUdFLEFBRVQ7QUFMTyxBQUNOO09BSUksY0FBYyxNQVBwQixBQU8wQjs7YUFQMUI7ZUFBQSxBQVNDO0FBVEQ7QUFDQyxFQURELGtCQVNDLGNBQUE7YUFBQSxBQUNXLEFBQ1Y7O2VBQU8sQUFDTSxBQUNaO2FBSkYsQUFFUSxBQUVJO0FBRkosQUFDTjs7YUFIRjtlQUFBLEFBT0M7QUFQRDtBQUNDO2dEQU82QyxNQUFBLEFBQU0sUUFBbEQsQUFBMEQsU0FEM0QsQUFFQzs7V0FBTyxBQUNFLEFBQ1I7aUJBRk0sQUFFUSxBQUNkO2VBTEYsQUFFUSxBQUdNLEFBRWI7QUFMTyxBQUNOO09BSUksY0FBYyxNQVBwQixBQU8wQjs7YUFQMUI7ZUFQRCxBQU9DLEFBU0M7QUFURDtBQUNDLFdBUUEsQUFBTSxRQXpCVCxBQVNDLEFBZ0JnQixBQUVoQix5QkFBQSxjQUFBO2FBQUEsQUFDVyxBQUNWOzthQUFPLEFBQ0ksQUFDVjtXQUZNLEFBRUUsQUFDUjthQUhNLEFBR0ksQUFDVjtZQUpNLEFBSUcsQUFDVDtXQUxNLEFBS0UsQUFDUjtZQVJGLEFBRVEsQUFNRztBQU5ILEFBQ047O2FBSEY7ZUFBQSxBQVdDO0FBWEQ7QUFDQztpQ0FXOEIsTUFBQSxBQUFNLFFBRHBDLEFBQzRDLEFBQzNDO2FBRkQsQUFFVyxBQUNWOztjQUFPLEFBQ0ssQUFDWDtpQkFGTSxBQUVRLEFBQ2Q7V0FITSxBQUdFLEFBQ1I7VUFKTSxBQUlDLEFBQ1A7V0FMTSxBQUtFLEFBQ1I7Y0FURixBQUdRLEFBTUs7QUFOTCxBQUNOOzthQUpGO2VBdENGLEFBMkJDLEFBV0MsQUFhRDtBQWJDO0FBQ0Msc0JBWUYsY0FBQSxTQUFLLFdBQUwsQUFBZSxhQUFZLE9BQU8sRUFBRSxRQUFwQyxBQUFrQyxBQUFVO2FBQTVDO2VBQUEsQUFDQztBQUREO29CQUNDLGNBQUE7YUFBQSxBQUNXLEFBQ1Y7O2FBQU8sQUFDSSxBQUNWO1dBSkYsQUFFUSxBQUVFO0FBRkYsQUFDTjs7YUFIRjtlQUFBLEFBT0U7QUFQRjtBQUNDLFVBTUMsQUFBTSxRQTVEWCxBQUNDLEFBbURDLEFBQ0MsQUFPZ0IsQUFLbkI7QUFsRUQsQUFvRUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ29tbWVudENhcmQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYXR1bHNpbmdoL1Byb2plY3RzL0RlY2VudHJhbGl6ZWRfT1NOIn0=