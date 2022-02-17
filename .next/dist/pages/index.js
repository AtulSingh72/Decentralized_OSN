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