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
			matamask: true,
			is_donate: false,
			min_tip: 0,
			value: 0,
			tip_post_key: 0,
			donating: false,
			disable_transact_okay: true
		};
		_this.captureFile = _this.captureFile.bind(_this);
		_this.onSubmit = _this.onSubmit.bind(_this);
		_this.imageZoom = _this.imageZoom.bind(_this);
		_this.readContent = _this.readContent.bind(_this);
		_this.takeback = _this.takeback.bind(_this);
		_this.transact = _this.transact.bind(_this);
		_this.donate = _this.donate.bind(_this);
		_this.isdonatebuttonon = _this.isdonatebuttonon.bind(_this);
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
		key: "isdonatebuttonon",
		value: function isdonatebuttonon(event) {
			event.preventDefault();
			var new_value = true;
			if (event.target.value >= this.state.min_tip) {
				new_value = false;
			}
			this.setState({
				value: event.target.value,
				disable_transact_okay: new_value
			});
		}
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
			this.setState({ metamask: true, is_donate: false });
		}
	}, {
		key: "donate",
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
				var tip;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								event.persist();
								event.preventDefault();
								console.log(event.target);
								_context2.next = 5;
								return _factory2.default.methods.min_contribution().call();

							case 5:
								tip = _context2.sent;

								tip = _web.web3.utils.fromWei(tip, "ether");
								this.setState({
									is_donate: true,
									min_tip: tip,
									tip_post_key: event.target.getAttribute("data-index")
								});

							case 8:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function donate(_x) {
				return _ref2.apply(this, arguments);
			}

			return donate;
		}()
	}, {
		key: "transact",
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
				var index, address, post;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								event.persist();
								event.preventDefault();
								_context3.next = 4;
								return _web.web3.eth.getAccounts();

							case 4:
								accounts = _context3.sent;

								console.log(accounts);

								if (!(_web.metamask_provider == false || accounts.length == 0)) {
									_context3.next = 10;
									break;
								}

								this.setState({ metamask: false });
								_context3.next = 20;
								break;

							case 10:
								this.setState({ metamask: true, donating: true });
								index = this.state.tip_post_key;

								console.log(index);
								_context3.next = 15;
								return _factory2.default.methods.deployedPosts(index).call();

							case 15:
								address = _context3.sent;
								post = new _web.web3.eth.Contract(JSON.parse(_Post2.default.interface), address);
								_context3.next = 19;
								return post.methods.receiveContribution().send({
									from: accounts[0],
									value: _web.web3.utils.toWei(this.state.value, "ether")
								});

							case 19:
								this.setState({
									metamask: true,
									value: 0,
									is_donate: false,
									donating: false
								});

							case 20:
							case "end":
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function transact(_x2) {
				return _ref3.apply(this, arguments);
			}

			return transact;
		}()
	}, {
		key: "onSubmit",
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(event) {
				var _this3 = this;

				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								event.preventDefault();
								_context6.next = 3;
								return _web.web3.eth.getAccounts();

							case 3:
								accounts = _context6.sent;

								if (_web.metamask_provider == false || accounts.length == 0) {
									this.setState({ metamask: false });
								} else {
									this.setState({ metamask: true, uploading: true });
									_ipfs2.default.files.add(this.state.buffer, function () {
										var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(error, result) {
											var posts, new_posts, file_uploader;
											return _regenerator2.default.wrap(function _callee5$(_context5) {
												while (1) {
													switch (_context5.prev = _context5.next) {
														case 0:
															if (!error) {
																_context5.next = 3;
																break;
															}

															console.error(error);
															return _context5.abrupt("return");

														case 3:
															_context5.next = 5;
															return _factory2.default.methods.createPost(result[0].hash, _this3.state.content).send({ from: accounts[0] });

														case 5:
															_context5.next = 7;
															return _factory2.default.methods.getPosts().call();

														case 7:
															posts = _context5.sent;
															_context5.next = 10;
															return function () {
																var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(posts) {
																	var new_posts, i, Post, currentPost;
																	return _regenerator2.default.wrap(function _callee4$(_context4) {
																		while (1) {
																			switch (_context4.prev = _context4.next) {
																				case 0:
																					new_posts = [];
																					i = 0;

																				case 2:
																					if (!(i < posts.length)) {
																						_context4.next = 18;
																						break;
																					}

																					Post = new _web.web3.eth.Contract(JSON.parse(_Post2.default.interface), posts[i]);
																					_context4.next = 6;
																					return Post.methods.image_hash().call();

																				case 6:
																					_context4.t0 = _context4.sent;
																					_context4.next = 9;
																					return Post.methods.author().call();

																				case 9:
																					_context4.t1 = _context4.sent;
																					_context4.next = 12;
																					return Post.methods.content().call();

																				case 12:
																					_context4.t2 = _context4.sent;
																					currentPost = {
																						imageUrl: _context4.t0,
																						author: _context4.t1,
																						content: _context4.t2
																					};

																					new_posts.push(currentPost);

																				case 15:
																					i++;
																					_context4.next = 2;
																					break;

																				case 18:
																					return _context4.abrupt("return", new_posts);

																				case 19:
																				case "end":
																					return _context4.stop();
																			}
																		}
																	}, _callee4, this);
																}));

																return function (_x6) {
																	return _ref6.apply(this, arguments);
																};
															}()(posts);

														case 10:
															new_posts = _context5.sent;

															_this3.setState({
																posts: new_posts,
																content: "",
																uploading: false
															});
															file_uploader = document.getElementById("file_upload");

															file_uploader.value = "";

														case 14:
														case "end":
															return _context5.stop();
													}
												}
											}, _callee5, _this3);
										}));

										return function (_x4, _x5) {
											return _ref5.apply(this, arguments);
										};
									}());
								}

							case 5:
							case "end":
								return _context6.stop();
						}
					}
				}, _callee6, this);
			}));

			function onSubmit(_x3) {
				return _ref4.apply(this, arguments);
			}

			return onSubmit;
		}()
	}, {
		key: "imageZoom",
		value: function () {
			var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(event) {
				return _regenerator2.default.wrap(function _callee7$(_context7) {
					while (1) {
						switch (_context7.prev = _context7.next) {
							case 0:
								event.preventDefault();
								if (this.state.zoomed !== null) {
									this.setState({ zoomed: null });
								} else {
									this.setState({ zoomed: event.target.getAttribute("src") });
								}

							case 2:
							case "end":
								return _context7.stop();
						}
					}
				}, _callee7, this);
			}));

			function imageZoom(_x7) {
				return _ref7.apply(this, arguments);
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
					lineNumber: 194
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 195
				}
			}, _react2.default.createElement("title", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 196
				}
			}, "DOSN"), _react2.default.createElement("link", {
				href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
				rel: "stylesheet",
				integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
				crossorigin: "anonymous",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 197
				}
			}), _react2.default.createElement("link", {
				rel: "stylesheet",
				href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 203
				}
			}), _react2.default.createElement("script", {
				src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
				integrity: "sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p",
				crossorigin: "anonymous",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 207
				}
			}), _react2.default.createElement("script", {
				src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",
				integrity: "sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF",
				crossorigin: "anonymous",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 212
				}
			}), _react2.default.createElement("script", { src: "https://cdn.jsdelivr.net/npm/jdenticon@2.2.0", __source: {
					fileName: _jsxFileName,
					lineNumber: 217
				}
			})), this.state.is_donate == true && _react2.default.createElement("div", {
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
					lineNumber: 220
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
					lineNumber: 235
				}
			}, _react2.default.createElement("img", {
				src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FMVgBbtMBGQTi6og4mF%2Fgiphy.gif&f=1&nofb=1",
				style: {
					width: "200px",
					margin: "0px 20px 10px"
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 244
				}
			}), _react2.default.createElement("h2", { style: { margin: "5px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 251
				}
			}, "Choose your TIP amount"), _react2.default.createElement("div", {
				className: "input-group input-group-lg flex-nowrap",
				style: {
					width: "60%",
					margin: "30px auto 10px"
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 254
				}
			}, _react2.default.createElement("input", {
				className: "form-control",
				type: "number",
				placeholder: "Minimum TIP Amount is " + this.state.min_tip + " ETH",
				min: "10",
				onChange: this.isdonatebuttonon,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 261
				}
			}), _react2.default.createElement("span", {
				className: "input-group-text",
				id: "addon-wrapping",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 268
				}
			}, "ETH")), _react2.default.createElement("button", {
				onClick: this.takeback,
				className: "btn btn-info",
				style: { margin: "20px 40px" },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 275
				}
			}, _react2.default.createElement("i", { className: "fa fa-close", __source: {
					fileName: _jsxFileName,
					lineNumber: 280
				}
			}), " | Naah! Take me back to feeds"), _react2.default.createElement("button", {
				className: "btn btn-warning",
				style: { margin: "20px 40px" },
				id: "donate-ok",
				onClick: this.transact,
				disabled: this.state.disable_transact_okay,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 283
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 290
				}
			}, this.state.donating == true && _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 292
				}
			}, _react2.default.createElement("img", {
				src: "https://c.tenor.com/k-A2Bukh1lUAAAAi/loading-loading-symbol.gif",
				style: {
					height: "28px",
					margin: "0 15px 0 0"
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 293
				}
			}), "| Transaction is being performed"), this.state.donating == false && _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 304
				}
			}, _react2.default.createElement("i", { className: "fa fa-check", __source: {
					fileName: _jsxFileName,
					lineNumber: 305
				}
			}), "| Done! Send this TIP amount"))))), this.state.metamask == false && _react2.default.createElement("div", {
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
					lineNumber: 315
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
					lineNumber: 330
				}
			}, _react2.default.createElement("img", {
				src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa-%2FAAuE7mC1z-HXEKxL4YhAhc7WDHWA6Rnly1I592T5ag%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1&nofb=1",
				style: {
					width: "200px",
					margin: "0px 20px 10px"
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 339
				}
			}), _react2.default.createElement("h2", { style: { margin: "5px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 346
				}
			}, "OOPS!"), _react2.default.createElement("h5", { style: { margin: "10px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 347
				}
			}, "Either the MetaMask extension is not installed or you aren't logged into metamask."), _react2.default.createElement("button", {
				onClick: this.takeback,
				className: "btn btn-info",
				style: { margin: "20px 40px" },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 351
				}
			}, _react2.default.createElement("i", { className: "fa fa-arrow-left", __source: {
					fileName: _jsxFileName,
					lineNumber: 356
				}
			}), " | Naah! Take me back to feeds"), _react2.default.createElement("a", {
				href: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
				className: "btn btn-warning",
				target: "_blank",
				style: { margin: "20px 40px" },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 359
				}
			}, _react2.default.createElement("i", { className: "fa fa-chrome", __source: {
					fileName: _jsxFileName,
					lineNumber: 365
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
					lineNumber: 372
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
					lineNumber: 387
				}
			}, _react2.default.createElement("img", {
				src: "https://c.tenor.com/UTxZPwKlNNIAAAAi/ethereum-ethereum-crypto.gif",
				style: {
					width: "200px",
					margin: "0px 20px 40px"
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 396
				}
			}), _react2.default.createElement("h2", { style: { margin: "20px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 403
				}
			}, "Welcome to your Decentralized World!!"), _react2.default.createElement("h5", { style: { margin: "10px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 406
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
					lineNumber: 412
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
					lineNumber: 422
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 433
				}
			}), _react2.default.createElement("input", {
				type: "file",
				onChange: this.captureFile,
				style: { margin: "10px" },
				id: "file_upload",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 434
				}
			}), _react2.default.createElement("button", {
				type: "submit",
				className: "btn btn-primary",
				style: { margin: "10px" },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 440
				}
			}, this.state.uploading && _react2.default.createElement("div", { style: { margin: "5px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 446
				}
			}, _react2.default.createElement("span", { style: { float: "left" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 447
				}
			}, _react2.default.createElement("img", {
				src: "https://c.tenor.com/k-A2Bukh1lUAAAAi/loading-loading-symbol.gif",
				style: {
					height: "28px",
					margin: "0 15px 0 0"
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 448
				}
			})), _react2.default.createElement("span", { style: { float: "right" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 456
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 457
				}
			}, "Uploading...", _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 458
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
					lineNumber: 468
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
					lineNumber: 483
				}
			})), _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 494
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
						lineNumber: 499
					}
				}, _react2.default.createElement("h6", { className: "card-header", __source: {
						fileName: _jsxFileName,
						lineNumber: 508
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
						lineNumber: 509
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
						lineNumber: 520
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
						lineNumber: 531
					}
				})), _react2.default.createElement("div", {
					className: "card-body",
					style: { height: "auto" },
					__source: {
						fileName: _jsxFileName,
						lineNumber: 546
					}
				}, _react2.default.createElement("p", {
					className: "card-text",
					style: {
						fontSize: "22px",
						margin: "20px"
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 550
					}
				}, post.content)), _react2.default.createElement("hr", {
					style: {
						width: "80%",
						margin: "0 auto 20px"
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 560
					}
				}), _react2.default.createElement("button", {
					className: "btn btn-outline-dark",
					style: {
						width: "fit-content",
						margin: "0 40px 20px",
						padding: "10px"
					},
					onClick: _this4.donate,
					"data-index": index,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 566
					}
				}, _react2.default.createElement("img", {
					src: "https://cdn-icons-png.flaticon.com/512/1777/1777889.png",
					style: {
						width: "28px",
						margin: "auto 5px"
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 576
					}
				}), "Tip this post"));
			})));
		}
	}], [{
		key: "getInitialProps",
		value: function () {
			var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
				var posts, new_posts;
				return _regenerator2.default.wrap(function _callee9$(_context9) {
					while (1) {
						switch (_context9.prev = _context9.next) {
							case 0:
								_context9.next = 2;
								return _factory2.default.methods.getPosts().call();

							case 2:
								posts = _context9.sent;
								_context9.next = 5;
								return function () {
									var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(posts) {
										var new_posts, i, Post, currentPost;
										return _regenerator2.default.wrap(function _callee8$(_context8) {
											while (1) {
												switch (_context8.prev = _context8.next) {
													case 0:
														new_posts = [];
														i = 0;

													case 2:
														if (!(i < posts.length)) {
															_context8.next = 18;
															break;
														}

														Post = new _web.web3.eth.Contract(JSON.parse(_Post2.default.interface), posts[i]);
														_context8.next = 6;
														return Post.methods.image_hash().call();

													case 6:
														_context8.t0 = _context8.sent;
														_context8.next = 9;
														return Post.methods.author().call();

													case 9:
														_context8.t1 = _context8.sent;
														_context8.next = 12;
														return Post.methods.content().call();

													case 12:
														_context8.t2 = _context8.sent;
														currentPost = {
															imageUrl: _context8.t0,
															author: _context8.t1,
															content: _context8.t2
														};

														new_posts.push(currentPost);

													case 15:
														i++;
														_context8.next = 2;
														break;

													case 18:
														return _context8.abrupt("return", new_posts);

													case 19:
													case "end":
														return _context8.stop();
												}
											}
										}, _callee8, this);
									}));

									return function (_x8) {
										return _ref9.apply(this, arguments);
									};
								}()(posts);

							case 5:
								new_posts = _context9.sent;
								return _context9.abrupt("return", { posts: new_posts });

							case 7:
							case "end":
								return _context9.stop();
						}
					}
				}, _callee9, this);
			}));

			function getInitialProps() {
				return _ref8.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return PostIndex;
}(_react.Component);

exports.default = PostIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUG9zdEZhY3RvcnkiLCJQb3N0Q29udHJhY3QiLCJpcGZzIiwid2ViMyIsIm1ldGFtYXNrX3Byb3ZpZGVyIiwiSGVhZCIsImFjY291bnRzIiwiUG9zdEluZGV4IiwicHJvcHMiLCJzdGF0ZSIsInBvc3RzIiwiYnVmZmVyIiwiY29udGVudCIsInpvb21lZCIsImxvYWRpbmciLCJ1cGxvYWRpbmciLCJtYXRhbWFzayIsImlzX2RvbmF0ZSIsIm1pbl90aXAiLCJ2YWx1ZSIsInRpcF9wb3N0X2tleSIsImRvbmF0aW5nIiwiZGlzYWJsZV90cmFuc2FjdF9va2F5IiwiY2FwdHVyZUZpbGUiLCJiaW5kIiwib25TdWJtaXQiLCJpbWFnZVpvb20iLCJyZWFkQ29udGVudCIsInRha2ViYWNrIiwidHJhbnNhY3QiLCJkb25hdGUiLCJpc2RvbmF0ZWJ1dHRvbm9uIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZXRTdGF0ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuZXdfdmFsdWUiLCJ0YXJnZXQiLCJmaWxlIiwiZmlsZXMiLCJyZWFkZXIiLCJ3aW5kb3ciLCJGaWxlUmVhZGVyIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJvbmxvYWRlbmQiLCJCdWZmZXIiLCJyZXN1bHQiLCJtZXRhbWFzayIsInBlcnNpc3QiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsIm1pbl9jb250cmlidXRpb24iLCJjYWxsIiwidGlwIiwidXRpbHMiLCJmcm9tV2VpIiwiZ2V0QXR0cmlidXRlIiwibGVuZ3RoIiwiaW5kZXgiLCJkZXBsb3llZFBvc3RzIiwiYWRkcmVzcyIsInBvc3QiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsInJlY2VpdmVDb250cmlidXRpb24iLCJzZW5kIiwiZnJvbSIsInRvV2VpIiwiYWRkIiwiZXJyb3IiLCJjcmVhdGVQb3N0IiwiaGFzaCIsImdldFBvc3RzIiwibmV3X3Bvc3RzIiwiaSIsIlBvc3QiLCJpbWFnZV9oYXNoIiwiYXV0aG9yIiwiY3VycmVudFBvc3QiLCJpbWFnZVVybCIsInB1c2giLCJmaWxlX3VwbG9hZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBvc2l0aW9uIiwiekluZGV4Iiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibGVmdCIsInRvcCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm9yZGVyIiwiZmxvYXQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImN1cnNvciIsInNsaWNlIiwicmV2ZXJzZSIsIm1hcCIsIm92ZXJmbG93Iiwib2JqZWN0Rml0IiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQU0sQUFBeUI7O0FBQ3hDLEFBQU87Ozs7Ozs7OztBQUVQLElBQUksV0FBSixBQUFlOztJLEFBRVQ7b0NBQ0w7O29CQUFBLEFBQVksT0FBTztzQ0FBQTs7MElBQUEsQUFDWixBQUNOOztRQUFBLEFBQUs7VUFDRyxNQUFBLEFBQUssTUFEQSxBQUNNLEFBQ2xCO1dBRlksQUFFSixBQUNSO1lBSFksQUFHSCxBQUNUO1dBSlksQUFJSixBQUNSO1lBTFksQUFLSCxBQUNUO2NBTlksQUFNRCxBQUNYO2FBUFksQUFPRixBQUNWO2NBUlksQUFRRCxBQUNYO1lBVFksQUFTSCxBQUNUO1VBVlksQUFVTCxBQUNQO2lCQVhZLEFBV0UsQUFDZDthQVpZLEFBWUYsQUFDVjswQkFiRCxBQUFhLEFBYVcsQUFFeEI7QUFmYSxBQUNaO1FBY0QsQUFBSyxjQUFjLE1BQUEsQUFBSyxZQUFMLEFBQWlCLEtBQXBDLEFB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LEFBQ047O2dCQUhGO2tCQUFBLEFBT0U7QUFQRjtBQUNDLFlBcERILEFBK0NDLEFBSUMsQUFPTyxBQUdSOzthQUNRLEFBQ0MsQUFDUDtjQUhGLEFBQ1EsQUFFRTtBQUZGLEFBQ047O2dCQUZGO2tCQTdERCxBQTZEQyxBQU1BO0FBTkE7QUFDQyx3QkFLRCxjQUFBO2dCQUFBLEFBQ1csQUFDVjs7YUFBTyxBQUNDLEFBQ1A7Y0FGTSxBQUVFLEFBQ1I7ZUFMRixBQUVRLEFBR0csQUFFVjtBQUxPLEFBQ047Y0FJUSxPQVBWLEFBT2UsQUFDZDttQkFSRCxBQVFhOztnQkFSYjtrQkFBQSxBQVVDO0FBVkQ7QUFDQztVQVNBLEFBQ0ssQUFDSjs7YUFBTyxBQUNDLEFBQ1A7Y0FKRixBQUVRLEFBRUU7QUFGRixBQUNOOztnQkFIRjtrQkFWRCxBQVVDO0FBQUE7QUFDQyxRQS9FQyxBQUNKLEFBbUVDO0FBclhOLEFBQ0MsQUE0U0MsQUFDRSxBQStGSjs7Ozs7Ozs7Ozs7O2VBbGlCb0Isa0JBQUEsQUFBWSxRQUFaLEFBQW9CLFdBQXBCLEFBQStCLEE7O1lBQTdDO0E7OzJCQUNnQjs4RkFBQyxrQkFBQSxBQUFnQixPQUFoQjtrQ0FBQTswRUFBQTtxQkFBQTsrQ0FBQTtrQkFDbEI7QUFEa0IsMEJBQUEsQUFDTixBQUNQO0FBRmEsa0JBQUEsQUFFVDs7a0JBRlM7b0JBRU4sSUFBSSxNQUZFLEFBRUksU0FGSjtnQ0FBQTtBQUFBO0FBR2Y7O0FBSGUscUJBR1IsSUFBSSxVQUFBLEFBQUssSUFBVCxBQUFhLFNBQ3pCLEtBQUEsQUFBSyxNQUFNLGVBREMsQUFDWixBQUF3QixZQUN4QixNQUxvQixBQUdSLEFBRVosQUFBTTsrQkFMYztxQkFRSixLQUFBLEFBQUssUUFBTCxBQUFhLGFBUlQsQUFRSixBQUEwQjs7a0JBUnRCO3VDQUFBOytCQUFBO3FCQVNOLEtBQUEsQUFBSyxRQUFMLEFBQWEsU0FUUCxBQVNOLEFBQXNCOztrQkFUaEI7dUNBQUE7K0JBQUE7cUJBVUwsS0FBQSxBQUFLLFFBQUwsQUFBYSxVQVZSLEFBVUwsQUFBdUI7O2tCQVZsQjt1Q0FPZjtBQVBlO0FBQUEsbUNBU3BCO0FBVG9CLGlDQVVwQjtBQVZvQixrQ0FBQSxBQVlyQjtBQUpDOzt3QkFJRCxBQUFVLEtBWlcsQUFZckIsQUFBZTs7a0JBVmtCO0FBRlo7K0JBQUE7QUFBQTs7a0JBQUE7Z0RBQUEsQUFjZjs7a0JBZGU7a0JBQUE7K0JBQUE7O0FBQUE7dUJBQUE7QUFBRDs7K0JBQUE7bUNBQUE7QUFBQTtTQUFBLEdBZW5CLEEsQUFmbUI7O1lBQWxCO0E7MENBZ0JHLEVBQUUsT0FBRixBLEFBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFuRE0sQSxBQXVrQnhCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2F0dWxzaW5naC9Qcm9qZWN0cy9EZWNlbnRyYWxpemVkX09TTiJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lNmI0NzQxNGM2YmU5OTMzMjAzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZmQ3YTRiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9zdEZhY3RvcnkgZnJvbSBcIi4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcbmltcG9ydCBQb3N0Q29udHJhY3QgZnJvbSBcIi4uL2V0aGVyZXVtL2J1aWxkL1Bvc3QuanNvblwiO1xuaW1wb3J0IGlwZnMgZnJvbSBcIi4uL2V0aGVyZXVtL2lwZnNcIjtcbmltcG9ydCB7IHdlYjMsIG1ldGFtYXNrX3Byb3ZpZGVyIH0gZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxubGV0IGFjY291bnRzID0gW107XG5cbmNsYXNzIFBvc3RJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRwb3N0czogdGhpcy5wcm9wcy5wb3N0cyxcblx0XHRcdGJ1ZmZlcjogbnVsbCxcblx0XHRcdGNvbnRlbnQ6IFwiXCIsXG5cdFx0XHR6b29tZWQ6IG51bGwsXG5cdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0dXBsb2FkaW5nOiBmYWxzZSxcblx0XHRcdG1hdGFtYXNrOiB0cnVlLFxuXHRcdFx0aXNfZG9uYXRlOiBmYWxzZSxcblx0XHRcdG1pbl90aXA6IDAsXG5cdFx0XHR2YWx1ZTogMCxcblx0XHRcdHRpcF9wb3N0X2tleTogMCxcblx0XHRcdGRvbmF0aW5nOiBmYWxzZSxcblx0XHRcdGRpc2FibGVfdHJhbnNhY3Rfb2theTogdHJ1ZSxcblx0XHR9O1xuXHRcdHRoaXMuY2FwdHVyZUZpbGUgPSB0aGlzLmNhcHR1cmVGaWxlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKTtcblx0XHR0aGlzLmltYWdlWm9vbSA9IHRoaXMuaW1hZ2Vab29tLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZWFkQ29udGVudCA9IHRoaXMucmVhZENvbnRlbnQuYmluZCh0aGlzKTtcblx0XHR0aGlzLnRha2ViYWNrID0gdGhpcy50YWtlYmFjay5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudHJhbnNhY3QgPSB0aGlzLnRyYW5zYWN0LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5kb25hdGUgPSB0aGlzLmRvbmF0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaXNkb25hdGVidXR0b25vbiA9IHRoaXMuaXNkb25hdGVidXR0b25vbi5iaW5kKHRoaXMpO1xuXHR9XG5cblx0YXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0YWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG5cdFx0Y29uc3QgcG9zdHMgPSBhd2FpdCBQb3N0RmFjdG9yeS5tZXRob2RzLmdldFBvc3RzKCkuY2FsbCgpO1xuXHRcdGxldCBuZXdfcG9zdHMgPSBhd2FpdCAoYXN5bmMgZnVuY3Rpb24gKHBvc3RzKSB7XG5cdFx0XHRsZXQgbmV3X3Bvc3RzID0gW107XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBvc3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IFBvc3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXG5cdFx0XHRcdFx0SlNPTi5wYXJzZShQb3N0Q29udHJhY3QuaW50ZXJmYWNlKSxcblx0XHRcdFx0XHRwb3N0c1tpXVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjb25zdCBjdXJyZW50UG9zdCA9IHtcblx0XHRcdFx0XHRpbWFnZVVybDogYXdhaXQgUG9zdC5tZXRob2RzLmltYWdlX2hhc2goKS5jYWxsKCksXG5cdFx0XHRcdFx0YXV0aG9yOiBhd2FpdCBQb3N0Lm1ldGhvZHMuYXV0aG9yKCkuY2FsbCgpLFxuXHRcdFx0XHRcdGNvbnRlbnQ6IGF3YWl0IFBvc3QubWV0aG9kcy5jb250ZW50KCkuY2FsbCgpLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRuZXdfcG9zdHMucHVzaChjdXJyZW50UG9zdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbmV3X3Bvc3RzO1xuXHRcdH0pKHBvc3RzKTtcblx0XHRyZXR1cm4geyBwb3N0czogbmV3X3Bvc3RzIH07XG5cdH1cblxuXHRpc2RvbmF0ZWJ1dHRvbm9uKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRsZXQgbmV3X3ZhbHVlID0gdHJ1ZTtcblx0XHRpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID49IHRoaXMuc3RhdGUubWluX3RpcCkge1xuXHRcdFx0bmV3X3ZhbHVlID0gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcblx0XHRcdGRpc2FibGVfdHJhbnNhY3Rfb2theTogbmV3X3ZhbHVlLFxuXHRcdH0pO1xuXHR9XG5cblx0Y2FwdHVyZUZpbGUoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG5cdFx0Y29uc3QgcmVhZGVyID0gbmV3IHdpbmRvdy5GaWxlUmVhZGVyKCk7XG5cdFx0cmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuXHRcdHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgYnVmZmVyOiBCdWZmZXIocmVhZGVyLnJlc3VsdCkgfSk7XG5cdFx0fTtcblx0fVxuXG5cdHRha2ViYWNrKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgbWV0YW1hc2s6IHRydWUsIGlzX2RvbmF0ZTogZmFsc2UgfSk7XG5cdH1cblxuXHRhc3luYyBkb25hdGUoZXZlbnQpIHtcblx0XHRldmVudC5wZXJzaXN0KCk7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuXHRcdGxldCB0aXAgPSBhd2FpdCBQb3N0RmFjdG9yeS5tZXRob2RzLm1pbl9jb250cmlidXRpb24oKS5jYWxsKCk7XG5cdFx0dGlwID0gd2ViMy51dGlscy5mcm9tV2VpKHRpcCwgXCJldGhlclwiKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGlzX2RvbmF0ZTogdHJ1ZSxcblx0XHRcdG1pbl90aXA6IHRpcCxcblx0XHRcdHRpcF9wb3N0X2tleTogZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiksXG5cdFx0fSk7XG5cdH1cblxuXHRhc3luYyB0cmFuc2FjdChldmVudCkge1xuXHRcdGV2ZW50LnBlcnNpc3QoKTtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblx0XHRjb25zb2xlLmxvZyhhY2NvdW50cyk7XG5cdFx0aWYgKG1ldGFtYXNrX3Byb3ZpZGVyID09IGZhbHNlIHx8IGFjY291bnRzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgbWV0YW1hc2s6IGZhbHNlIH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgbWV0YW1hc2s6IHRydWUsIGRvbmF0aW5nOiB0cnVlIH0pO1xuXHRcdFx0Y29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLnRpcF9wb3N0X2tleTtcblx0XHRcdGNvbnNvbGUubG9nKGluZGV4KTtcblx0XHRcdGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBQb3N0RmFjdG9yeS5tZXRob2RzXG5cdFx0XHRcdC5kZXBsb3llZFBvc3RzKGluZGV4KVxuXHRcdFx0XHQuY2FsbCgpO1xuXHRcdFx0Y29uc3QgcG9zdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcblx0XHRcdFx0SlNPTi5wYXJzZShQb3N0Q29udHJhY3QuaW50ZXJmYWNlKSxcblx0XHRcdFx0YWRkcmVzc1xuXHRcdFx0KTtcblx0XHRcdGF3YWl0IHBvc3QubWV0aG9kcy5yZWNlaXZlQ29udHJpYnV0aW9uKCkuc2VuZCh7XG5cdFx0XHRcdGZyb206IGFjY291bnRzWzBdLFxuXHRcdFx0XHR2YWx1ZTogd2ViMy51dGlscy50b1dlaSh0aGlzLnN0YXRlLnZhbHVlLCBcImV0aGVyXCIpLFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0bWV0YW1hc2s6IHRydWUsXG5cdFx0XHRcdHZhbHVlOiAwLFxuXHRcdFx0XHRpc19kb25hdGU6IGZhbHNlLFxuXHRcdFx0XHRkb25hdGluZzogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRhc3luYyBvblN1Ym1pdChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0YWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXHRcdGlmIChtZXRhbWFza19wcm92aWRlciA9PSBmYWxzZSB8fCBhY2NvdW50cy5sZW5ndGggPT0gMCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IG1ldGFtYXNrOiBmYWxzZSB9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IG1ldGFtYXNrOiB0cnVlLCB1cGxvYWRpbmc6IHRydWUgfSk7XG5cdFx0XHRpcGZzLmZpbGVzLmFkZCh0aGlzLnN0YXRlLmJ1ZmZlciwgYXN5bmMgKGVycm9yLCByZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGF3YWl0IFBvc3RGYWN0b3J5Lm1ldGhvZHNcblx0XHRcdFx0XHQuY3JlYXRlUG9zdChyZXN1bHRbMF0uaGFzaCwgdGhpcy5zdGF0ZS5jb250ZW50KVxuXHRcdFx0XHRcdC5zZW5kKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XG5cdFx0XHRcdGNvbnN0IHBvc3RzID0gYXdhaXQgUG9zdEZhY3RvcnkubWV0aG9kcy5nZXRQb3N0cygpLmNhbGwoKTtcblx0XHRcdFx0bGV0IG5ld19wb3N0cyA9IGF3YWl0IChhc3luYyBmdW5jdGlvbiAocG9zdHMpIHtcblx0XHRcdFx0XHRsZXQgbmV3X3Bvc3RzID0gW107XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb3N0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0Y29uc3QgUG9zdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcblx0XHRcdFx0XHRcdFx0SlNPTi5wYXJzZShQb3N0Q29udHJhY3QuaW50ZXJmYWNlKSxcblx0XHRcdFx0XHRcdFx0cG9zdHNbaV1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRjb25zdCBjdXJyZW50UG9zdCA9IHtcblx0XHRcdFx0XHRcdFx0aW1hZ2VVcmw6IGF3YWl0IFBvc3QubWV0aG9kcy5pbWFnZV9oYXNoKCkuY2FsbCgpLFxuXHRcdFx0XHRcdFx0XHRhdXRob3I6IGF3YWl0IFBvc3QubWV0aG9kcy5hdXRob3IoKS5jYWxsKCksXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IGF3YWl0IFBvc3QubWV0aG9kcy5jb250ZW50KCkuY2FsbCgpLFxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdG5ld19wb3N0cy5wdXNoKGN1cnJlbnRQb3N0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIG5ld19wb3N0cztcblx0XHRcdFx0fSkocG9zdHMpO1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRwb3N0czogbmV3X3Bvc3RzLFxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCIsXG5cdFx0XHRcdFx0dXBsb2FkaW5nOiBmYWxzZSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnN0IGZpbGVfdXBsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGVfdXBsb2FkXCIpO1xuXHRcdFx0XHRmaWxlX3VwbG9hZGVyLnZhbHVlID0gXCJcIjtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGFzeW5jIGltYWdlWm9vbShldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYgKHRoaXMuc3RhdGUuem9vbWVkICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgem9vbWVkOiBudWxsIH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgem9vbWVkOiBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwic3JjXCIpIH0pO1xuXHRcdH1cblx0fVxuXG5cdHJlYWRDb250ZW50KGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgY29udGVudDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+RE9TTjwvdGl0bGU+XG5cdFx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG5cdFx0XHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0XHRcdGludGVncml0eT1cInNoYTM4NC1FVlNUUU4zL2F6cHJHMUFubTNRRGdwSkxJbTlOYW8wWXoxenRjUVR3RnNwZDN5RDY1Vm9oaHB1dUNPbUxBU2pDXCJcblx0XHRcdFx0XHRcdGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcblx0XHRcdFx0XHQ+PC9saW5rPlxuXHRcdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcblx0XHRcdFx0XHQ+PC9saW5rPlxuXHRcdFx0XHRcdDxzY3JpcHRcblx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQHBvcHBlcmpzL2NvcmVAMi45LjIvZGlzdC91bWQvcG9wcGVyLm1pbi5qc1wiXG5cdFx0XHRcdFx0XHRpbnRlZ3JpdHk9XCJzaGEzODQtSVFzb0xYbDVQSUxGaG9zVk51YnE1TEM3UWI5RFhnREE5aSt0UThaajNpd1dBd1B0Z0ZUeGJKOE5UNEdOMVI4cFwiXG5cdFx0XHRcdFx0XHRjcm9zc29yaWdpbj1cImFub255bW91c1wiXG5cdFx0XHRcdFx0Pjwvc2NyaXB0PlxuXHRcdFx0XHRcdDxzY3JpcHRcblx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4yL2Rpc3QvanMvYm9vdHN0cmFwLm1pbi5qc1wiXG5cdFx0XHRcdFx0XHRpbnRlZ3JpdHk9XCJzaGEzODQtY1ZLSVBoR1dpQzJBbDR1K0xXZ3hmS1RSSWNmdTBKVHhSK0VRRHovYmdsZG9FeWw0SDB6VUYwUUtickowRWNRRlwiXG5cdFx0XHRcdFx0XHRjcm9zc29yaWdpbj1cImFub255bW91c1wiXG5cdFx0XHRcdFx0Pjwvc2NyaXB0PlxuXHRcdFx0XHRcdDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9qZGVudGljb25AMi4yLjBcIj48L3NjcmlwdD5cblx0XHRcdFx0PC9IZWFkPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5pc19kb25hdGUgPT0gdHJ1ZSAmJiAoXG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IFwiZml4ZWRcIixcblx0XHRcdFx0XHRcdFx0ekluZGV4OiBcIjFcIixcblx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0bGVmdDogXCIwXCIsXG5cdFx0XHRcdFx0XHRcdHRvcDogXCIwXCIsXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjgpXCIsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCI1MCVcIixcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiNTAlXCIsXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCI3MHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogXCIyNXB4XCIsXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL2V4dGVybmFsLWNvbnRlbnQuZHVja2R1Y2tnby5jb20vaXUvP3U9aHR0cHMlM0ElMkYlMkZtZWRpYS5naXBoeS5jb20lMkZtZWRpYSUyRk1WZ0JidE1CR1FUaTZvZzRtRiUyRmdpcGh5LmdpZiZmPTEmbm9mYj0xXCJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMjAwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogXCIwcHggMjBweCAxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PGgyIHN0eWxlPXt7IG1hcmdpbjogXCI1cHhcIiB9fT5cblx0XHRcdFx0XHRcdFx0XHRDaG9vc2UgeW91ciBUSVAgYW1vdW50XG5cdFx0XHRcdFx0XHRcdDwvaDI+XG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1sZyBmbGV4LW5vd3JhcFwiXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjYwJVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiBcIjMwcHggYXV0byAxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e2BNaW5pbXVtIFRJUCBBbW91bnQgaXMgJHt0aGlzLnN0YXRlLm1pbl90aXB9IEVUSGB9XG5cdFx0XHRcdFx0XHRcdFx0XHRtaW49XCIxMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5pc2RvbmF0ZWJ1dHRvbm9ufVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJhZGRvbi13cmFwcGluZ1wiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0RVRIXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMudGFrZWJhY2t9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW46IFwiMjBweCA0MHB4XCIgfX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLWNsb3NlXCI+PC9pPiB8IE5hYWghIFRha2UgbWVcblx0XHRcdFx0XHRcdFx0XHRiYWNrIHRvIGZlZWRzXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW46IFwiMjBweCA0MHB4XCIgfX1cblx0XHRcdFx0XHRcdFx0XHRpZD1cImRvbmF0ZS1va1wiXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy50cmFuc2FjdH1cblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlX3RyYW5zYWN0X29rYXl9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUuZG9uYXRpbmcgPT0gdHJ1ZSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9jLnRlbm9yLmNvbS9rLUEyQnVraDFsVUFBQUFpL2xvYWRpbmctbG9hZGluZy1zeW1ib2wuZ2lmXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIyOHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogXCIwIDE1cHggMCAwXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fCBUcmFuc2FjdGlvbiBpcyBiZWluZyBwZXJmb3JtZWRcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUuZG9uYXRpbmcgPT0gZmFsc2UgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrXCI+PC9pPnxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHREb25lISBTZW5kIHRoaXMgVElQIGFtb3VudFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHt0aGlzLnN0YXRlLm1ldGFtYXNrID09IGZhbHNlICYmIChcblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogXCJmaXhlZFwiLFxuXHRcdFx0XHRcdFx0XHR6SW5kZXg6IFwiMVwiLFxuXHRcdFx0XHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogXCIxMDAlXCIsXG5cdFx0XHRcdFx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRsZWZ0OiBcIjBcIixcblx0XHRcdFx0XHRcdFx0dG9wOiBcIjBcIixcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuOClcIixcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjUwJVwiLFxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCI1MCVcIixcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjcwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjI1cHhcIixcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vZXh0ZXJuYWwtY29udGVudC5kdWNrZHVja2dvLmNvbS9pdS8/dT1odHRwcyUzQSUyRiUyRnl0My5nZ3BodC5jb20lMkZhLSUyRkFBdUU3bUMxei1IWEVLeEw0WWhBaGM3V0RIV0E2Um5seTFJNTkyVDVhZyUzRHM5MDAtbW8tYy1jMHhmZmZmZmZmZi1yai1rLW5vJmY9MSZub2ZiPTFcIlxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIyMDBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiBcIjBweCAyMHB4IDEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8aDIgc3R5bGU9e3sgbWFyZ2luOiBcIjVweFwiIH19Pk9PUFMhPC9oMj5cblx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4XCIgfX0+XG5cdFx0XHRcdFx0XHRcdFx0RWl0aGVyIHRoZSBNZXRhTWFzayBleHRlbnNpb24gaXMgbm90IGluc3RhbGxlZFxuXHRcdFx0XHRcdFx0XHRcdG9yIHlvdSBhcmVuJ3QgbG9nZ2VkIGludG8gbWV0YW1hc2suXG5cdFx0XHRcdFx0XHRcdDwvaDU+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLnRha2ViYWNrfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luOiBcIjIwcHggNDBweFwiIH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1sZWZ0XCI+PC9pPiB8IE5hYWghXG5cdFx0XHRcdFx0XHRcdFx0VGFrZSBtZSBiYWNrIHRvIGZlZWRzXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9tZXRhbWFzay9ua2JpaGZiZW9nYWVhb2VobGVmbmtvZGJlZmdwZ2tublwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ9e1wiX2JsYW5rXCJ9XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luOiBcIjIwcHggNDBweFwiIH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1jaHJvbWVcIj48L2k+IHwgR2V0IE1ldGFNYXNrXG5cdFx0XHRcdFx0XHRcdFx0RXh0ZW5zdGlvblxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdFx0e3RoaXMuc3RhdGUubG9hZGluZyAmJiAoXG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IFwiZml4ZWRcIixcblx0XHRcdFx0XHRcdFx0ekluZGV4OiBcIjFcIixcblx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0bGVmdDogXCIwXCIsXG5cdFx0XHRcdFx0XHRcdHRvcDogXCIwXCIsXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjgpXCIsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCI0MCVcIixcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiNDAlXCIsXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCI3MHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogXCIyNXB4XCIsXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL2MudGVub3IuY29tL1VUeFpQd0tsTk5JQUFBQWkvZXRoZXJldW0tZXRoZXJldW0tY3J5cHRvLmdpZlwiXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjIwMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IFwiMHB4IDIwcHggNDBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxoMiBzdHlsZT17eyBtYXJnaW46IFwiMjBweFwiIH19PlxuXHRcdFx0XHRcdFx0XHRcdFdlbGNvbWUgdG8geW91ciBEZWNlbnRyYWxpemVkIFdvcmxkISFcblx0XHRcdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4XCIgfX0+XG5cdFx0XHRcdFx0XHRcdFx0SG9sZCB0aWdodCB3aGlsZSB3ZSBzZXR1cCB0aGUgY29udGVudHMgZm9yIHlvdVxuXHRcdFx0XHRcdFx0XHQ8L2g1PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0b25TdWJtaXQ9e3RoaXMub25TdWJtaXR9XG5cdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdG1hcmdpbjogXCIyMHB4IGF1dG9cIixcblx0XHRcdFx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdHdpZHRoOiBcIjY1MHB4XCIsXG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG5cdFx0XHRcdFx0XHRib3JkZXI6IFwiMXB4IHNvbGlkIGdyYXlcIixcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PHRleHRhcmVhXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkxldCdzIHR3ZWV0IHNvbWV0aGluZy4uLlwiXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogXCIxNTBweFwiLFxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjEycHhcIixcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBcIjBweCBzb2xpZCBibGFja1wiLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLnJlYWRDb250ZW50fVxuXHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuY29udGVudH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxicj48L2JyPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cImZpbGVcIlxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuY2FwdHVyZUZpbGV9XG5cdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW46IFwiMTBweFwiIH19XG5cdFx0XHRcdFx0XHRpZD1cImZpbGVfdXBsb2FkXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4XCIgfX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS51cGxvYWRpbmcgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCI1cHhcIiB9fT5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyBmbG9hdDogXCJsZWZ0XCIgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vYy50ZW5vci5jb20vay1BMkJ1a2gxbFVBQUFBaS9sb2FkaW5nLWxvYWRpbmctc3ltYm9sLmdpZlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjI4cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IFwiMCAxNXB4IDAgMFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFVwbG9hZGluZy4uLjxicj48L2JyPkl0IG1pZ2h0IHRha2UgdXB0b1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQxMCBtaW5zISFcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0eyF0aGlzLnN0YXRlLnVwbG9hZGluZyAmJiBcIlN1Ym1pdFwifVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnpvb21lZCAhPT0gbnVsbCAmJiAoXG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IFwiZml4ZWRcIixcblx0XHRcdFx0XHRcdFx0ekluZGV4OiBcIjFcIixcblx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0bGVmdDogXCIwXCIsXG5cdFx0XHRcdFx0XHRcdHRvcDogXCIwXCIsXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjgpXCIsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0c3JjPXt0aGlzLnN0YXRlLnpvb21lZH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5pbWFnZVpvb219XG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0bWF4V2lkdGg6IFwiOTAlXCIsXG5cdFx0XHRcdFx0XHRcdFx0bWF4SGVpZ2h0OiBcIjkwJVwiLFxuXHRcdFx0XHRcdFx0XHRcdGN1cnNvcjogXCJ6b29tLW91dFwiLFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5wb3N0c1xuXHRcdFx0XHRcdFx0LnNsaWNlKDApXG5cdFx0XHRcdFx0XHQucmV2ZXJzZSgpXG5cdFx0XHRcdFx0XHQubWFwKChwb3N0LCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FyZFwiXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogXCIyMHB4IGF1dG8gMjBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiNjUwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCJmaXQtY29udGVudFwiLFxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtpbmRleH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2BodHRwczovL2lkZW50aWNvbi1hcGkuaGVyb2t1YXBwLmNvbS8ke3Bvc3QuYXV0aG9yfS80MD9mb3JtYXQ9cG5nYH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IFwiNXB4IDIwcHggNXB4IDVweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCI1MCVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3Bvc3QuYXV0aG9yfVxuXHRcdFx0XHRcdFx0XHRcdDwvaDY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wIGltZy1mbHVpZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXhXaWR0aDogXCI5MCVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcImF1dG9cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IFwiMCBhdXRvXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiMjBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17YGh0dHBzOi8vaXBmcy5pby9pcGZzLyR7cG9zdC5pbWFnZVVybH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkLWltZy10b3AgaW1nLWZsdWlkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvYmplY3RGaXQ6IFwiY29udGFpblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnNvcjogXCJ6b29tLWluXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjI1cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiYXV0b1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcImF1dG9cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IFwiMCBhdXRvXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4SGVpZ2h0OiBcIjUwMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaW1hZ2Vab29tfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkLWJvZHlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgaGVpZ2h0OiBcImF1dG9cIiB9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IFwiMjJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogXCIyMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtwb3N0LmNvbnRlbnR9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGhyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCI4MCVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiBcIjAgYXV0byAyMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD48L2hyPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcImZpdC1jb250ZW50XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogXCIwIDQwcHggMjBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLmRvbmF0ZX1cblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtaW5kZXg9e2luZGV4fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS81MTIvMTc3Ny8xNzc3ODg5LnBuZ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMjhweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogXCJhdXRvIDVweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFRpcCB0aGlzIHBvc3Rcblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RJbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFkQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUhBOzs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7OztBQUNBO0FBQ0E7QUFEQTs7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTs7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFDQTtBQU5BO0FBQUE7QUFRQTtBQUNBO0FBREE7QUFSQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7QUFKQTtBQUFBO0FBUUE7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBWEE7QUFPQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUdBO0FBQ0E7QUFYQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFjQTtBQUNBO0FBZkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBVEE7QUFDQTtBQXdCQTtBQUVBO0FBQ0E7QUFFQTtBQUpBO0FBMUJBO0FBQ0E7QUE4QkE7QUFDQTtBQWhDQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFpQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFBQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQU9BO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFJQTtBQUVBO0FBRkE7QUFFQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBVkE7O0FBRkE7QUFlQTtBQWZBO0FBQ0E7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTs7QUFGQTtBQVNBO0FBVEE7QUFDQTtBQVVBOztBQUVBO0FBQUE7QUFEQTs7QUFIQTtBQU9BO0FBUEE7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUdBO0FBRUE7O0FBRUE7QUFBQTtBQURBOztBQUhBO0FBT0E7QUFQQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBRUE7QUFBQTs7QUFMQTtBQU9BO0FBUEE7QUFDQTtBQVFBO0FBQUE7O0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUVBO0FBQUE7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7O0FBTEE7QUFPQTtBQVBBO0FBQ0E7O0FBTUE7QUFDQTtBQURBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFHQTs7QUFFQTtBQUFBO0FBREE7O0FBSEE7QUFBQTtBQUFBO0FBQ0E7O0FBVUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFTQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBVkE7O0FBRkE7QUFlQTtBQWZBO0FBQ0E7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTs7QUFGQTtBQVNBO0FBVEE7QUFDQTtBQVVBOztBQUVBO0FBQUE7QUFEQTs7QUFIQTtBQU9BO0FBUEE7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQUE7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBTUE7QUFOQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBTUE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVZBOztBQUZBO0FBZUE7QUFmQTtBQUNBOztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7O0FBRkE7QUFTQTtBQVRBO0FBQ0E7QUFVQTs7QUFFQTtBQUFBO0FBREE7O0FBSEE7QUFPQTtBQVBBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBOztBQUhBO0FBVUE7QUFWQTtBQUNBO0FBV0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQUtBO0FBQ0E7O0FBVEE7QUFXQTtBQVhBO0FBQ0E7O0FBVUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQU9BO0FBQ0E7QUFBQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBOztBQUdBOztBQUVBO0FBQUE7QUFEQTs7QUFIQTtBQVFBO0FBUkE7QUFDQTtBQU9BO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFWQTs7QUFGQTtBQWVBO0FBZkE7QUFDQTtBQWVBO0FBQ0E7O0FBR0E7QUFDQTtBQUFBO0FBRkE7O0FBSkE7QUFXQTtBQVhBO0FBQ0E7O0FBVUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUpBO0FBSUE7O0FBUEE7QUFTQTtBQVRBO0FBQ0E7QUFRQTtBQUNBO0FBREE7O0FBRUE7O0FBR0E7QUFDQTtBQUVBO0FBSkE7QUFJQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTtBQVlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUxBOztBQUhBO0FBV0E7QUFYQTtBQUNBO0FBV0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVJBO0FBUUE7O0FBWkE7QUFlQTtBQWZBO0FBQ0E7QUFnQkE7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUtBOztBQUVBO0FBQUE7QUFEQTs7QUFIQTtBQU9BO0FBUEE7QUFDQTs7QUFZQTtBQUFBO0FBREE7O0FBRkE7QUFNQTtBQU5BO0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBRUE7QUFKQTtBQUlBO0FBQ0E7O0FBUkE7QUFVQTtBQVZBO0FBQ0E7QUFXQTs7QUFFQTtBQUFBO0FBREE7O0FBSEE7QUFBQTtBQUFBO0FBQ0E7QUFhQTs7Ozs7Ozs7Ozs7O0FBbGlCQTtBQUNBO0FBREE7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQVFBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBVkE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQVhBO0FBT0E7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFHQTtBQUNBO0FBWEE7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBY0E7QUFDQTtBQWZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTs7QUFnQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtaEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=