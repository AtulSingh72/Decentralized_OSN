"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _CommentCard = require("../CommentCard/CommentCard");

var _CommentCard2 = _interopRequireDefault(_CommentCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/atulsingh/Projects/Decentralized_OSN/componenets/TweetCard/TweetCard.js";


var tweetCard = function tweetCard(props) {
	return _react2.default.createElement("div", {
		className: "card",
		style: {
			margin: "20px auto 20px",
			width: "650px",
			height: "fit-content"
		},
		key: props.index,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, _react2.default.createElement("h6", { className: "card-header", __source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, _react2.default.createElement("img", {
		src: "https://identicon-api.herokuapp.com/" + props.post.author + "/40?format=png",
		style: {
			margin: "5px 20px 5px 5px",
			borderRadius: "50%",
			background: "white"
		},
		key: props.index,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}), props.post.author), _react2.default.createElement("div", {
		className: "card-img-top img-fluid",
		style: {
			maxWidth: "90%",
			height: "auto",
			overflow: "hidden",
			display: "flex",
			margin: "0 auto",
			padding: "20px"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}, _react2.default.createElement("img", {
		src: "https://ipfs.io/ipfs/" + props.post.imageUrl,
		className: "card-img-top img-fluid",
		style: {
			objectFit: "contain",
			cursor: "zoom-in",
			borderRadius: "25px",
			height: "auto",
			width: "auto",
			margin: "0 auto",
			maxHeight: "500px"
		},
		onClick: props.imageZoom,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 38
		}
	})), _react2.default.createElement("div", { className: "card-body", style: { height: "auto" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 53
		}
	}, _react2.default.createElement("p", {
		className: "card-text",
		style: {
			fontSize: "22px",
			margin: "20px"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 54
		}
	}, props.post.content)), _react2.default.createElement("hr", {
		style: {
			width: "80%",
			margin: "0 auto 20px"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 64
		}
	}), _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 70
		}
	}, _react2.default.createElement("button", {
		className: "btn btn-outline-dark",
		style: {
			width: "fit-content",
			margin: "0 40px 20px",
			padding: "10px"
		},
		onClick: props.donate,
		"data-index": props.postLength - 1 - props.index,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 71
		}
	}, _react2.default.createElement("img", {
		src: "https://cdn-icons-png.flaticon.com/512/1777/1777889.png",
		style: {
			width: "28px",
			margin: "auto 5px"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 81
		}
	}), "Tip this post"), _react2.default.createElement("button", {
		className: "btn btn-outline-primary",
		style: {
			width: "fit-content",
			margin: "0 40px 20px",
			padding: "10px",
			float: "right"
		},
		"data-index": props.postLength - 1 - props.index,
		onClick: props.commentHide,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 90
		}
	}, _react2.default.createElement("i", {
		className: "fa fa-comments",
		style: { margin: "0 5px" },
		__source: {
			fileName: _jsxFileName,
			lineNumber: 101
		}
	}), " ", "Comments")), _react2.default.createElement("div", {
		id: "comments" + (props.postLength - props.index - 1),
		style: { margin: "10px", display: "none" },
		__source: {
			fileName: _jsxFileName,
			lineNumber: 108
		}
	}, _react2.default.createElement("form", {
		onSubmit: props.postComment,
		style: {
			margin: "20px auto",
			textAlign: "center",
			width: "550px",
			borderRadius: "5px",
			border: "1px solid gray"
		},
		"data-index": props.postLength - 1 - props.index,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 112
		}
	}, _react2.default.createElement("textarea", {
		placeholder: "Comment on this post...",
		style: {
			width: "100%",
			height: "100px",
			padding: "12px",
			border: "0px solid black"
		},
		onChange: props.readContent,
		value: props.content,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 123
		}
	}), _react2.default.createElement("br", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 134
		}
	}), _react2.default.createElement("input", {
		type: "file",
		onChange: props.captureFile,
		style: { margin: "10px" },
		id: "file_upload_2",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 135
		}
	}), _react2.default.createElement("button", {
		type: "submit",
		className: "btn btn-primary",
		style: { margin: "10px" },
		__source: {
			fileName: _jsxFileName,
			lineNumber: 141
		}
	}, props.uploading && _react2.default.createElement("div", { style: { margin: "5px" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 147
		}
	}, _react2.default.createElement("span", {
		style: {
			float: "left"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 148
		}
	}, _react2.default.createElement("img", {
		src: "https://c.tenor.com/k-A2Bukh1lUAAAAi/loading-loading-symbol.gif",
		style: {
			height: "28px",
			margin: "0 15px 0 0"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 153
		}
	})), _react2.default.createElement("span", {
		style: {
			float: "right"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 161
		}
	}, _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 166
		}
	}, "Uploading...", _react2.default.createElement("br", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 168
		}
	}), "It might take upto 10 mins!!"))), !props.uploading && "Submit")), props.post.comments.slice(0).reverse().map(function (comment, comment_index) {
		return _react2.default.createElement(_CommentCard2.default, {
			comment: comment,
			comment_index: comment_index,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 180
			}
		});
	})));
};

exports.default = tweetCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVuZXRzL1R3ZWV0Q2FyZC9Ud2VldENhcmQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21tZW50Q2FyZCIsInR3ZWV0Q2FyZCIsInByb3BzIiwibWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJpbmRleCIsInBvc3QiLCJhdXRob3IiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwibWF4V2lkdGgiLCJvdmVyZmxvdyIsImRpc3BsYXkiLCJwYWRkaW5nIiwiaW1hZ2VVcmwiLCJvYmplY3RGaXQiLCJjdXJzb3IiLCJtYXhIZWlnaHQiLCJpbWFnZVpvb20iLCJmb250U2l6ZSIsImNvbnRlbnQiLCJkb25hdGUiLCJwb3N0TGVuZ3RoIiwiZmxvYXQiLCJjb21tZW50SGlkZSIsInBvc3RDb21tZW50IiwidGV4dEFsaWduIiwiYm9yZGVyIiwicmVhZENvbnRlbnQiLCJjYXB0dXJlRmlsZSIsInVwbG9hZGluZyIsImNvbW1lbnRzIiwic2xpY2UiLCJyZXZlcnNlIiwibWFwIiwiY29tbWVudCIsImNvbW1lbnRfaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWlCOzs7Ozs7Ozs7QUFFeEIsSUFBTSxZQUFZLFNBQVosQUFBWSxVQUFBLEFBQUMsT0FBVSxBQUM1Qjt3QkFDQyxjQUFBO2FBQUEsQUFDVyxBQUNWOztXQUFPLEFBQ0UsQUFDUjtVQUZNLEFBRUMsQUFDUDtXQUxGLEFBRVEsQUFHRSxBQUVUO0FBTE8sQUFDTjtPQUlJLE1BUE4sQUFPWTs7YUFQWjtlQUFBLEFBU0M7QUFURDtBQUNDLEVBREQsa0JBU0MsY0FBQSxRQUFJLFdBQUosQUFBYzthQUFkO2VBQUEsQUFDQztBQUREOztnREFFOEMsTUFBQSxBQUFNLEtBQWxELEFBQXVELFNBRHhELEFBRUM7O1dBQU8sQUFDRSxBQUNSO2lCQUZNLEFBRVEsQUFDZDtlQUxGLEFBRVEsQUFHTSxBQUViO0FBTE8sQUFDTjtPQUlJLE1BUE4sQUFPWTs7YUFQWjtlQURE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