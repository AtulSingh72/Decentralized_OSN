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
		value: function onSubmit(event) {
			var _this3 = this;

			event.preventDefault();
			_ipfs2.default.files.add(this.state.buffer, function () {
				var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(error, result) {
					return _regenerator2.default.wrap(function _callee2$(_context2) {
						while (1) {
							switch (_context2.prev = _context2.next) {
								case 0:
									if (!error) {
										_context2.next = 3;
										break;
									}

									console.error(error);
									return _context2.abrupt("return");

								case 3:
									_context2.next = 5;
									return _factory2.default.methods.createPost(result[0].hash).send({ from: accounts[0] });

								case 5:
								case "end":
									return _context2.stop();
							}
						}
					}, _callee2, _this3);
				}));

				return function (_x, _x2) {
					return _ref2.apply(this, arguments);
				};
			}());
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			}, _react2.default.createElement("form", { onSubmit: this.onSubmit, __source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, _react2.default.createElement("input", { type: "file", onChange: this.captureFile, __source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}), _react2.default.createElement("input", { type: "submit", __source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			})), _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 76
				}
			}, this.props.posts.map(function (post) {
				return _react2.default.createElement("div", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 78
					}
				}, _react2.default.createElement("img", {
					src: "https://ipfs.io/ipfs/" + post.imageUrl,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 79
					}
				}), _react2.default.createElement("h3", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 82
					}
				}, "Uploader: ", post.author));
			})));
		}
	}], [{
		key: "getInitialProps",
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
				var posts, new_posts;
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_context4.next = 2;
								return _factory2.default.methods.getPosts().call();

							case 2:
								posts = _context4.sent;
								_context4.next = 5;
								return function () {
									var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(posts) {
										var new_posts, i, Post, currentPost;
										return _regenerator2.default.wrap(function _callee3$(_context3) {
											while (1) {
												switch (_context3.prev = _context3.next) {
													case 0:
														new_posts = [];
														i = 0;

													case 2:
														if (!(i < posts.length)) {
															_context3.next = 15;
															break;
														}

														Post = new _web2.default.eth.Contract(JSON.parse(_Post2.default.interface), posts[i]);
														_context3.next = 6;
														return Post.methods.image_hash().call();

													case 6:
														_context3.t0 = _context3.sent;
														_context3.next = 9;
														return Post.methods.author().call();

													case 9:
														_context3.t1 = _context3.sent;
														currentPost = {
															imageUrl: _context3.t0,
															author: _context3.t1
														};

														new_posts.push(currentPost);

													case 12:
														i++;
														_context3.next = 2;
														break;

													case 15:
														return _context3.abrupt("return", new_posts);

													case 16:
													case "end":
														return _context3.stop();
												}
											}
										}, _callee3, this);
									}));

									return function (_x3) {
										return _ref4.apply(this, arguments);
									};
								}()(posts);

							case 5:
								new_posts = _context4.sent;

								console.log(new_posts[0]);
								return _context4.abrupt("return", { posts: new_posts });

							case 8:
							case "end":
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function getInitialProps() {
				return _ref3.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return PostIndex;
}(_react.Component);

exports.default = PostIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUG9zdEZhY3RvcnkiLCJQb3N0Q29udHJhY3QiLCJpcGZzIiwid2ViMyIsImFjY291bnRzIiwiUG9zdEluZGV4IiwicHJvcHMiLCJzdGF0ZSIsInBvc3RzIiwiYnVmZmVyIiwiY2FwdHVyZUZpbGUiLCJiaW5kIiwib25TdWJtaXQiLCJldGgiLCJnZXRBY2NvdW50cyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJ3aW5kb3ciLCJGaWxlUmVhZGVyIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJvbmxvYWRlbmQiLCJzZXRTdGF0ZSIsIkJ1ZmZlciIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJlcnJvciIsIm1ldGhvZHMiLCJjcmVhdGVQb3N0IiwiaGFzaCIsInNlbmQiLCJmcm9tIiwibWFwIiwicG9zdCIsImltYWdlVXJsIiwiYXV0aG9yIiwiZ2V0UG9zdHMiLCJjYWxsIiwibmV3X3Bvc3RzIiwiaSIsImxlbmd0aCIsIlBvc3QiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsImltYWdlX2hhc2giLCJjdXJyZW50UG9zdCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7Ozs7OztBQUVqQixJQUFJLFdBQUosQUFBZTs7SSxBQUVUO29DQUNMOztvQkFBQSxBQUFZLE9BQU87c0NBQUE7OzBJQUFBLEFBQ1osQUFDTjs7UUFBQSxBQUFLO1VBQ0csTUFBQSxBQUFLLE1BREEsQUFDTSxBQUNsQjtXQUZELEFBQWEsQUFFSixBQUVUO0FBSmEsQUFDWjtRQUdELEFBQUssY0FBYyxNQUFBLEFBQUssWUFBTCxBQUFpQixLQUFwQyxBQUNBO1FBQUEsQUFBSyxXQUFXLE1BQUEsQUFBSyxTQUFMLEFBQWMsS0FQWixBQU9sQjtTQUNBOzs7Ozs7Ozs7Ozs7ZUFHaUIsY0FBQSxBQUFLLElBQUwsQUFBUyxBOztZQUExQjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBd0JXLEEsT0FBTztnQkFDbEI7O1NBQUEsQUFBTSxBQUNOO09BQU0sT0FBTyxNQUFBLEFBQU0sT0FBTixBQUFhLE1BQTFCLEFBQWEsQUFBbUIsQUFDaEM7T0FBTSxTQUFTLElBQUksT0FBbkIsQUFBZSxBQUFXLEFBQzFCO1VBQUEsQUFBTyxrQkFBUCxBQUF5QixBQUN6QjtVQUFBLEFBQU8sWUFBWSxZQUFNLEFBQ3hCO1dBQUEsQUFBSyxTQUFTLEVBQUUsUUFBUSxPQUFPLE9BQS9CLEFBQWMsQUFBVSxBQUFjLEFBQ3RDO1lBQUEsQUFBUSxJQUFSLEFBQVksVUFBVSxPQUFBLEFBQUssTUFBM0IsQUFBaUMsQUFDakM7QUFIRCxBQUlBOzs7OzJCLEFBRVEsT0FBTztnQkFDZjs7U0FBQSxBQUFNLEFBQ047a0JBQUEsQUFBSyxNQUFMLEFBQVcsSUFBSSxLQUFBLEFBQUssTUFBcEIsQUFBMEIsb0JBQTFCO3lGQUFrQyxrQkFBQSxBQUFPLE9BQVAsQUFBYyxRQUFkO3FFQUFBO2dCQUFBOzBDQUFBO2FBQUE7Y0FBQSxBQUM3QixPQUQ2QjsyQkFBQTtBQUFBO0FBRWhDOztpQkFBQSxBQUFRLE1BRndCLEFBRWhDLEFBQWM7aUNBRmtCOzthQUFBOzBCQUFBO2dCQUszQixrQkFBQSxBQUFZLFFBQVosQUFDSixXQUFXLE9BQUEsQUFBTyxHQURkLEFBQ2lCLE1BRGpCLEFBRUosS0FBSyxFQUFFLE1BQU0sU0FQa0IsQUFLM0IsQUFFQyxBQUFRLEFBQVM7O2FBUFM7YUFBQTswQkFBQTs7QUFBQTtrQkFBQTtBQUFsQzs7OEJBQUE7OEJBQUE7QUFBQTtBQVNBOzs7OzJCQUVRLEFBQ1I7MEJBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUEsVUFBTSxVQUFVLEtBQWhCLEFBQXFCO2VBQXJCO2lCQUFBLEFBQ0M7QUFERDsrQ0FDUSxNQUFQLEFBQVksUUFBTyxVQUFVLEtBQTdCLEFBQWtDO2VBQWxDO2lCQURELEFBQ0MsQUFDQTtBQURBO2dEQUNPLE1BQVAsQUFBWTtlQUFaO2lCQUhGLEFBQ0MsQUFFQyxBQUVEO0FBRkM7d0JBRUQsY0FBQTs7ZUFBQTtpQkFBQSxBQUNFO0FBREY7QUFBQSxXQUNFLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsSUFBSSxVQUFBLEFBQUMsTUFBRDsyQkFDckIsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDQztBQUREO0FBQUEsS0FBQTtvQ0FFK0IsS0FEOUIsQUFDbUM7O2dCQURuQztrQkFERCxBQUNDLEFBR0E7QUFIQTtBQUNDLHdCQUVELGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxPQUFlLG1CQUxLLEFBQ3JCLEFBSUMsQUFBb0I7QUFaekIsQUFDQyxBQUtDLEFBQ0UsQUFXSjs7Ozs7Ozs7Ozs7O2VBL0RvQixrQkFBQSxBQUFZLFFBQVosQUFBb0IsV0FBcEIsQUFBK0IsQTs7WUFBN0M7QTs7MkJBQ2dCOzhGQUFDLGtCQUFBLEFBQWdCLE9BQWhCO2tDQUFBOzBFQUFBO3FCQUFBOytDQUFBO2tCQUNsQjtBQURrQiwwQkFBQSxBQUNOLEFBQ1A7QUFGYSxrQkFBQSxBQUVUOztrQkFGUztvQkFFTixJQUFJLE1BRkUsQUFFSSxTQUZKO2dDQUFBO0FBQUE7QUFHZjs7QUFIZSxxQkFHUixJQUFJLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDekIsS0FBQSxBQUFLLE1BQU0sZUFEQyxBQUNaLEFBQXdCLFlBQ3hCLE1BTG9CLEFBR1IsQUFFWixBQUFNOytCQUxjO3FCQVFKLEtBQUEsQUFBSyxRQUFMLEFBQWEsYUFSVCxBQVFKLEFBQTBCOztrQkFSdEI7dUNBQUE7K0JBQUE7cUJBU04sS0FBQSxBQUFLLFFBQUwsQUFBYSxTQVRQLEFBU04sQUFBc0I7O2tCQVRoQjt1Q0FPZjtBQVBlO0FBQUEsbUNBU3BCO0FBVG9CLGlDQUFBLEFBV3JCO0FBSEM7O3dCQUdELEFBQVUsS0FYVyxBQVdyQixBQUFlOztrQkFUa0I7QUFGWjsrQkFBQTtBQUFBOztrQkFBQTtnREFBQSxBQWFmOztrQkFiZTtrQkFBQTsrQkFBQTs7QUFBQTt1QkFBQTtBQUFEOzsrQkFBQTttQ0FBQTtBQUFBO1NBQUEsR0FBQSxBLEFBY25COztZQWRDO0EsOEJBZUo7O2dCQUFBLEFBQVEsSUFBSSxVQUFaLEFBQVksQUFBVTswQ0FDZixFQUFFLE9BQUYsQSxBQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBakNNLEEsQUFrRnhCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2F0dWxzaW5naC9Qcm9qZWN0cy9EZWNlbnRyYWxpemVkX09TTiJ9