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
			loading: true,
			uploading: false,
			matamask: true
		};
		_this.captureFile = _this.captureFile.bind(_this);
		_this.onSubmit = _this.onSubmit.bind(_this);
		_this.imageZoom = _this.imageZoom.bind(_this);
		_this.readContent = _this.readContent.bind(_this);
		_this.takeback = _this.takeback.bind(_this);
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
								return _web.web3.eth.getAccounts();

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
			};
		}
	}, {
		key: "takeback",
		value: function takeback(event) {
			event.preventDefault();
			this.setState({ metamask: true });
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
								return _web.web3.eth.getAccounts();

							case 3:
								accounts = _context4.sent;

								if (_web.metamask_provider == false) {
									this.setState({ metamask: false });
								} else {
									this.setState({ metamask: true, uploading: true });
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

																					Post = new _web.web3.eth.Contract(JSON.parse(_Post2.default.interface), posts[i]);
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

															_this3.setState({
																posts: new_posts,
																content: "",
																uploading: false
															});
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
								}

							case 5:
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
								if (this.state.zoomed !== null) {
									this.setState({ zoomed: null });
								} else {
									this.setState({ zoomed: event.target.getAttribute("src") });
								}

							case 2:
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
		}
	}, {
		key: "render",
		value: function render() {
			var _this4 = this;

			return _react2.default.createElement("div", { className: "container", __source: {
					fileName: _jsxFileName,
					lineNumber: 129
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 130
				}
			}, _react2.default.createElement("title", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 131
				}
			}, "DOSN"), _react2.default.createElement("link", {
				href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
				rel: "stylesheet",
				integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
				crossorigin: "anonymous",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 132
				}
			}), _react2.default.createElement("link", {
				rel: "stylesheet",
				href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 138
				}
			}), _react2.default.createElement("script", {
				src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
				integrity: "sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p",
				crossorigin: "anonymous",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 142
				}
			}), _react2.default.createElement("script", {
				src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",
				integrity: "sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF",
				crossorigin: "anonymous",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 147
				}
			}), _react2.default.createElement("script", { src: "https://cdn.jsdelivr.net/npm/jdenticon@2.2.0", __source: {
					fileName: _jsxFileName,
					lineNumber: 152
				}
			})), this.state.metamask == false && _react2.default.createElement("div", {
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
					lineNumber: 155
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
					lineNumber: 170
				}
			}, _react2.default.createElement("img", {
				src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa-%2FAAuE7mC1z-HXEKxL4YhAhc7WDHWA6Rnly1I592T5ag%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1&nofb=1",
				style: {
					width: "200px",
					margin: "0px 20px 10px"
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 179
				}
			}), _react2.default.createElement("h2", { style: { margin: "5px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 186
				}
			}, "OOPS!"), _react2.default.createElement("h5", { style: { margin: "10px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 187
				}
			}, "Either the MetaMask extension is not installed or you aren't logged into metamask."), _react2.default.createElement("button", {
				onClick: this.takeback,
				className: "btn btn-info",
				style: { margin: "20px 40px" },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 191
				}
			}, _react2.default.createElement("i", { "class": "fa fa-arrow-left", __source: {
					fileName: _jsxFileName,
					lineNumber: 196
				}
			}), " | Naah! Take me back to feeds"), _react2.default.createElement("a", {
				href: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
				className: "btn btn-warning",
				target: "_blank",
				style: { margin: "20px 40px" },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 199
				}
			}, _react2.default.createElement("i", { "class": "fa fa-chrome", __source: {
					fileName: _jsxFileName,
					lineNumber: 205
				}
			}), " | Get MetaMask Extenstion"))), this.state.loading && _react2.default.createElement("div", {
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
					lineNumber: 212
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
					lineNumber: 227
				}
			}, _react2.default.createElement("img", {
				src: "https://c.tenor.com/UTxZPwKlNNIAAAAi/ethereum-ethereum-crypto.gif",
				style: {
					width: "200px",
					margin: "0px 20px 40px"
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 236
				}
			}), _react2.default.createElement("h2", { style: { margin: "20px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 243
				}
			}, "Welcome to your Decentralized World!!"), _react2.default.createElement("h5", { style: { margin: "10px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 246
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
					lineNumber: 252
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
					lineNumber: 262
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 273
				}
			}), _react2.default.createElement("input", {
				type: "file",
				onChange: this.captureFile,
				style: { margin: "10px" },
				id: "file_upload",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 274
				}
			}), _react2.default.createElement("button", {
				type: "submit",
				className: "btn btn-primary",
				style: { margin: "10px" },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 280
				}
			}, this.state.uploading && _react2.default.createElement("div", { style: { margin: "5px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 286
				}
			}, _react2.default.createElement("span", { style: { float: "left" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 287
				}
			}, _react2.default.createElement("img", {
				src: "https://c.tenor.com/k-A2Bukh1lUAAAAi/loading-loading-symbol.gif",
				style: {
					height: "28px",
					margin: "0 15px 0 0"
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 288
				}
			})), _react2.default.createElement("span", { style: { float: "right" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 296
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 297
				}
			}, "Uploading...", _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 298
				}
			}), "It might take upto 10 mins!!"))), !this.state.uploading && "Submit")), this.state.zoomed !== null && _react2.default.createElement("div", {
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
					lineNumber: 308
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
					lineNumber: 323
				}
			})), _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 334
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
						lineNumber: 339
					}
				}, _react2.default.createElement("h6", { className: "card-header", __source: {
						fileName: _jsxFileName,
						lineNumber: 348
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
						lineNumber: 349
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
						lineNumber: 360
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
						margin: "0 auto",
						maxHeight: "500px"
					},
					onClick: _this4.imageZoom,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 371
					}
				})), _react2.default.createElement("div", {
					className: "card-body",
					style: { height: "auto" },
					__source: {
						fileName: _jsxFileName,
						lineNumber: 386
					}
				}, _react2.default.createElement("p", {
					className: "card-text",
					style: {
						fontSize: "22px",
						margin: "20px"
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 390
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

														Post = new _web.web3.eth.Contract(JSON.parse(_Post2.default.interface), posts[i]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUG9zdEZhY3RvcnkiLCJQb3N0Q29udHJhY3QiLCJpcGZzIiwid2ViMyIsIm1ldGFtYXNrX3Byb3ZpZGVyIiwiSGVhZCIsImFjY291bnRzIiwiUG9zdEluZGV4IiwicHJvcHMiLCJzdGF0ZSIsInBvc3RzIiwiYnVmZmVyIiwiY29udGVudCIsInpvb21lZCIsImxvYWRpbmciLCJ1cGxvYWRpbmciLCJtYXRhbWFzayIsImNhcHR1cmVGaWxlIiwiYmluZCIsIm9uU3VibWl0IiwiaW1hZ2Vab29tIiwicmVhZENvbnRlbnQiLCJ0YWtlYmFjayIsImV0aCIsImdldEFjY291bnRzIiwic2V0U3RhdGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwid2luZG93IiwiRmlsZVJlYWRlciIsInJlYWRBc0FycmF5QnVmZmVyIiwib25sb2FkZW5kIiwiQnVmZmVyIiwicmVzdWx0IiwibWV0YW1hc2siLCJhZGQiLCJlcnJvciIsImNvbnNvbGUiLCJtZXRob2RzIiwiY3JlYXRlUG9zdCIsImhhc2giLCJzZW5kIiwiZnJvbSIsImdldFBvc3RzIiwiY2FsbCIsIm5ld19wb3N0cyIsImkiLCJsZW5ndGgiLCJQb3N0IiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiLCJpbWFnZV9oYXNoIiwiYXV0aG9yIiwiY3VycmVudFBvc3QiLCJpbWFnZVVybCIsInB1c2giLCJmaWxlX3VwbG9hZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiZ2V0QXR0cmlidXRlIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJ3aWR0aCIsImhlaWdodCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJsZWZ0IiwidG9wIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW4iLCJib3JkZXIiLCJmbG9hdCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiY3Vyc29yIiwic2xpY2UiLCJyZXZlcnNlIiwibWFwIiwicG9zdCIsImluZGV4Iiwib3ZlcmZsb3ciLCJvYmplY3RGaXQiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUF5Qjs7QUFDeEMsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBSSxXQUFKLEFBQWU7O0ksQUFFVDtvQ0FDTDs7b0JBQUEsQUFBWSxPQUFPO3NDQUFBOzswSUFBQSxBQUNaLEFBQ047O1FBQUEsQUFBSztVQUNHLE1BQUEsQUFBSyxNQURBLEFBQ00sQUFDbEI7V0FGWSxBQUVKLEFBQ1I7WUFIWSxBQUdILEFBQ1Q7V0FKWSxBQUlKLEFBQ1I7WUFMWSxBQUtILEFBQ1Q7Y0FOWSxBQU1ELEFBQ1g7YUFQRCxBQUFhLEFBT0YsQUFFWDtBQVRhLEFBQ1o7UUFRRCxBQUFLLGNBQWMsTUFBQSxBQUFLLFlBQUwsQUFBaUIsS0FBcEMsQUFDQTtRQUFBLEFBQUssV0FBVyxNQUFBLEFBQUssU0FBTCxBQUFjLEtBQTlCLEFBQ0E7UUFBQSxBQUFLLFlBQVksTUFBQSxBQUFLLFVBQUwsQUFBZSxLQUFoQyxBQUNBO1FBQUEsQUFBSyxjQUFjLE1BQUEsQUFBSyxZQUFMLEFBQWlCLEtBQXBDLEFBQ0E7UUFBQSxBQUFLLFdBQVcsTUFBQSxBQUFLLFNBQUwsQUFBYyxLQWZaLEFBZWxCO1NBQ0E7Ozs7Ozs7Ozs7OztlQUdpQixVQUFBLEFBQUssSUFBSSxBLEFBQVQ7O1lBQWpCO0EsNEJBQ0E7O2FBQUEsQUFBSyxTQUFTLEVBQUUsU0FBaEIsQUFBYyxBQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBd0JkLEEsT0FBTztnQkFDbEI7O1NBQUEsQUFB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Q0ssQUFDWDtjQUZNLEFBRUUsQUFDUjtvQkFITSxBQUdRLEFBQ2Q7Y0FKTSxBQUlFLEFBQ1I7YUFMTSxBQUtDLEFBQ1A7Y0FOTSxBQU1FLEFBQ1I7aUJBVkYsQUFHUSxBQU9LLEFBRVo7QUFUTyxBQUNOO2NBUVEsT0FaVixBQVllOztnQkFaZjtrQkFoQ0YsQUFxQkMsQUFXQyxBQWVEO0FBZkM7QUFDQyx5QkFjRixjQUFBO2dCQUFBLEFBQ1csQUFDVjtZQUFPLEVBQUUsUUFGVixBQUVRLEFBQVU7O2dCQUZsQjtrQkFBQSxBQUlDO0FBSkQ7QUFDQyx1QkFHQSxjQUFBO2dCQUFBLEFBQ1csQUFDVjs7Z0JBQU8sQUFDSSxBQUNWO2NBSkYsQUFFUSxBQUVFO0FBRkYsQUFDTjs7Z0JBSEY7a0JBQUEsQUFPRTtBQVBGO0FBQ0MsWUFyREMsQUFDSixBQStDQyxBQUlDLEFBT087QUE3UWQsQUFDQyxBQTZNQyxBQUNFLEFBc0VKOzs7Ozs7Ozs7Ozs7ZUFsWG9CLGtCQUFBLEFBQVksUUFBWixBQUFvQixXQUFXLEEsQUFBL0I7O1lBQWQ7QTs7MkJBQ2dCOzhGQUFDLGtCQUFBLEFBQWdCLE9BQWhCO2tDQUFBOzBFQUFBO3FCQUFBOytDQUFBO2tCQUNsQjtBQURrQiwwQkFBQSxBQUNOLEFBQ1A7QUFGYSxrQkFBQSxBQUVUOztrQkFGUztvQkFFTixJQUFJLE1BRkUsQUFFSSxTQUZKO2dDQUFBO0FBQUE7QUFHZjs7QUFIZSxxQkFHUixJQUFJLFVBQUEsQUFBSyxJQUFULEFBQWEsU0FDekIsS0FBQSxBQUFLLE1BQU0sZUFEQyxBQUNaLEFBQXdCLFlBQ3hCLE1BTG9CLEFBR1IsQUFFWixBQUFNOytCQUxjO3FCQVFKLEtBQUEsQUFBSyxRQUFMLEFBQWEsYUFSVCxBQVFKLEFBQTBCOztrQkFSdEI7dUNBQUE7K0JBQUE7cUJBU04sS0FBQSxBQUFLLFFBQUwsQUFBYSxTQVRQLEFBU04sQUFBc0I7O2tCQVRoQjt1Q0FBQTsrQkFBQTtxQkFVTCxLQUFBLEFBQUssUUFBTCxBQUFhLFVBVlIsQUFVTCxBQUF1Qjs7a0JBVmxCO3VDQU9mO0FBUGU7QUFBQSxtQ0FTcEI7QUFUb0IsaUNBVXBCO0FBVm9CLGtDQUFBLEFBWXJCO0FBSkM7O3dCQUlELEFBQVUsS0FaVyxBQVlyQixBQUFlOztrQkFWa0I7QUFGWjsrQkFBQTtBQUFBOztrQkFBQTtnREFBQSxBQWNmOztrQkFkZTtrQkFBQTsrQkFBQTs7QUFBQTt1QkFBQTtBQUFEOzsrQkFBQTttQ0FBQTtBQUFBO1NBQUEsR0FlbkIsQSxBQWZtQjs7WUFBbEI7QTswQ0FnQkcsRUFBRSxPQUFGLEEsQUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTFDTSxBLEFBOFl4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9hdHVsc2luZ2gvUHJvamVjdHMvRGVjZW50cmFsaXplZF9PU04ifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4wNzI4NDJmODNiZTlmNjkzNTZjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ODg1ZDgxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9zdEZhY3RvcnkgZnJvbSBcIi4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcbmltcG9ydCBQb3N0Q29udHJhY3QgZnJvbSBcIi4uL2V0aGVyZXVtL2J1aWxkL1Bvc3QuanNvblwiO1xuaW1wb3J0IGlwZnMgZnJvbSBcIi4uL2V0aGVyZXVtL2lwZnNcIjtcbmltcG9ydCB7IHdlYjMsIG1ldGFtYXNrX3Byb3ZpZGVyIH0gZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxubGV0IGFjY291bnRzID0gW107XG5cbmNsYXNzIFBvc3RJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRwb3N0czogdGhpcy5wcm9wcy5wb3N0cyxcblx0XHRcdGJ1ZmZlcjogbnVsbCxcblx0XHRcdGNvbnRlbnQ6IFwiXCIsXG5cdFx0XHR6b29tZWQ6IG51bGwsXG5cdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0dXBsb2FkaW5nOiBmYWxzZSxcblx0XHRcdG1hdGFtYXNrOiB0cnVlLFxuXHRcdH07XG5cdFx0dGhpcy5jYXB0dXJlRmlsZSA9IHRoaXMuY2FwdHVyZUZpbGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaW1hZ2Vab29tID0gdGhpcy5pbWFnZVpvb20uYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlYWRDb250ZW50ID0gdGhpcy5yZWFkQ29udGVudC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudGFrZWJhY2sgPSB0aGlzLnRha2ViYWNrLmJpbmQodGhpcyk7XG5cdH1cblxuXHRhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuXHR9XG5cblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcblx0XHRjb25zdCBwb3N0cyA9IGF3YWl0IFBvc3RGYWN0b3J5Lm1ldGhvZHMuZ2V0UG9zdHMoKS5jYWxsKCk7XG5cdFx0bGV0IG5ld19wb3N0cyA9IGF3YWl0IChhc3luYyBmdW5jdGlvbiAocG9zdHMpIHtcblx0XHRcdGxldCBuZXdfcG9zdHMgPSBbXTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcG9zdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgUG9zdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcblx0XHRcdFx0XHRKU09OLnBhcnNlKFBvc3RDb250cmFjdC5pbnRlcmZhY2UpLFxuXHRcdFx0XHRcdHBvc3RzW2ldXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRQb3N0ID0ge1xuXHRcdFx0XHRcdGltYWdlVXJsOiBhd2FpdCBQb3N0Lm1ldGhvZHMuaW1hZ2VfaGFzaCgpLmNhbGwoKSxcblx0XHRcdFx0XHRhdXRob3I6IGF3YWl0IFBvc3QubWV0aG9kcy5hdXRob3IoKS5jYWxsKCksXG5cdFx0XHRcdFx0Y29udGVudDogYXdhaXQgUG9zdC5tZXRob2RzLmNvbnRlbnQoKS5jYWxsKCksXG5cdFx0XHRcdH07XG5cdFx0XHRcdG5ld19wb3N0cy5wdXNoKGN1cnJlbnRQb3N0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBuZXdfcG9zdHM7XG5cdFx0fSkocG9zdHMpO1xuXHRcdHJldHVybiB7IHBvc3RzOiBuZXdfcG9zdHMgfTtcblx0fVxuXG5cdGNhcHR1cmVGaWxlKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuXHRcdGNvbnN0IHJlYWRlciA9IG5ldyB3aW5kb3cuRmlsZVJlYWRlcigpO1xuXHRcdHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcblx0XHRyZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGJ1ZmZlcjogQnVmZmVyKHJlYWRlci5yZXN1bHQpIH0pO1xuXHRcdH07XG5cdH1cblxuXHR0YWtlYmFjayhldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IG1ldGFtYXNrOiB0cnVlIH0pO1xuXHR9XG5cblx0YXN5bmMgb25TdWJtaXQoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblx0XHRpZiAobWV0YW1hc2tfcHJvdmlkZXIgPT0gZmFsc2UpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBtZXRhbWFzazogZmFsc2UgfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBtZXRhbWFzazogdHJ1ZSwgdXBsb2FkaW5nOiB0cnVlIH0pO1xuXHRcdFx0aXBmcy5maWxlcy5hZGQodGhpcy5zdGF0ZS5idWZmZXIsIGFzeW5jIChlcnJvciwgcmVzdWx0KSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRhd2FpdCBQb3N0RmFjdG9yeS5tZXRob2RzXG5cdFx0XHRcdFx0LmNyZWF0ZVBvc3QocmVzdWx0WzBdLmhhc2gsIHRoaXMuc3RhdGUuY29udGVudClcblx0XHRcdFx0XHQuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xuXHRcdFx0XHRjb25zdCBwb3N0cyA9IGF3YWl0IFBvc3RGYWN0b3J5Lm1ldGhvZHMuZ2V0UG9zdHMoKS5jYWxsKCk7XG5cdFx0XHRcdGxldCBuZXdfcG9zdHMgPSBhd2FpdCAoYXN5bmMgZnVuY3Rpb24gKHBvc3RzKSB7XG5cdFx0XHRcdFx0bGV0IG5ld19wb3N0cyA9IFtdO1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcG9zdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGNvbnN0IFBvc3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXG5cdFx0XHRcdFx0XHRcdEpTT04ucGFyc2UoUG9zdENvbnRyYWN0LmludGVyZmFjZSksXG5cdFx0XHRcdFx0XHRcdHBvc3RzW2ldXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0Y29uc3QgY3VycmVudFBvc3QgPSB7XG5cdFx0XHRcdFx0XHRcdGltYWdlVXJsOiBhd2FpdCBQb3N0Lm1ldGhvZHMuaW1hZ2VfaGFzaCgpLmNhbGwoKSxcblx0XHRcdFx0XHRcdFx0YXV0aG9yOiBhd2FpdCBQb3N0Lm1ldGhvZHMuYXV0aG9yKCkuY2FsbCgpLFxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBhd2FpdCBQb3N0Lm1ldGhvZHMuY29udGVudCgpLmNhbGwoKSxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRuZXdfcG9zdHMucHVzaChjdXJyZW50UG9zdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBuZXdfcG9zdHM7XG5cdFx0XHRcdH0pKHBvc3RzKTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0cG9zdHM6IG5ld19wb3N0cyxcblx0XHRcdFx0XHRjb250ZW50OiBcIlwiLFxuXHRcdFx0XHRcdHVwbG9hZGluZzogZmFsc2UsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb25zdCBmaWxlX3VwbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlX3VwbG9hZFwiKTtcblx0XHRcdFx0ZmlsZV91cGxvYWRlci52YWx1ZSA9IFwiXCI7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRhc3luYyBpbWFnZVpvb20oZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmICh0aGlzLnN0YXRlLnpvb21lZCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHpvb21lZDogbnVsbCB9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHpvb21lZDogZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcInNyY1wiKSB9KTtcblx0XHR9XG5cdH1cblxuXHRyZWFkQ29udGVudChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGNvbnRlbnQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPkRPU048L3RpdGxlPlxuXHRcdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjIvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuXHRcdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdFx0XHRpbnRlZ3JpdHk9XCJzaGEzODQtRVZTVFFOMy9henByRzFBbm0zUURncEpMSW05TmFvMFl6MXp0Y1FUd0ZzcGQzeUQ2NVZvaGhwdXVDT21MQVNqQ1wiXG5cdFx0XHRcdFx0XHRjcm9zc29yaWdpbj1cImFub255bW91c1wiXG5cdFx0XHRcdFx0PjwvbGluaz5cblx0XHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiXG5cdFx0XHRcdFx0PjwvbGluaz5cblx0XHRcdFx0XHQ8c2NyaXB0XG5cdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL0Bwb3BwZXJqcy9jb3JlQDIuOS4yL2Rpc3QvdW1kL3BvcHBlci5taW4uanNcIlxuXHRcdFx0XHRcdFx0aW50ZWdyaXR5PVwic2hhMzg0LUlRc29MWGw1UElMRmhvc1ZOdWJxNUxDN1FiOURYZ0RBOWkrdFE4WmozaXdXQXdQdGdGVHhiSjhOVDRHTjFSOHBcIlxuXHRcdFx0XHRcdFx0Y3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuXHRcdFx0XHRcdD48L3NjcmlwdD5cblx0XHRcdFx0XHQ8c2NyaXB0XG5cdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMi9kaXN0L2pzL2Jvb3RzdHJhcC5taW4uanNcIlxuXHRcdFx0XHRcdFx0aW50ZWdyaXR5PVwic2hhMzg0LWNWS0lQaEdXaUMyQWw0dStMV2d4ZktUUkljZnUwSlR4UitFUUR6L2JnbGRvRXlsNEgwelVGMFFLYnJKMEVjUUZcIlxuXHRcdFx0XHRcdFx0Y3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuXHRcdFx0XHRcdD48L3NjcmlwdD5cblx0XHRcdFx0XHQ8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vamRlbnRpY29uQDIuMi4wXCI+PC9zY3JpcHQ+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0e3RoaXMuc3RhdGUubWV0YW1hc2sgPT0gZmFsc2UgJiYgKFxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBcImZpeGVkXCIsXG5cdFx0XHRcdFx0XHRcdHpJbmRleDogXCIxXCIsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjEwMCVcIixcblx0XHRcdFx0XHRcdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdGxlZnQ6IFwiMFwiLFxuXHRcdFx0XHRcdFx0XHR0b3A6IFwiMFwiLFxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMCwgMCwgMC44KVwiLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiNTAlXCIsXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjUwJVwiLFxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwid2hpdGVcIixcblx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiNzBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiMjVweFwiLFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9leHRlcm5hbC1jb250ZW50LmR1Y2tkdWNrZ28uY29tL2l1Lz91PWh0dHBzJTNBJTJGJTJGeXQzLmdncGh0LmNvbSUyRmEtJTJGQUF1RTdtQzF6LUhYRUt4TDRZaEFoYzdXREhXQTZSbmx5MUk1OTJUNWFnJTNEczkwMC1tby1jLWMweGZmZmZmZmZmLXJqLWstbm8mZj0xJm5vZmI9MVwiXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjIwMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IFwiMHB4IDIwcHggMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxoMiBzdHlsZT17eyBtYXJnaW46IFwiNXB4XCIgfX0+T09QUyE8L2gyPlxuXHRcdFx0XHRcdFx0XHQ8aDUgc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHhcIiB9fT5cblx0XHRcdFx0XHRcdFx0XHRFaXRoZXIgdGhlIE1ldGFNYXNrIGV4dGVuc2lvbiBpcyBub3QgaW5zdGFsbGVkXG5cdFx0XHRcdFx0XHRcdFx0b3IgeW91IGFyZW4ndCBsb2dnZWQgaW50byBtZXRhbWFzay5cblx0XHRcdFx0XHRcdFx0PC9oNT5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMudGFrZWJhY2t9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW46IFwiMjBweCA0MHB4XCIgfX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtYXJyb3ctbGVmdFwiPjwvaT4gfCBOYWFoISBUYWtlIG1lXG5cdFx0XHRcdFx0XHRcdFx0YmFjayB0byBmZWVkc1xuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvbWV0YW1hc2svbmtiaWhmYmVvZ2FlYW9laGxlZm5rb2RiZWZncGdrbm5cIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PXtcIl9ibGFua1wifVxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpbjogXCIyMHB4IDQwcHhcIiB9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1jaHJvbWVcIj48L2k+IHwgR2V0IE1ldGFNYXNrXG5cdFx0XHRcdFx0XHRcdFx0RXh0ZW5zdGlvblxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdFx0e3RoaXMuc3RhdGUubG9hZGluZyAmJiAoXG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IFwiZml4ZWRcIixcblx0XHRcdFx0XHRcdFx0ekluZGV4OiBcIjFcIixcblx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0bGVmdDogXCIwXCIsXG5cdFx0XHRcdFx0XHRcdHRvcDogXCIwXCIsXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjgpXCIsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCI0MCVcIixcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiNDAlXCIsXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCI3MHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogXCIyNXB4XCIsXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL2MudGVub3IuY29tL1VUeFpQd0tsTk5JQUFBQWkvZXRoZXJldW0tZXRoZXJldW0tY3J5cHRvLmdpZlwiXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjIwMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IFwiMHB4IDIwcHggNDBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxoMiBzdHlsZT17eyBtYXJnaW46IFwiMjBweFwiIH19PlxuXHRcdFx0XHRcdFx0XHRcdFdlbGNvbWUgdG8geW91ciBEZWNlbnRyYWxpemVkIFdvcmxkISFcblx0XHRcdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4XCIgfX0+XG5cdFx0XHRcdFx0XHRcdFx0SG9sZCB0aWdodCB3aGlsZSB3ZSBzZXR1cCB0aGUgY29udGVudHMgZm9yIHlvdVxuXHRcdFx0XHRcdFx0XHQ8L2g1PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0b25TdWJtaXQ9e3RoaXMub25TdWJtaXR9XG5cdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdG1hcmdpbjogXCIyMHB4IGF1dG9cIixcblx0XHRcdFx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdHdpZHRoOiBcIjY1MHB4XCIsXG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG5cdFx0XHRcdFx0XHRib3JkZXI6IFwiMXB4IHNvbGlkIGdyYXlcIixcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PHRleHRhcmVhXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkxldCdzIHR3ZWV0IHNvbWV0aGluZy4uLlwiXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogXCIxNTBweFwiLFxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjEycHhcIixcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBcIjBweCBzb2xpZCBibGFja1wiLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLnJlYWRDb250ZW50fVxuXHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuY29udGVudH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxicj48L2JyPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cImZpbGVcIlxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuY2FwdHVyZUZpbGV9XG5cdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW46IFwiMTBweFwiIH19XG5cdFx0XHRcdFx0XHRpZD1cImZpbGVfdXBsb2FkXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4XCIgfX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS51cGxvYWRpbmcgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCI1cHhcIiB9fT5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyBmbG9hdDogXCJsZWZ0XCIgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vYy50ZW5vci5jb20vay1BMkJ1a2gxbFVBQUFBaS9sb2FkaW5nLWxvYWRpbmctc3ltYm9sLmdpZlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjI4cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IFwiMCAxNXB4IDAgMFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFVwbG9hZGluZy4uLjxicj48L2JyPkl0IG1pZ2h0IHRha2UgdXB0b1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQxMCBtaW5zISFcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0eyF0aGlzLnN0YXRlLnVwbG9hZGluZyAmJiBcIlN1Ym1pdFwifVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnpvb21lZCAhPT0gbnVsbCAmJiAoXG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IFwiZml4ZWRcIixcblx0XHRcdFx0XHRcdFx0ekluZGV4OiBcIjFcIixcblx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0bGVmdDogXCIwXCIsXG5cdFx0XHRcdFx0XHRcdHRvcDogXCIwXCIsXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjgpXCIsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0c3JjPXt0aGlzLnN0YXRlLnpvb21lZH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5pbWFnZVpvb219XG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0bWF4V2lkdGg6IFwiOTAlXCIsXG5cdFx0XHRcdFx0XHRcdFx0bWF4SGVpZ2h0OiBcIjkwJVwiLFxuXHRcdFx0XHRcdFx0XHRcdGN1cnNvcjogXCJ6b29tLW91dFwiLFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5wb3N0c1xuXHRcdFx0XHRcdFx0LnNsaWNlKDApXG5cdFx0XHRcdFx0XHQucmV2ZXJzZSgpXG5cdFx0XHRcdFx0XHQubWFwKChwb3N0LCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FyZFwiXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogXCIyMHB4IGF1dG8gMjBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiNjUwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCJmaXQtY29udGVudFwiLFxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtpbmRleH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2BodHRwczovL2lkZW50aWNvbi1hcGkuaGVyb2t1YXBwLmNvbS8ke3Bvc3QuYXV0aG9yfS80MD9mb3JtYXQ9cG5nYH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IFwiNXB4IDIwcHggNXB4IDVweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCI1MCVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3Bvc3QuYXV0aG9yfVxuXHRcdFx0XHRcdFx0XHRcdDwvaDY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wIGltZy1mbHVpZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXhXaWR0aDogXCI5MCVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcImF1dG9cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IFwiMCBhdXRvXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiMjBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17YGh0dHBzOi8vaXBmcy5pby9pcGZzLyR7cG9zdC5pbWFnZVVybH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkLWltZy10b3AgaW1nLWZsdWlkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvYmplY3RGaXQ6IFwiY29udGFpblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnNvcjogXCJ6b29tLWluXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjI1cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiYXV0b1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcImF1dG9cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IFwiMCBhdXRvXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4SGVpZ2h0OiBcIjUwMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaW1hZ2Vab29tfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkLWJvZHlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgaGVpZ2h0OiBcImF1dG9cIiB9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IFwiMjJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogXCIyMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtwb3N0LmNvbnRlbnR9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0SW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7QUFJQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUNBO0FBTkE7QUFBQTtBQVFBO0FBQ0E7QUFEQTtBQVJBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFGQTtBQUFBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFRQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQVZBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFYQTtBQU9BO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBR0E7QUFDQTtBQVhBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWNBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFUQTtBQUNBO0FBd0JBO0FBRUE7QUFDQTtBQUVBO0FBSkE7QUExQkE7QUFDQTtBQThCQTtBQUNBO0FBaENBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQWlDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUFBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBTUE7QUFOQTtBQUNBO0FBT0E7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUtBO0FBQ0E7QUFBQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQU1BO0FBQ0E7QUFBQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQUlBO0FBRUE7QUFGQTtBQUVBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFWQTs7QUFGQTtBQWVBO0FBZkE7QUFDQTs7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBOztBQUZBO0FBU0E7QUFUQTtBQUNBO0FBVUE7O0FBRUE7QUFBQTtBQURBOztBQUhBO0FBT0E7QUFQQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBRUE7QUFBQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBSkE7QUFNQTtBQU5BO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFNQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBVkE7O0FBRkE7QUFlQTtBQWZBO0FBQ0E7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTs7QUFGQTtBQVNBO0FBVEE7QUFDQTtBQVVBOztBQUVBO0FBQUE7QUFEQTs7QUFIQTtBQU9BO0FBUEE7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7O0FBSEE7QUFVQTtBQVZBO0FBQ0E7QUFXQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUxBO0FBS0E7QUFDQTs7QUFUQTtBQVdBO0FBWEE7QUFDQTs7QUFVQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUNBOztBQUpBO0FBTUE7QUFOQTtBQUNBO0FBT0E7QUFDQTtBQUFBOztBQUhBO0FBS0E7QUFMQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7O0FBR0E7O0FBRUE7QUFBQTtBQURBOztBQUhBO0FBUUE7QUFSQTtBQUNBO0FBT0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVZBOztBQUZBO0FBZUE7QUFmQTtBQUNBO0FBZUE7QUFDQTs7QUFHQTtBQUNBO0FBQUE7QUFGQTs7QUFKQTtBQVdBO0FBWEE7QUFDQTs7QUFVQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBSkE7QUFJQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTtBQVFBO0FBQ0E7QUFEQTs7QUFFQTs7QUFHQTtBQUNBO0FBRUE7QUFKQTtBQUlBOztBQVBBO0FBU0E7QUFUQTtBQUNBO0FBWUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7O0FBSEE7QUFXQTtBQVhBO0FBQ0E7QUFXQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUkE7QUFRQTs7QUFaQTtBQWVBO0FBZkE7QUFDQTtBQWdCQTtBQUFBOztBQUZBO0FBSUE7QUFKQTtBQUNBO0FBS0E7O0FBRUE7QUFBQTtBQURBOztBQUhBO0FBT0E7QUFQQTtBQUNBO0FBY0E7Ozs7Ozs7Ozs7OztBQWxYQTtBQUNBO0FBREE7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQVFBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBVkE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQVhBO0FBT0E7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFHQTtBQUNBO0FBWEE7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBY0E7QUFDQTtBQWZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTs7QUFnQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==