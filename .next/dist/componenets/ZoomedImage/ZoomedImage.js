"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/atulsingh/Projects/Decentralized_OSN/componenets/ZoomedImage/ZoomedImage.js";


var zoomedImage = function zoomedImage(props) {
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
	}, _react2.default.createElement("img", {
		src: props.zoomed,
		onClick: props.imageZoom,
		style: {
			maxWidth: "90%",
			maxHeight: "90%",
			cursor: "zoom-out"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}));
};

exports.default = zoomedImage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVuZXRzL1pvb21lZEltYWdlL1pvb21lZEltYWdlLmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem9vbWVkSW1hZ2UiLCJwcm9wcyIsInBvc2l0aW9uIiwiekluZGV4Iiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibGVmdCIsInRvcCIsImJhY2tncm91bmQiLCJ6b29tZWQiLCJpbWFnZVpvb20iLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQUMsT0FBVSxBQUM5Qjt3QkFDQyxjQUFBOzthQUNRLEFBQ0ksQUFDVjtXQUZNLEFBRUUsQUFDUjtVQUhNLEFBR0MsQUFDUDtXQUpNLEFBSUUsQUFDUjtjQUxNLEFBS0ssQUFDWDtZQU5NLEFBTUcsQUFDVDtlQVBNLEFBT00sQUFDWjttQkFSTSxBQVFVLEFBQ2hCO1NBVE0sQUFTQSxBQUNOO1FBVk0sQUFVRCxBQUNMO2VBWkYsQUFDUSxBQVdNO0FBWE4sQUFDTjs7YUFGRjtlQUFBLEFBZUM7QUFmRDtBQUNDLEVBREQ7T0FnQk8sTUFETixBQUNZLEFBQ1g7V0FBUyxNQUZWLEFBRWdCLEFBQ2Y7O2FBQU8sQUFDSSxBQUNWO2NBRk0sQUFFSyxBQUNYO1dBTkYsQUFHUSxBQUdFO0FBSEYsQUFDTjs7YUFKRjtlQWhCRixBQUNDLEFBZUMsQUFXRjtBQVhFO0FBQ0M7QUFsQkosQUE4QkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiWm9vbWVkSW1hZ2UuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYXR1bHNpbmdoL1Byb2plY3RzL0RlY2VudHJhbGl6ZWRfT1NOIn0=