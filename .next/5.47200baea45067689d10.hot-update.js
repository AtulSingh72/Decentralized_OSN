webpackHotUpdate(5,{

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer, __resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(839);

var _factory2 = _interopRequireDefault(_factory);

var _Post = __webpack_require__(1131);

var _Post2 = _interopRequireDefault(_Post);

var _ipfs = __webpack_require__(1132);

var _ipfs2 = _interopRequireDefault(_ipfs);

var _web = __webpack_require__(618);

var _web2 = _interopRequireDefault(_web);

var _head = __webpack_require__(191);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/atulsingh/Projects/Decentralized_OSN/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/atulsingh/Projects/Decentralized_OSN/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(395).Buffer, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40NzIwMGJhZWE0NTA2NzY4OWQxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MTY3MGNmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9zdEZhY3RvcnkgZnJvbSBcIi4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcbmltcG9ydCBQb3N0Q29udHJhY3QgZnJvbSBcIi4uL2V0aGVyZXVtL2J1aWxkL1Bvc3QuanNvblwiO1xuaW1wb3J0IGlwZnMgZnJvbSBcIi4uL2V0aGVyZXVtL2lwZnNcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmxldCBhY2NvdW50cyA9IFtdO1xuXG5jbGFzcyBQb3N0SW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cG9zdHM6IHRoaXMucHJvcHMucG9zdHMsXG5cdFx0XHRidWZmZXI6IG51bGwsXG5cdFx0XHRjb250ZW50OiBcIlwiLFxuXHRcdFx0em9vbWVkOiBudWxsLFxuXHRcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHR9O1xuXHRcdHRoaXMuY2FwdHVyZUZpbGUgPSB0aGlzLmNhcHR1cmVGaWxlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKTtcblx0XHR0aGlzLmltYWdlWm9vbSA9IHRoaXMuaW1hZ2Vab29tLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZWFkQ29udGVudCA9IHRoaXMucmVhZENvbnRlbnQuYmluZCh0aGlzKTtcblx0fVxuXG5cdGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuXHRcdGNvbnN0IHBvc3RzID0gYXdhaXQgUG9zdEZhY3RvcnkubWV0aG9kcy5nZXRQb3N0cygpLmNhbGwoKTtcblx0XHRsZXQgbmV3X3Bvc3RzID0gYXdhaXQgKGFzeW5jIGZ1bmN0aW9uIChwb3N0cykge1xuXHRcdFx0bGV0IG5ld19wb3N0cyA9IFtdO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb3N0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBQb3N0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxuXHRcdFx0XHRcdEpTT04ucGFyc2UoUG9zdENvbnRyYWN0LmludGVyZmFjZSksXG5cdFx0XHRcdFx0cG9zdHNbaV1cblx0XHRcdFx0KTtcblx0XHRcdFx0Y29uc3QgY3VycmVudFBvc3QgPSB7XG5cdFx0XHRcdFx0aW1hZ2VVcmw6IGF3YWl0IFBvc3QubWV0aG9kcy5pbWFnZV9oYXNoKCkuY2FsbCgpLFxuXHRcdFx0XHRcdGF1dGhvcjogYXdhaXQgUG9zdC5tZXRob2RzLmF1dGhvcigpLmNhbGwoKSxcblx0XHRcdFx0XHRjb250ZW50OiBhd2FpdCBQb3N0Lm1ldGhvZHMuY29udGVudCgpLmNhbGwoKSxcblx0XHRcdFx0fTtcblx0XHRcdFx0bmV3X3Bvc3RzLnB1c2goY3VycmVudFBvc3QpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5ld19wb3N0cztcblx0XHR9KShwb3N0cyk7XG5cdFx0cmV0dXJuIHsgcG9zdHM6IG5ld19wb3N0cyB9O1xuXHR9XG5cblx0Y2FwdHVyZUZpbGUoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG5cdFx0Y29uc3QgcmVhZGVyID0gbmV3IHdpbmRvdy5GaWxlUmVhZGVyKCk7XG5cdFx0cmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuXHRcdHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgYnVmZmVyOiBCdWZmZXIocmVhZGVyLnJlc3VsdCkgfSk7XG5cdFx0XHRjb25zb2xlLmxvZyhcImJ1ZmZlclwiLCB0aGlzLnN0YXRlLmJ1ZmZlcik7XG5cdFx0fTtcblx0fVxuXG5cdGFzeW5jIG9uU3VibWl0KGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cdFx0Y29uc29sZS5sb2coYWNjb3VudHMpO1xuXHRcdGlwZnMuZmlsZXMuYWRkKHRoaXMuc3RhdGUuYnVmZmVyLCBhc3luYyAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBQb3N0RmFjdG9yeS5tZXRob2RzXG5cdFx0XHRcdC5jcmVhdGVQb3N0KHJlc3VsdFswXS5oYXNoLCB0aGlzLnN0YXRlLmNvbnRlbnQpXG5cdFx0XHRcdC5zZW5kKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XG5cdFx0XHRjb25zdCBwb3N0cyA9IGF3YWl0IFBvc3RGYWN0b3J5Lm1ldGhvZHMuZ2V0UG9zdHMoKS5jYWxsKCk7XG5cdFx0XHRsZXQgbmV3X3Bvc3RzID0gYXdhaXQgKGFzeW5jIGZ1bmN0aW9uIChwb3N0cykge1xuXHRcdFx0XHRsZXQgbmV3X3Bvc3RzID0gW107XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcG9zdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRjb25zdCBQb3N0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxuXHRcdFx0XHRcdFx0SlNPTi5wYXJzZShQb3N0Q29udHJhY3QuaW50ZXJmYWNlKSxcblx0XHRcdFx0XHRcdHBvc3RzW2ldXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRjb25zdCBjdXJyZW50UG9zdCA9IHtcblx0XHRcdFx0XHRcdGltYWdlVXJsOiBhd2FpdCBQb3N0Lm1ldGhvZHMuaW1hZ2VfaGFzaCgpLmNhbGwoKSxcblx0XHRcdFx0XHRcdGF1dGhvcjogYXdhaXQgUG9zdC5tZXRob2RzLmF1dGhvcigpLmNhbGwoKSxcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IGF3YWl0IFBvc3QubWV0aG9kcy5jb250ZW50KCkuY2FsbCgpLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0bmV3X3Bvc3RzLnB1c2goY3VycmVudFBvc3QpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBuZXdfcG9zdHM7XG5cdFx0XHR9KShwb3N0cyk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgcG9zdHM6IG5ld19wb3N0cywgY29udGVudDogXCJcIiB9KTtcblx0XHRcdGNvbnN0IGZpbGVfdXBsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGVfdXBsb2FkXCIpO1xuXHRcdFx0ZmlsZV91cGxvYWRlci52YWx1ZSA9IFwiXCI7XG5cdFx0fSk7XG5cdH1cblxuXHRhc3luYyBpbWFnZVpvb20oZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG5cdFx0aWYgKHRoaXMuc3RhdGUuem9vbWVkICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgem9vbWVkOiBudWxsIH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgem9vbWVkOiBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwic3JjXCIpIH0pO1xuXHRcdH1cblx0fVxuXG5cdHJlYWRDb250ZW50KGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgY29udGVudDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY29udGVudCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5ET1NOPC90aXRsZT5cblx0XHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4yL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcblx0XHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxuXHRcdFx0XHRcdFx0aW50ZWdyaXR5PVwic2hhMzg0LUVWU1RRTjMvYXpwckcxQW5tM1FEZ3BKTEltOU5hbzBZejF6dGNRVHdGc3BkM3lENjVWb2hocHV1Q09tTEFTakNcIlxuXHRcdFx0XHRcdFx0Y3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuXHRcdFx0XHRcdD48L2xpbms+XG5cdFx0XHRcdFx0PHNjcmlwdFxuXHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9AcG9wcGVyanMvY29yZUAyLjkuMi9kaXN0L3VtZC9wb3BwZXIubWluLmpzXCJcblx0XHRcdFx0XHRcdGludGVncml0eT1cInNoYTM4NC1JUXNvTFhsNVBJTEZob3NWTnVicTVMQzdRYjlEWGdEQTlpK3RROFpqM2l3V0F3UHRnRlR4Yko4TlQ0R04xUjhwXCJcblx0XHRcdFx0XHRcdGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcblx0XHRcdFx0XHQ+PC9zY3JpcHQ+XG5cdFx0XHRcdFx0PHNjcmlwdFxuXHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjIvZGlzdC9qcy9ib290c3RyYXAubWluLmpzXCJcblx0XHRcdFx0XHRcdGludGVncml0eT1cInNoYTM4NC1jVktJUGhHV2lDMkFsNHUrTFdneGZLVFJJY2Z1MEpUeFIrRVFEei9iZ2xkb0V5bDRIMHpVRjBRS2JySjBFY1FGXCJcblx0XHRcdFx0XHRcdGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcblx0XHRcdFx0XHQ+PC9zY3JpcHQ+XG5cdFx0XHRcdFx0PHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2pkZW50aWNvbkAyLjIuMFwiPjwvc2NyaXB0PlxuXHRcdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgKFxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBcImZpeGVkXCIsXG5cdFx0XHRcdFx0XHRcdHpJbmRleDogXCIxXCIsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjEwMCVcIixcblx0XHRcdFx0XHRcdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdGxlZnQ6IFwiMFwiLFxuXHRcdFx0XHRcdFx0XHR0b3A6IFwiMFwiLFxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMCwgMCwgMC44KVwiLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiNDAlXCIsXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjQwJVwiLFxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwid2hpdGVcIixcblx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiNzBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiMjVweFwiLFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9jLnRlbm9yLmNvbS9VVHhaUHdLbE5OSUFBQUFpL2V0aGVyZXVtLWV0aGVyZXVtLWNyeXB0by5naWZcIlxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIyMDBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiBcIjBweCAyMHB4IDQwcHhcIixcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8aDIgc3R5bGU9e3sgbWFyZ2luOiBcIjIwcHhcIiB9fT5cblx0XHRcdFx0XHRcdFx0XHRXZWxjb21lIHRvIHlvdXIgRGVjZW50cmFsaXplZCBXb3JsZCEhXG5cdFx0XHRcdFx0XHRcdDwvaDI+XG5cdFx0XHRcdFx0XHRcdDxoNSBzdHlsZT17eyBtYXJnaW46IFwiMTBweFwiIH19PlxuXHRcdFx0XHRcdFx0XHRcdEhvbGQgdGlnaHQgd2hpbGUgd2Ugc2V0dXAgdGhlIGNvbnRlbnRzIGZvciB5b3Vcblx0XHRcdFx0XHRcdFx0PC9oNT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fVxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRtYXJnaW46IFwiMjBweCBhdXRvXCIsXG5cdFx0XHRcdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHR3aWR0aDogXCI2NTBweFwiLFxuXHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxuXHRcdFx0XHRcdFx0Ym9yZGVyOiBcIjFweCBzb2xpZCBncmF5XCIsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJMZXQncyB0d2VldCBzb21ldGhpbmcuLi5cIlxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMTUwcHhcIixcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogXCIxMnB4XCIsXG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogXCIwcHggc29saWQgYmxhY2tcIixcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5yZWFkQ29udGVudH1cblx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRlbnR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8YnI+PC9icj5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJmaWxlXCJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmNhcHR1cmVGaWxlfVxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luOiBcIjEwcHhcIiB9fVxuXHRcdFx0XHRcdFx0aWQ9XCJmaWxlX3VwbG9hZFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW46IFwiMTBweFwiIH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0U3VibWl0XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0e3RoaXMuc3RhdGUuem9vbWVkICE9PSBudWxsICYmIChcblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogXCJmaXhlZFwiLFxuXHRcdFx0XHRcdFx0XHR6SW5kZXg6IFwiMVwiLFxuXHRcdFx0XHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogXCIxMDAlXCIsXG5cdFx0XHRcdFx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRsZWZ0OiBcIjBcIixcblx0XHRcdFx0XHRcdFx0dG9wOiBcIjBcIixcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuOClcIixcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRzcmM9e3RoaXMuc3RhdGUuem9vbWVkfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLmltYWdlWm9vbX1cblx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRtYXhXaWR0aDogXCI5MCVcIixcblx0XHRcdFx0XHRcdFx0XHRtYXhIZWlnaHQ6IFwiOTAlXCIsXG5cdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBcInpvb20tb3V0XCIsXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLnBvc3RzXG5cdFx0XHRcdFx0XHQuc2xpY2UoMClcblx0XHRcdFx0XHRcdC5yZXZlcnNlKClcblx0XHRcdFx0XHRcdC5tYXAoKHBvc3QsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkXCJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiBcIjIwcHggYXV0byAyMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCI2NTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcImZpdC1jb250ZW50XCIsXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRrZXk9e2luZGV4fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17YGh0dHBzOi8vaWRlbnRpY29uLWFwaS5oZXJva3VhcHAuY29tLyR7cG9zdC5hdXRob3J9LzQwP2Zvcm1hdD1wbmdgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogXCI1cHggMjBweCA1cHggNXB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwid2hpdGVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpbmRleH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHR7cG9zdC5hdXRob3J9XG5cdFx0XHRcdFx0XHRcdFx0PC9oNj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkLWltZy10b3AgaW1nLWZsdWlkXCJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1heFdpZHRoOiBcIjkwJVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiYXV0b1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogXCJoaWRkZW5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogXCIwIGF1dG9cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogXCIyMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtgaHR0cHM6Ly9pcGZzLmlvL2lwZnMvJHtwb3N0LmltYWdlVXJsfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcCBpbWctZmx1aWRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9iamVjdEZpdDogXCJjb250YWluXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBcInpvb20taW5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMjVweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCJhdXRvXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiYXV0b1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogXCIwIGF1dG9cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5pbWFnZVpvb219XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmQtYm9keVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBoZWlnaHQ6IFwiYXV0b1wiIH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FyZC10ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogXCIyMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiBcIjIwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3Bvc3QuY29udGVudH1cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RJbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUFHQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUNBO0FBTkE7QUFBQTtBQVFBO0FBQ0E7QUFEQTtBQVJBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFGQTtBQUFBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFRQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQVZBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFYQTtBQU9BO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBR0E7QUFDQTtBQVhBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWNBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFUQTtBQUNBO0FBd0JBO0FBekJBO0FBQ0E7QUEwQkE7QUFDQTtBQTVCQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBTUE7QUFOQTtBQUNBO0FBT0E7QUFDQTtBQUFBOztBQUhBO0FBS0E7QUFMQTtBQUNBO0FBTUE7QUFDQTtBQUFBOztBQUhBO0FBS0E7QUFMQTtBQUNBO0FBSUE7QUFFQTtBQUZBO0FBRUE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVZBOztBQUZBO0FBZUE7QUFmQTtBQUNBOztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7O0FBRkE7QUFTQTtBQVRBO0FBQ0E7QUFVQTs7QUFFQTtBQUFBO0FBREE7O0FBSEE7QUFPQTtBQVBBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBOztBQUhBO0FBVUE7QUFWQTtBQUNBO0FBV0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQUtBO0FBQ0E7O0FBVEE7QUFXQTtBQVhBO0FBQ0E7O0FBVUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQU9BO0FBQ0E7QUFBQTs7QUFIQTtBQUFBO0FBQUE7QUFDQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBVkE7O0FBRkE7QUFlQTtBQWZBO0FBQ0E7QUFlQTtBQUNBOztBQUdBO0FBQ0E7QUFBQTtBQUZBOztBQUpBO0FBV0E7QUFYQTtBQUNBOztBQVVBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFKQTtBQUlBOztBQVBBO0FBU0E7QUFUQTtBQUNBO0FBUUE7QUFDQTtBQURBOztBQUVBOztBQUdBO0FBQ0E7QUFFQTtBQUpBO0FBSUE7O0FBUEE7QUFTQTtBQVRBO0FBQ0E7QUFZQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTs7QUFIQTtBQVdBO0FBWEE7QUFDQTtBQVdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUEE7QUFPQTs7QUFYQTtBQWNBO0FBZEE7QUFDQTtBQWVBO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFLQTs7QUFFQTtBQUFBO0FBREE7O0FBSEE7QUFPQTtBQVBBO0FBQ0E7QUFjQTs7Ozs7Ozs7Ozs7O0FBdlJBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7QUFKQTtBQUFBO0FBUUE7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBWEE7QUFPQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUdBO0FBQ0E7QUFYQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFjQTtBQUNBO0FBZkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBOztBQWdCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9