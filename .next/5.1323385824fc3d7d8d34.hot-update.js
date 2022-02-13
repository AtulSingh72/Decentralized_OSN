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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xMzIzMzg1ODI0ZmMzZDdkOGQzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/N2IxNDI3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9zdEZhY3RvcnkgZnJvbSBcIi4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcbmltcG9ydCBQb3N0Q29udHJhY3QgZnJvbSBcIi4uL2V0aGVyZXVtL2J1aWxkL1Bvc3QuanNvblwiO1xuaW1wb3J0IGlwZnMgZnJvbSBcIi4uL2V0aGVyZXVtL2lwZnNcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XG5cbmxldCBhY2NvdW50cyA9IFtdO1xuXG5jbGFzcyBQb3N0SW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cG9zdHM6IHRoaXMucHJvcHMucG9zdHMsXG5cdFx0XHRidWZmZXI6IG51bGwsXG5cdFx0fTtcblx0XHR0aGlzLmNhcHR1cmVGaWxlID0gdGhpcy5jYXB0dXJlRmlsZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25TdWJtaXQgPSB0aGlzLm9uU3VibWl0LmJpbmQodGhpcyk7XG5cdH1cblxuXHRhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuXHRcdGNvbnN0IHBvc3RzID0gYXdhaXQgUG9zdEZhY3RvcnkubWV0aG9kcy5nZXRQb3N0cygpLmNhbGwoKTtcblx0XHRsZXQgbmV3X3Bvc3RzID0gYXdhaXQgKGFzeW5jIGZ1bmN0aW9uIChwb3N0cykge1xuXHRcdFx0bGV0IG5ld19wb3N0cyA9IFtdO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb3N0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBQb3N0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxuXHRcdFx0XHRcdEpTT04ucGFyc2UoUG9zdENvbnRyYWN0LmludGVyZmFjZSksXG5cdFx0XHRcdFx0cG9zdHNbaV1cblx0XHRcdFx0KTtcblx0XHRcdFx0Y29uc3QgY3VycmVudFBvc3QgPSB7XG5cdFx0XHRcdFx0aW1hZ2VVcmw6IGF3YWl0IFBvc3QubWV0aG9kcy5pbWFnZV9oYXNoKCkuY2FsbCgpLFxuXHRcdFx0XHRcdGF1dGhvcjogYXdhaXQgUG9zdC5tZXRob2RzLmF1dGhvcigpLmNhbGwoKSxcblx0XHRcdFx0fTtcblx0XHRcdFx0bmV3X3Bvc3RzLnB1c2goY3VycmVudFBvc3QpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5ld19wb3N0cztcblx0XHR9KShwb3N0cyk7XG5cdFx0Y29uc29sZS5sb2cobmV3X3Bvc3RzWzBdKTtcblx0XHRyZXR1cm4geyBwb3N0czogbmV3X3Bvc3RzIH07XG5cdH1cblxuXHRjYXB0dXJlRmlsZShldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcblx0XHRjb25zdCByZWFkZXIgPSBuZXcgd2luZG93LkZpbGVSZWFkZXIoKTtcblx0XHRyZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG5cdFx0cmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBidWZmZXI6IEJ1ZmZlcihyZWFkZXIucmVzdWx0KSB9KTtcblx0XHRcdGNvbnNvbGUubG9nKFwiYnVmZmVyXCIsIHRoaXMuc3RhdGUuYnVmZmVyKTtcblx0XHR9O1xuXHR9XG5cblx0b25TdWJtaXQoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlwZnMuZmlsZXMuYWRkKHRoaXMuc3RhdGUuYnVmZmVyLCBhc3luYyAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBQb3N0RmFjdG9yeS5tZXRob2RzXG5cdFx0XHRcdC5jcmVhdGVQb3N0KHJlc3VsdFswXS5oYXNoKVxuXHRcdFx0XHQuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e3RoaXMuY2FwdHVyZUZpbGV9IC8+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMucG9zdHMubWFwKChwb3N0KSA9PiAoXG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0c3JjPXtgaHR0cHM6Ly9pcGZzLmlvL2lwZnMvJHtwb3N0LmltYWdlVXJsfWB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxoMz5VcGxvYWRlcjoge3Bvc3QuYXV0aG9yfTwvaDM+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RJbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBSEE7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFTQTs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBOztBQURBO0FBR0E7QUFIQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBTUE7Ozs7Ozs7Ozs7OztBQS9EQTtBQUNBO0FBREE7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQVFBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBVkE7QUFPQTtBQVBBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBVkE7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBYUE7QUFDQTtBQWRBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=