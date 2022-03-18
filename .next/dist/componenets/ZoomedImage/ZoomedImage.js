"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Backdrop = require("../Overlay/Backdrop/Backdrop");

var _Backdrop2 = _interopRequireDefault(_Backdrop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/atulsingh/Projects/Decentralized_OSN/componenets/ZoomedImage/ZoomedImage.js";


var zoomedImage = function zoomedImage(props) {
	return _react2.default.createElement(_Backdrop2.default, { takeback: props.imageZoom, __source: {
			fileName: _jsxFileName,
			lineNumber: 6
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
			lineNumber: 7
		}
	}));
};

exports.default = zoomedImage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVuZXRzL1pvb21lZEltYWdlL1pvb21lZEltYWdlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQmFja2Ryb3AiLCJ6b29tZWRJbWFnZSIsInByb3BzIiwiaW1hZ2Vab29tIiwiem9vbWVkIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJjdXJzb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWM7Ozs7Ozs7OztBQUVyQixJQUFNLGNBQWMsU0FBZCxBQUFjLFlBQUEsQUFBQyxPQUFVLEFBQzlCO3dCQUNDLEFBQUMsb0NBQVMsVUFBVSxNQUFwQixBQUEwQjthQUExQjtlQUFBLEFBQ0M7QUFERDtFQUFBO09BRU8sTUFETixBQUNZLEFBQ1g7V0FBUyxNQUZWLEFBRWdCLEFBQ2Y7O2FBQU8sQUFDSSxBQUNWO2NBRk0sQUFFSyxBQUNYO1dBTkYsQUFHUSxBQUdFO0FBSEYsQUFDTjs7YUFKRjtlQUZGLEFBQ0MsQUFDQyxBQVdGO0FBWEU7QUFDQztBQUpKLEFBZ0JBOztrQkFBQSxBQUFlIiwiZmlsZSI6Ilpvb21lZEltYWdlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2F0dWxzaW5naC9Qcm9qZWN0cy9EZWNlbnRyYWxpemVkX09TTiJ9