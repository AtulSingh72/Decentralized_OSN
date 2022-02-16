"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _factory = require("../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _Post = require("../ethereum/build/Post.json");

var _Post2 = _interopRequireDefault(_Post);

var _ipfs = require("../ethereum/ipfs");

var _ipfs2 = _interopRequireDefault(_ipfs);

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/atulsingh/Projects/Decentralized_OSN/pages/index.js?entry";


var accounts = [];

var PostIndex = function (_Component) {
	(0, _inherits3.default)(PostIndex, _Component);

	function PostIndex(props) {
		(0, _classCallCheck3.default)(this, PostIndex);

		var _this = (0, _possibleConstructorReturn3.default)(this, (PostIndex.__proto__ || (0, _getPrototypeOf2.default)(PostIndex)).call(this, props));

		_this.state = {
			posts: _this.props.posts,
			buffer: null,
			content: "",
			zoomed: null,
			loading: true
		};
		_this.captureFile = _this.captureFile.bind(_this);
		_this.onSubmit = _this.onSubmit.bind(_this);
		_this.imageZoom = _this.imageZoom.bind(_this);
		_this.readContent = _this.readContent.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(PostIndex, [{
		key: "componentDidMount",
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _web2.default.eth.getAccounts();

							case 2:
								accounts = _context.sent;

								this.setState({ loading: false });

							case 4:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function componentDidMount() {
				return _ref.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: "captureFile",
		value: function captureFile(event) {
			var _this2 = this;

			event.preventDefault();
			var file = event.target.files[0];
			var reader = new window.FileReader();
			reader.readAsArrayBuffer(file);
			reader.onloadend = function () {
				_this2.setState({ buffer: Buffer(reader.result) });
				console.log("buffer", _this2.state.buffer);
			};
		}
	}, {
		key: "onSubmit",
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(event) {
				var _this3 = this;

				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								event.preventDefault();
								_context4.next = 3;
								return _web2.default.eth.getAccounts();

							case 3:
								accounts = _context4.sent;

								console.log(accounts);
								_ipfs2.default.files.add(this.state.buffer, function () {
									var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(error, result) {
										var posts, new_posts, file_uploader;
										return _regenerator2.default.wrap(function _callee3$(_context3) {
											while (1) {
												switch (_context3.prev = _context3.next) {
													case 0:
														if (!error) {
															_context3.next = 3;
															break;
														}

														console.error(error);
														return _context3.abrupt("return");

													case 3:
														_context3.next = 5;
														return _factory2.default.methods.createPost(result[0].hash, _this3.state.content).send({ from: accounts[0] });

													case 5:
														_context3.next = 7;
														return _factory2.default.methods.getPosts().call();

													case 7:
														posts = _context3.sent;
														_context3.next = 10;
														return function () {
															var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(posts) {
																var new_posts, i, Post, currentPost;
																return _regenerator2.default.wrap(function _callee2$(_context2) {
																	while (1) {
																		switch (_context2.prev = _context2.next) {
																			case 0:
																				new_posts = [];
																				i = 0;

																			case 2:
																				if (!(i < posts.length)) {
																					_context2.next = 18;
																					break;
																				}

																				Post = new _web2.default.eth.Contract(JSON.parse(_Post2.default.interface), posts[i]);
																				_context2.next = 6;
																				return Post.methods.image_hash().call();

																			case 6:
																				_context2.t0 = _context2.sent;
																				_context2.next = 9;
																				return Post.methods.author().call();

																			case 9:
																				_context2.t1 = _context2.sent;
																				_context2.next = 12;
																				return Post.methods.content().call();

																			case 12:
																				_context2.t2 = _context2.sent;
																				currentPost = {
																					imageUrl: _context2.t0,
																					author: _context2.t1,
																					content: _context2.t2
																				};

																				new_posts.push(currentPost);

																			case 15:
																				i++;
																				_context2.next = 2;
																				break;

																			case 18:
																				return _context2.abrupt("return", new_posts);

																			case 19:
																			case "end":
																				return _context2.stop();
																		}
																	}
																}, _callee2, this);
															}));

															return function (_x4) {
																return _ref4.apply(this, arguments);
															};
														}()(posts);

													case 10:
														new_posts = _context3.sent;

														_this3.setState({ posts: new_posts, content: "" });
														file_uploader = document.getElementById("file_upload");

														file_uploader.value = "";

													case 14:
													case "end":
														return _context3.stop();
												}
											}
										}, _callee3, _this3);
									}));

									return function (_x2, _x3) {
										return _ref3.apply(this, arguments);
									};
								}());

							case 6:
							case "end":
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function onSubmit(_x) {
				return _ref2.apply(this, arguments);
			}

			return onSubmit;
		}()
	}, {
		key: "imageZoom",
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(event) {
				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								event.preventDefault();
								console.log(event.target.getBoundingClientRect());
								if (this.state.zoomed !== null) {
									this.setState({ zoomed: null });
								} else {
									this.setState({ zoomed: event.target.getAttribute("src") });
								}

							case 3:
							case "end":
								return _context5.stop();
						}
					}
				}, _callee5, this);
			}));

			function imageZoom(_x5) {
				return _ref5.apply(this, arguments);
			}

			return imageZoom;
		}()
	}, {
		key: "readContent",
		value: function readContent(event) {
			event.preventDefault();
			this.setState({ content: event.target.value });
			console.log(this.state.content);
		}
	}, {
		key: "render",
		value: function render() {
			var _this4 = this;

			return _react2.default.createElement("div", { className: "container", __source: {
					fileName: _jsxFileName,
					lineNumber: 116
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 117
				}
			}, _react2.default.createElement("title", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 118
				}
			}, "DOSN"), _react2.default.createElement("link", {
				href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
				rel: "stylesheet",
				integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
				crossorigin: "anonymous",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 119
				}
			}), _react2.default.createElement("script", {
				src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
				integrity: "sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p",
				crossorigin: "anonymous",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 125
				}
			}), _react2.default.createElement("script", {
				src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",
				integrity: "sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF",
				crossorigin: "anonymous",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 130
				}
			}), _react2.default.createElement("script", { src: "https://cdn.jsdelivr.net/npm/jdenticon@2.2.0", __source: {
					fileName: _jsxFileName,
					lineNumber: 135
				}
			})), this.state.loading && _react2.default.createElement("div", {
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
					lineNumber: 138
				}
			}, _react2.default.createElement("div", {
				style: {
					width: "40%",
					height: "40%",
					background: "white",
					borderRadius: "70px",
					padding: "25px"
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 153
				}
			}, _react2.default.createElement("img", {
				src: "https://c.tenor.com/UTxZPwKlNNIAAAAi/ethereum-ethereum-crypto.gif",
				style: {
					width: "200px",
					margin: "0px 20px 40px"
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 162
				}
			}), _react2.default.createElement("h2", { style: { margin: "20px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 169
				}
			}, "Welcome to your Decentralized World!!"), _react2.default.createElement("h5", { style: { margin: "10px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 172
				}
			}, "Hold tight while we setup the contents for you"))), _react2.default.createElement("form", {
				onSubmit: this.onSubmit,
				style: {
					margin: "20px auto",
					textAlign: "center",
					width: "650px",
					borderRadius: "5px",
					border: "1px solid gray"
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 178
				}
			}, _react2.default.createElement("textarea", {
				placeholder: "Let's tweet something...",
				style: {
					width: "100%",
					height: "150px",
					padding: "12px",
					border: "0px solid black"
				},
				onChange: this.readContent,
				value: this.state.content,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 188
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 199
				}
			}), _react2.default.createElement("input", {
				type: "file",
				onChange: this.captureFile,
				style: { margin: "10px" },
				id: "file_upload",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 200
				}
			}), _react2.default.createElement("button", {
				type: "submit",
				className: "btn btn-primary",
				style: { margin: "10px" },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 206
				}
			}, "Submit")), this.state.zoomed !== null && _react2.default.createElement("div", {
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
					lineNumber: 215
				}
			}, _react2.default.createElement("img", {
				src: this.state.zoomed,
				onClick: this.imageZoom,
				style: {
					maxWidth: "90%",
					maxHeight: "90%",
					cursor: "zoom-out"
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 230
				}
			})), _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 241
				}
			}, this.state.posts.slice(0).reverse().map(function (post, index) {
				return _react2.default.createElement("div", {
					className: "card",
					style: {
						margin: "20px auto 20px",
						width: "650px",
						height: "fit-content"
					},
					key: index,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 246
					}
				}, _react2.default.createElement("h6", { className: "card-header", __source: {
						fileName: _jsxFileName,
						lineNumber: 255
					}
				}, _react2.default.createElement("img", {
					src: "https://identicon-api.herokuapp.com/" + post.author + "/40?format=png",
					style: {
						margin: "5px 20px 5px 5px",
						borderRadius: "50%",
						background: "white"
					},
					key: index,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 256
					}
				}), post.author), _react2.default.createElement("div", {
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
						lineNumber: 267
					}
				}, _react2.default.createElement("img", {
					src: "https://ipfs.io/ipfs/" + post.imageUrl,
					className: "card-img-top img-fluid",
					style: {
						objectFit: "contain",
						cursor: "zoom-in",
						borderRadius: "25px",
						height: "auto",
						width: "auto",
						margin: "0 auto"
					},
					onClick: _this4.imageZoom,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 278
					}
				})), _react2.default.createElement("div", {
					className: "card-body",
					style: { height: "auto" },
					__source: {
						fileName: _jsxFileName,
						lineNumber: 292
					}
				}, _react2.default.createElement("p", {
					className: "card-text",
					style: {
						fontSize: "22px",
						margin: "20px"
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 296
					}
				}, post.content)));
			})));
		}
	}], [{
		key: "getInitialProps",
		value: function () {
			var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
				var posts, new_posts;
				return _regenerator2.default.wrap(function _callee7$(_context7) {
					while (1) {
						switch (_context7.prev = _context7.next) {
							case 0:
								_context7.next = 2;
								return _factory2.default.methods.getPosts().call();

							case 2:
								posts = _context7.sent;
								_context7.next = 5;
								return function () {
									var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(posts) {
										var new_posts, i, Post, currentPost;
										return _regenerator2.default.wrap(function _callee6$(_context6) {
											while (1) {
												switch (_context6.prev = _context6.next) {
													case 0:
														new_posts = [];
														i = 0;

													case 2:
														if (!(i < posts.length)) {
															_context6.next = 18;
															break;
														}

														Post = new _web2.default.eth.Contract(JSON.parse(_Post2.default.interface), posts[i]);
														_context6.next = 6;
														return Post.methods.image_hash().call();

													case 6:
														_context6.t0 = _context6.sent;
														_context6.next = 9;
														return Post.methods.author().call();

													case 9:
														_context6.t1 = _context6.sent;
														_context6.next = 12;
														return Post.methods.content().call();

													case 12:
														_context6.t2 = _context6.sent;
														currentPost = {
															imageUrl: _context6.t0,
															author: _context6.t1,
															content: _context6.t2
														};

														new_posts.push(currentPost);

													case 15:
														i++;
														_context6.next = 2;
														break;

													case 18:
														return _context6.abrupt("return", new_posts);

													case 19:
													case "end":
														return _context6.stop();
												}
											}
										}, _callee6, this);
									}));

									return function (_x6) {
										return _ref7.apply(this, arguments);
									};
								}()(posts);

							case 5:
								new_posts = _context7.sent;
								return _context7.abrupt("return", { posts: new_posts });

							case 7:
							case "end":
								return _context7.stop();
						}
					}
				}, _callee7, this);
			}));

			function getInitialProps() {
				return _ref6.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return PostIndex;
}(_react.Component);

exports.default = PostIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUG9zdEZhY3RvcnkiLCJQb3N0Q29udHJhY3QiLCJpcGZzIiwid2ViMyIsIkhlYWQiLCJhY2NvdW50cyIsIlBvc3RJbmRleCIsInByb3BzIiwic3RhdGUiLCJwb3N0cyIsImJ1ZmZlciIsImNvbnRlbnQiLCJ6b29tZWQiLCJsb2FkaW5nIiwiY2FwdHVyZUZpbGUiLCJiaW5kIiwib25TdWJtaXQiLCJpbWFnZVpvb20iLCJyZWFkQ29udGVudCIsImV0aCIsImdldEFjY291bnRzIiwic2V0U3RhdGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwid2luZG93IiwiRmlsZVJlYWRlciIsInJlYWRBc0FycmF5QnVmZmVyIiwib25sb2FkZW5kIiwiQnVmZmVyIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImFkZCIsImVycm9yIiwibWV0aG9kcyIsImNyZWF0ZVBvc3QiLCJoYXNoIiwic2VuZCIsImZyb20iLCJnZXRQb3N0cyIsImNhbGwiLCJuZXdfcG9zdHMiLCJpIiwibGVuZ3RoIiwiUG9zdCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIiwiaW1hZ2VfaGFzaCIsImF1dGhvciIsImN1cnJlbnRQb3N0IiwiaW1hZ2VVcmwiLCJwdXNoIiwiZmlsZV91cGxvYWRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEF0dHJpYnV0ZSIsInBvc2l0aW9uIiwiekluZGV4Iiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibGVmdCIsInRvcCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm9yZGVyIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJjdXJzb3IiLCJzbGljZSIsInJldmVyc2UiLCJtYXAiLCJwb3N0IiwiaW5kZXgiLCJvdmVyZmxvdyIsIm9iamVjdEZpdCIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU87Ozs7Ozs7OztBQUVQLElBQUksV0FBSixBQUFlOztJLEFBRVQ7b0NBQ0w7O29CQUFBLEFBQVksT0FBTztzQ0FBQTs7MElBQUEsQUFDWixBQUNOOztRQUFBLEFBQUs7VUFDRyxNQUFBLEFBQUssTUFEQSxBQUNNLEFBQ2xCO1dBRlksQUFFSixBQUNSO1lBSFksQUFHSCxBQUNUO1dBSlksQUFJSixBQUNSO1lBTEQsQUFBYSxBQUtILEFBRVY7QUFQYSxBQUNaO1FBTUQsQUFBSyxjQUFjLE1BQUEsQUFBSyxZQUFMLEFBQWlCLEtBQXBDLEFBQ0E7UUFBQSxBQUFLLFdBQVcsTUFBQSxBQUFLLFNBQUwsQUFBYyxLQUE5QixBQUNBO1FBQUEsQUFBSyxZQUFZLE1BQUEsQUFBSyxVQUFMLEFBQWUsS0FBaEMsQUFDQTtRQUFBLEFBQUssY0FBYyxNQUFBLEFBQUssWUFBTCxBQUFpQixLQVpsQixBQVlsQjtTQUNBOzs7Ozs7Ozs7Ozs7ZUFHaUIsY0FBQSxBQUFLLEksQUFBTCxBQUFTOztZQUExQjtBLDRCQUNBOzthQUFBLEFBQUssU0FBUyxFQUFFLFNBQWhCLEFBQWMsQUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQXdCZCxBLE9BQU87Z0JBQ2xCOztTQUFBLEFBQU0sQUFDTjtPQUFNLE9BQU8sTUFBQSxBQUFNLE9BQU4sQUFBYSxNQUExQixBQUFhLEFBQW1CLEFBQ2hDO09BQU0sU0FBUyxJQUFJLE9BQW5CLEFBQWUsQUFBVyxBQUMxQjtVQUFBLEFBQU8sa0JBQVAsQUFBeUIsQUFD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SixBQUEwQjs7a0JBUnRCO3VDQUFBOytCQUFBO3FCQVNOLEtBQUEsQUFBSyxRQUFMLEFBQWEsU0FUUCxBQVNOLEFBQXNCOztrQkFUaEI7dUNBQUE7K0JBQUE7cUJBVUwsS0FBQSxBQUFLLFFBQUwsQUFBYSxVQVZSLEFBVUwsQUFBdUI7O2tCQVZsQjt1Q0FPZjtBQVBlO0FBQUEsbUNBU3BCO0FBVG9CLGlDQVVwQjtBQVZvQixrQ0FBQSxBQVlyQjtBQUpDOzt3QkFJRCxBQUFVLEtBWlcsQUFZckIsQUFBZTs7a0JBVmtCO0FBRlo7K0JBQUE7QUFBQTs7a0JBQUE7Z0RBQUEsQUFjZjs7a0JBZGU7a0JBQUE7K0JBQUE7O0FBQUE7dUJBQUE7QUFBRDs7K0JBQUE7bUNBQUE7QUFBQTtTQUFBLEdBZW5CLEEsQUFmbUI7O1lBQWxCO0E7MENBZ0JHLEVBQUUsT0FBRixBLEFBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF2Q00sQSxBQWdUeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYXR1bHNpbmdoL1Byb2plY3RzL0RlY2VudHJhbGl6ZWRfT1NOIn0=