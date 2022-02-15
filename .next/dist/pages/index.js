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
			buffer: null
		};
		_this.captureFile = _this.captureFile.bind(_this);
		_this.onSubmit = _this.onSubmit.bind(_this);
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
		key: "render",
		value: function render() {
			return _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 88
				}
			}, _react2.default.createElement("form", { onSubmit: this.onSubmit, __source: {
					fileName: _jsxFileName,
					lineNumber: 89
				}
			}, _react2.default.createElement("input", { type: "file", onChange: this.captureFile, __source: {
					fileName: _jsxFileName,
					lineNumber: 90
				}
			}), _react2.default.createElement("input", { type: "submit", __source: {
					fileName: _jsxFileName,
					lineNumber: 91
				}
			})), _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 93
				}
			}, this.state.posts.map(function (post) {
				return _react2.default.createElement("div", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 95
					}
				}, _react2.default.createElement("img", {
					src: "https://ipfs.io/ipfs/" + post.imageUrl,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 96
					}
				}), _react2.default.createElement("h3", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 99
					}
				}, "Uploader: ", post.author));
			})));
		}
	}], [{
		key: "getInitialProps",
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
				var posts, new_posts;
				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								_context6.next = 2;
								return _factory2.default.methods.getPosts().call();

							case 2:
								posts = _context6.sent;
								_context6.next = 5;
								return function () {
									var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(posts) {
										var new_posts, i, Post, currentPost;
										return _regenerator2.default.wrap(function _callee5$(_context5) {
											while (1) {
												switch (_context5.prev = _context5.next) {
													case 0:
														new_posts = [];
														i = 0;

													case 2:
														if (!(i < posts.length)) {
															_context5.next = 15;
															break;
														}

														Post = new _web2.default.eth.Contract(JSON.parse(_Post2.default.interface), posts[i]);
														_context5.next = 6;
														return Post.methods.image_hash().call();

													case 6:
														_context5.t0 = _context5.sent;
														_context5.next = 9;
														return Post.methods.author().call();

													case 9:
														_context5.t1 = _context5.sent;
														currentPost = {
															imageUrl: _context5.t0,
															author: _context5.t1
														};

														new_posts.push(currentPost);

													case 12:
														i++;
														_context5.next = 2;
														break;

													case 15:
														return _context5.abrupt("return", new_posts);

													case 16:
													case "end":
														return _context5.stop();
												}
											}
										}, _callee5, this);
									}));

									return function (_x5) {
										return _ref6.apply(this, arguments);
									};
								}()(posts);

							case 5:
								new_posts = _context6.sent;
								return _context6.abrupt("return", { posts: new_posts });

							case 7:
							case "end":
								return _context6.stop();
						}
					}
				}, _callee6, this);
			}));

			function getInitialProps() {
				return _ref5.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return PostIndex;
}(_react.Component);

exports.default = PostIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUG9zdEZhY3RvcnkiLCJQb3N0Q29udHJhY3QiLCJpcGZzIiwid2ViMyIsImFjY291bnRzIiwiUG9zdEluZGV4IiwicHJvcHMiLCJzdGF0ZSIsInBvc3RzIiwiYnVmZmVyIiwiY2FwdHVyZUZpbGUiLCJiaW5kIiwib25TdWJtaXQiLCJldGgiLCJnZXRBY2NvdW50cyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJ3aW5kb3ciLCJGaWxlUmVhZGVyIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJvbmxvYWRlbmQiLCJzZXRTdGF0ZSIsIkJ1ZmZlciIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJlcnJvciIsIm1ldGhvZHMiLCJjcmVhdGVQb3N0IiwiaGFzaCIsInNlbmQiLCJmcm9tIiwiZ2V0UG9zdHMiLCJjYWxsIiwibmV3X3Bvc3RzIiwiaSIsImxlbmd0aCIsIlBvc3QiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsImltYWdlX2hhc2giLCJhdXRob3IiLCJjdXJyZW50UG9zdCIsImltYWdlVXJsIiwicHVzaCIsIm1hcCIsInBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7Ozs7OztBQUVqQixJQUFJLFdBQUosQUFBZTs7SUFFVCxBO29DQUNMOztvQkFBQSxBQUFZLE9BQU87c0NBQUE7OzBJQUFBLEFBQ1osQUFDTjs7UUFBQSxBQUFLO1VBQ0csTUFBQSxBQUFLLE1BREEsQUFDTSxBQUNsQjtXQUZELEFBQWEsQUFFSixBQUVUO0FBSmEsQUFDWjtRQUdELEFBQUssY0FB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QUFQLEFBQVk7ZUFBWjtpQkFIRixBQUNDLEFBRUMsQUFFRDtBQUZDO3dCQUVELGNBQUE7O2VBQUE7aUJBQUEsQUFDRTtBQURGO0FBQUEsV0FDRSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLElBQUksVUFBQSxBQUFDLE1BQUQ7MkJBQ3JCLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0M7QUFERDtBQUFBLEtBQUE7b0NBRStCLEtBRDlCLEFBQ21DOztnQkFEbkM7a0JBREQsQUFDQyxBQUdBO0FBSEE7QUFDQyx3QkFFRCxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsT0FBZSxtQkFMSyxBQUNyQixBQUlDLEFBQW9CO0FBWnpCLEFBQ0MsQUFLQyxBQUNFLEFBV0o7Ozs7Ozs7Ozs7OztlQWhGb0Isa0JBQUEsQUFBWSxRQUFaLEFBQW9CLFdBQXBCLEEsQUFBK0I7O1lBQTdDO0E7OzJCQUNnQjs4RkFBQyxrQkFBQSxBQUFnQixPQUFoQjtrQ0FBQTswRUFBQTtxQkFBQTsrQ0FBQTtrQkFDbEI7QUFEa0IsMEJBQUEsQUFDTixBQUNQO0FBRmEsa0JBQUEsQUFFVDs7a0JBRlM7b0JBRU4sSUFBSSxNQUZFLEFBRUksU0FGSjtnQ0FBQTtBQUFBO0FBR2Y7O0FBSGUscUJBR1IsSUFBSSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQ3pCLEtBQUEsQUFBSyxNQUFNLGVBREMsQUFDWixBQUF3QixZQUN4QixNQUxvQixBQUdSLEFBRVosQUFBTTsrQkFMYztxQkFRSixLQUFBLEFBQUssUUFBTCxBQUFhLGFBUlQsQUFRSixBQUEwQjs7a0JBUnRCO3VDQUFBOytCQUFBO3FCQVNOLEtBQUEsQUFBSyxRQUFMLEFBQWEsU0FUUCxBQVNOLEFBQXNCOztrQkFUaEI7dUNBT2Y7QUFQZTtBQUFBLG1DQVNwQjtBQVRvQixpQ0FBQSxBQVdyQjtBQUhDOzt3QkFHRCxBQUFVLEtBWFcsQUFXckIsQUFBZTs7a0JBVGtCO0FBRlo7K0JBQUE7QUFBQTs7a0JBQUE7Z0RBQUEsQUFhZjs7a0JBYmU7a0JBQUE7K0JBQUE7O0FBQUE7dUJBQUE7QUFBRDs7K0JBQUE7bUNBQUE7QUFBQTtTQUFBLEdBY25CLEEsQUFkbUI7O1lBQWxCO0E7MENBZUcsRUFBRSxPQUFGLEEsQUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWhDTSxBLEFBbUd4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9hdHVsc2luZ2gvUHJvamVjdHMvRGVjZW50cmFsaXplZF9PU04ifQ==