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
			zoomed: null
		};
		_this.captureFile = _this.captureFile.bind(_this);
		_this.onSubmit = _this.onSubmit.bind(_this);
		_this.imageZoom = _this.imageZoom.bind(_this);
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

							case 3:
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

								_ipfs2.default.files.add(this.state.buffer, function () {
									var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(error, result) {
										var posts, new_posts;
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
														return _factory2.default.methods.createPost(result[0].hash).send({ from: accounts[0] });

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
																					_context2.next = 15;
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
																				currentPost = {
																					imageUrl: _context2.t0,
																					author: _context2.t1
																				};

																				new_posts.push(currentPost);

																			case 12:
																				i++;
																				_context2.next = 2;
																				break;

																			case 15:
																				return _context2.abrupt("return", new_posts);

																			case 16:
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

														_this3.setState({ posts: new_posts });

													case 12:
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
		key: "render",
		value: function render() {
			var _this4 = this;

			return _react2.default.createElement("div", { className: "container", __source: {
					fileName: _jsxFileName,
					lineNumber: 101
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 102
				}
			}, _react2.default.createElement("title", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 103
				}
			}, "DOSN"), _react2.default.createElement("link", {
				href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
				rel: "stylesheet",
				integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
				crossorigin: "anonymous",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 104
				}
			}), _react2.default.createElement("script", {
				src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
				integrity: "sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p",
				crossorigin: "anonymous",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 110
				}
			}), _react2.default.createElement("script", {
				src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",
				integrity: "sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF",
				crossorigin: "anonymous",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 115
				}
			}), _react2.default.createElement("script", { src: "https://cdn.jsdelivr.net/npm/jdenticon@2.2.0", __source: {
					fileName: _jsxFileName,
					lineNumber: 120
				}
			})), _react2.default.createElement("form", {
				onSubmit: this.onSubmit,
				style: { margin: "20px", textAlign: "center" },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 122
				}
			}, _react2.default.createElement("input", { type: "file", onChange: this.captureFile, __source: {
					fileName: _jsxFileName,
					lineNumber: 126
				}
			}), _react2.default.createElement("button", { type: "submit", className: "btn btn-primary", __source: {
					fileName: _jsxFileName,
					lineNumber: 127
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
					lineNumber: 132
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
					lineNumber: 147
				}
			})), _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 158
				}
			}, this.state.posts.map(function (post, index) {
				return _react2.default.createElement("div", {
					className: "card",
					style: {
						margin: "20px auto 20px",
						width: "650px",
						height: "650px"
					},
					key: index,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 160
					}
				}, _react2.default.createElement("h6", { className: "card-header", __source: {
						fileName: _jsxFileName,
						lineNumber: 169
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
						lineNumber: 170
					}
				}), post.author), _react2.default.createElement("div", {
					className: "card-img-top img-fluid",
					style: {
						width: "100%",
						height: "500px",
						overflow: "hidden",
						display: "flex"
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 181
					}
				}, _react2.default.createElement("img", {
					src: "https://ipfs.io/ipfs/" + post.imageUrl,
					className: "card-img-top img-fluid",
					style: {
						objectFit: "contain",
						cursor: "zoom-in"
					},
					onClick: _this4.imageZoom,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 190
					}
				})), _react2.default.createElement("hr", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 200
					}
				}));
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
															_context6.next = 15;
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
														currentPost = {
															imageUrl: _context6.t0,
															author: _context6.t1
														};

														new_posts.push(currentPost);

													case 12:
														i++;
														_context6.next = 2;
														break;

													case 15:
														return _context6.abrupt("return", new_posts);

													case 16:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUG9zdEZhY3RvcnkiLCJQb3N0Q29udHJhY3QiLCJpcGZzIiwid2ViMyIsIkhlYWQiLCJhY2NvdW50cyIsIlBvc3RJbmRleCIsInByb3BzIiwic3RhdGUiLCJwb3N0cyIsImJ1ZmZlciIsInpvb21lZCIsImNhcHR1cmVGaWxlIiwiYmluZCIsIm9uU3VibWl0IiwiaW1hZ2Vab29tIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwid2luZG93IiwiRmlsZVJlYWRlciIsInJlYWRBc0FycmF5QnVmZmVyIiwib25sb2FkZW5kIiwic2V0U3RhdGUiLCJCdWZmZXIiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiYWRkIiwiZXJyb3IiLCJtZXRob2RzIiwiY3JlYXRlUG9zdCIsImhhc2giLCJzZW5kIiwiZnJvbSIsImdldFBvc3RzIiwiY2FsbCIsIm5ld19wb3N0cyIsImkiLCJsZW5ndGgiLCJQb3N0IiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiLCJpbWFnZV9oYXNoIiwiYXV0aG9yIiwiY3VycmVudFBvc3QiLCJpbWFnZVVybCIsInB1c2giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRBdHRyaWJ1dGUiLCJtYXJnaW4iLCJ0ZXh0QWxpZ24iLCJwb3NpdGlvbiIsInpJbmRleCIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImxlZnQiLCJ0b3AiLCJiYWNrZ3JvdW5kIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJjdXJzb3IiLCJtYXAiLCJwb3N0IiwiaW5kZXgiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsIm9iamVjdEZpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFERDs7bURBRThDLEtBQTVDLEFBQWlELFNBRGxELEFBRUM7O2NBQU8sQUFDRSxBQUNSO29CQUZNLEFBRVEsQUFDZDtrQkFMRixBQUVRLEFBR00sQUFFYjtBQUxPLEFBQ047VUFIRixBQU9NOztnQkFQTjtrQkFERCxBQUNDLEFBU0M7QUFURDtBQUNDLGFBWEgsQUFTQyxBQVVPLEFBRVAseUJBQUEsY0FBQTtnQkFBQSxBQUNXLEFBQ1Y7O2FBQU8sQUFDQyxBQUNQO2NBRk0sQUFFRSxBQUNSO2dCQUhNLEFBR0ksQUFDVjtlQU5GLEFBRVEsQUFJRztBQUpILEFBQ047O2dCQUhGO2tCQUFBLEFBU0M7QUFURDtBQUNDO29DQVM4QixLQUQ5QixBQUNtQyxBQUNsQztnQkFGRCxBQUVXLEFBQ1Y7O2lCQUFPLEFBQ0ssQUFDWDtjQUxGLEFBR1EsQUFFRSxBQUVUO0FBSk8sQUFDTjtjQUdRLE9BUFYsQUFPZTs7Z0JBUGY7a0JBOUJGLEFBcUJDLEFBU0MsQUFVRDtBQVZDO0FBQ0M7O2dCQVNGO2tCQXpDb0IsQUFDckIsQUF3Q0M7QUFBQTtBQUFBO0FBcEdMLEFBQ0MsQUF5REMsQUFDRSxBQStDSjs7Ozs7Ozs7Ozs7O2VBbExvQixrQkFBQSxBQUFZLFFBQVosQUFBb0IsV0FBcEIsQUFBK0IsQTs7WUFBN0M7QTs7MkJBQ2dCOzhGQUFDLGtCQUFBLEFBQWdCLE9BQWhCO2tDQUFBOzBFQUFBO3FCQUFBOytDQUFBO2tCQUNsQjtBQURrQiwwQkFBQSxBQUNOLEFBQ1A7QUFGYSxrQkFBQSxBQUVUOztrQkFGUztvQkFFTixJQUFJLE1BRkUsQUFFSSxTQUZKO2dDQUFBO0FBQUE7QUFHZjs7QUFIZSxxQkFHUixJQUFJLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDekIsS0FBQSxBQUFLLE1BQU0sZUFEQyxBQUNaLEFBQXdCLFlBQ3hCLE1BTG9CLEFBR1IsQUFFWixBQUFNOytCQUxjO3FCQVFKLEtBQUEsQUFBSyxRQUFMLEFBQWEsYUFSVCxBQVFKLEFBQTBCOztrQkFSdEI7dUNBQUE7K0JBQUE7cUJBU04sS0FBQSxBQUFLLFFBQUwsQUFBYSxTQVRQLEFBU04sQUFBc0I7O2tCQVRoQjt1Q0FPZjtBQVBlO0FBQUEsbUNBU3BCO0FBVG9CLGlDQUFBLEFBV3JCO0FBSEM7O3dCQUdELEFBQVUsS0FYVyxBQVdyQixBQUFlOztrQkFUa0I7QUFGWjsrQkFBQTtBQUFBOztrQkFBQTtnREFBQSxBQWFmOztrQkFiZTtrQkFBQTsrQkFBQTs7QUFBQTt1QkFBQTtBQUFEOzsrQkFBQTttQ0FBQTtBQUFBO1NBQUEsR0FjbkIsQSxBQWRtQjs7WUFBbEI7QTswQ0FlRyxFQUFFLE9BQUYsQSxBQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbENNLEEsQUF1TXhCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2F0dWxzaW5naC9Qcm9qZWN0cy9EZWNlbnRyYWxpemVkX09TTiJ9