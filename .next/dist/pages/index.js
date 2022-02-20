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