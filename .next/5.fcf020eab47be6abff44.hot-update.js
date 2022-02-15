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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mY2YwMjBlYWI0N2JlNmFiZmY0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZGU4OTc1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9zdEZhY3RvcnkgZnJvbSBcIi4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcbmltcG9ydCBQb3N0Q29udHJhY3QgZnJvbSBcIi4uL2V0aGVyZXVtL2J1aWxkL1Bvc3QuanNvblwiO1xuaW1wb3J0IGlwZnMgZnJvbSBcIi4uL2V0aGVyZXVtL2lwZnNcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XG5cbmxldCBhY2NvdW50cyA9IFtdO1xuXG5jbGFzcyBQb3N0SW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cG9zdHM6IHRoaXMucHJvcHMucG9zdHMsXG5cdFx0XHRidWZmZXI6IG51bGwsXG5cdFx0fTtcblx0XHR0aGlzLmNhcHR1cmVGaWxlID0gdGhpcy5jYXB0dXJlRmlsZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25TdWJtaXQgPSB0aGlzLm9uU3VibWl0LmJpbmQodGhpcyk7XG5cdH1cblxuXHRhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuXHRcdGNvbnN0IHBvc3RzID0gYXdhaXQgUG9zdEZhY3RvcnkubWV0aG9kcy5nZXRQb3N0cygpLmNhbGwoKTtcblx0XHRsZXQgbmV3X3Bvc3RzID0gYXdhaXQgKGFzeW5jIGZ1bmN0aW9uIChwb3N0cykge1xuXHRcdFx0bGV0IG5ld19wb3N0cyA9IFtdO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb3N0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBQb3N0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxuXHRcdFx0XHRcdEpTT04ucGFyc2UoUG9zdENvbnRyYWN0LmludGVyZmFjZSksXG5cdFx0XHRcdFx0cG9zdHNbaV1cblx0XHRcdFx0KTtcblx0XHRcdFx0Y29uc3QgY3VycmVudFBvc3QgPSB7XG5cdFx0XHRcdFx0aW1hZ2VVcmw6IGF3YWl0IFBvc3QubWV0aG9kcy5pbWFnZV9oYXNoKCkuY2FsbCgpLFxuXHRcdFx0XHRcdGF1dGhvcjogYXdhaXQgUG9zdC5tZXRob2RzLmF1dGhvcigpLmNhbGwoKSxcblx0XHRcdFx0fTtcblx0XHRcdFx0bmV3X3Bvc3RzLnB1c2goY3VycmVudFBvc3QpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5ld19wb3N0cztcblx0XHR9KShwb3N0cyk7XG5cdFx0cmV0dXJuIHsgcG9zdHM6IG5ld19wb3N0cyB9O1xuXHR9XG5cblx0Y2FwdHVyZUZpbGUoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG5cdFx0Y29uc3QgcmVhZGVyID0gbmV3IHdpbmRvdy5GaWxlUmVhZGVyKCk7XG5cdFx0cmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuXHRcdHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgYnVmZmVyOiBCdWZmZXIocmVhZGVyLnJlc3VsdCkgfSk7XG5cdFx0XHRjb25zb2xlLmxvZyhcImJ1ZmZlclwiLCB0aGlzLnN0YXRlLmJ1ZmZlcik7XG5cdFx0fTtcblx0fVxuXG5cdGFzeW5jIG9uU3VibWl0KGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cdFx0aXBmcy5maWxlcy5hZGQodGhpcy5zdGF0ZS5idWZmZXIsIGFzeW5jIChlcnJvciwgcmVzdWx0KSA9PiB7XG5cdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGF3YWl0IFBvc3RGYWN0b3J5Lm1ldGhvZHNcblx0XHRcdFx0LmNyZWF0ZVBvc3QocmVzdWx0WzBdLmhhc2gpXG5cdFx0XHRcdC5zZW5kKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XG5cdFx0XHRjb25zdCBwb3N0cyA9IGF3YWl0IFBvc3RGYWN0b3J5Lm1ldGhvZHMuZ2V0UG9zdHMoKS5jYWxsKCk7XG5cdFx0XHRsZXQgbmV3X3Bvc3RzID0gYXdhaXQgKGFzeW5jIGZ1bmN0aW9uIChwb3N0cykge1xuXHRcdFx0XHRsZXQgbmV3X3Bvc3RzID0gW107XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcG9zdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRjb25zdCBQb3N0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxuXHRcdFx0XHRcdFx0SlNPTi5wYXJzZShQb3N0Q29udHJhY3QuaW50ZXJmYWNlKSxcblx0XHRcdFx0XHRcdHBvc3RzW2ldXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRjb25zdCBjdXJyZW50UG9zdCA9IHtcblx0XHRcdFx0XHRcdGltYWdlVXJsOiBhd2FpdCBQb3N0Lm1ldGhvZHMuaW1hZ2VfaGFzaCgpLmNhbGwoKSxcblx0XHRcdFx0XHRcdGF1dGhvcjogYXdhaXQgUG9zdC5tZXRob2RzLmF1dGhvcigpLmNhbGwoKSxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdG5ld19wb3N0cy5wdXNoKGN1cnJlbnRQb3N0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbmV3X3Bvc3RzO1xuXHRcdFx0fSkocG9zdHMpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHBvc3RzOiBuZXdfcG9zdHMgfSk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17dGhpcy5jYXB0dXJlRmlsZX0gLz5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5wb3N0cy5tYXAoKHBvc3QpID0+IChcblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRzcmM9e2BodHRwczovL2lwZnMuaW8vaXBmcy8ke3Bvc3QuaW1hZ2VVcmx9YH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PGgzPlVwbG9hZGVyOiB7cG9zdC5hdXRob3J9PC9oMz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFIQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FBR0E7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQ0E7QUFOQTtBQUFBO0FBUUE7QUFDQTtBQURBO0FBUkE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQVFBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBVkE7QUFPQTtBQVBBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBVkE7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBYUE7QUFDQTtBQWRBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVRBO0FBQ0E7QUF1QkE7QUFDQTtBQXpCQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7O0FBREE7QUFHQTtBQUhBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFNQTs7Ozs7Ozs7Ozs7O0FBaEZBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7QUFKQTtBQUFBO0FBUUE7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFWQTtBQU9BO0FBUEE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFWQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFhQTtBQUNBO0FBZEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBOztBQWVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=