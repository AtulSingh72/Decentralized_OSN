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
		_this.postComment = _this.postComment.bind(_this);
		_this.commentHide = _this.commentHide.bind(_this);
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
		key: "commentHide",
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(event) {
				var index, comments_div, comments_address, comments, new_posts;
				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								event.preventDefault();
								index = event.target.getAttribute("data-index");
								comments_div = document.getElementById("comments" + index);

								if (comments_div.style.display === "none") {
									comments_div.style.display = "block";
								} else {
									comments_div.style.display = "none";
								}
								comments_address = this.state.posts[index].comments;

								if (!(comments_address.length != 0 && typeof comments_address[0] == "string")) {
									_context5.next = 12;
									break;
								}

								_context5.next = 8;
								return function () {
									var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(comments_address) {
										var new_comments, i, Comment, currentComment;
										return _regenerator2.default.wrap(function _callee4$(_context4) {
											while (1) {
												switch (_context4.prev = _context4.next) {
													case 0:
														new_comments = [];
														i = 0;

													case 2:
														if (!(i < comments_address.length)) {
															_context4.next = 18;
															break;
														}

														Comment = new _web.web3.eth.Contract(JSON.parse(_Post2.default.interface), comments_address[i]);
														_context4.next = 6;
														return Comment.methods.image_hash().call();

													case 6:
														_context4.t0 = _context4.sent;
														_context4.next = 9;
														return Comment.methods.author().call();

													case 9:
														_context4.t1 = _context4.sent;
														_context4.next = 12;
														return Comment.methods.content().call();

													case 12:
														_context4.t2 = _context4.sent;
														currentComment = {
															imageUrl: _context4.t0,
															author: _context4.t1,
															content: _context4.t2
														};

														new_comments.push(currentComment);

													case 15:
														i++;
														_context4.next = 2;
														break;

													case 18:
														return _context4.abrupt("return", new_comments);

													case 19:
													case "end":
														return _context4.stop();
												}
											}
										}, _callee4, this);
									}));

									return function (_x4) {
										return _ref5.apply(this, arguments);
									};
								}()(comments_address);

							case 8:
								comments = _context5.sent;
								new_posts = this.state.posts;

								new_posts[index].comments = comments;
								this.setState({ posts: new_posts });

							case 12:
							case "end":
								return _context5.stop();
						}
					}
				}, _callee5, this);
			}));

			function commentHide(_x3) {
				return _ref4.apply(this, arguments);
			}

			return commentHide;
		}()
	}, {
		key: "postComment",
		value: function () {
			var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(event) {
				var _this3 = this;

				var parent_index;
				return _regenerator2.default.wrap(function _callee8$(_context8) {
					while (1) {
						switch (_context8.prev = _context8.next) {
							case 0:
								event.persist();
								event.preventDefault();
								_context8.next = 4;
								return _web.web3.eth.getAccounts();

							case 4:
								accounts = _context8.sent;
								parent_index = event.target.getAttribute("data-index");

								console.log(parent_index);
								if (_web.metamask_provider == false || accounts.length == 0) {
									this.setState({ metamask: false });
								} else {
									this.setState({ metamask: true, uploading: true });
									_ipfs2.default.files.add(this.state.buffer, function () {
										var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(error, result) {
											var parent_address, parent_post, comments_address, new_posts, comments, file_uploader;
											return _regenerator2.default.wrap(function _callee7$(_context7) {
												while (1) {
													switch (_context7.prev = _context7.next) {
														case 0:
															if (!error) {
																_context7.next = 3;
																break;
															}

															console.error(error);
															return _context7.abrupt("return");

														case 3:
															_context7.next = 5;
															return _factory2.default.methods.deployedPosts(parent_index).call();

														case 5:
															parent_address = _context7.sent;
															_context7.next = 8;
															return _factory2.default.methods.createComment(parent_address, result[0].hash, _this3.state.content).send({ from: accounts[0] });

														case 8:
															parent_post = new _web.web3.eth.Contract(JSON.parse(_Post2.default.interface), parent_address);
															_context7.next = 11;
															return parent_post.methods.getComments().call();

														case 11:
															comments_address = _context7.sent;
															new_posts = _this3.state.posts;
															_context7.next = 15;
															return function () {
																var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(comments_address) {
																	var new_comments, i, Comment, currentComment;
																	return _regenerator2.default.wrap(function _callee6$(_context6) {
																		while (1) {
																			switch (_context6.prev = _context6.next) {
																				case 0:
																					new_comments = [];
																					i = 0;

																				case 2:
																					if (!(i < comments_address.length)) {
																						_context6.next = 18;
																						break;
																					}

																					Comment = new _web.web3.eth.Contract(JSON.parse(_Post2.default.interface), comments_address[i]);
																					_context6.next = 6;
																					return Comment.methods.image_hash().call();

																				case 6:
																					_context6.t0 = _context6.sent;
																					_context6.next = 9;
																					return Comment.methods.author().call();

																				case 9:
																					_context6.t1 = _context6.sent;
																					_context6.next = 12;
																					return Comment.methods.content().call();

																				case 12:
																					_context6.t2 = _context6.sent;
																					currentComment = {
																						imageUrl: _context6.t0,
																						author: _context6.t1,
																						content: _context6.t2
																					};

																					new_comments.push(currentComment);

																				case 15:
																					i++;
																					_context6.next = 2;
																					break;

																				case 18:
																					return _context6.abrupt("return", new_comments);

																				case 19:
																				case "end":
																					return _context6.stop();
																			}
																		}
																	}, _callee6, this);
																}));

																return function (_x8) {
																	return _ref8.apply(this, arguments);
																};
															}()(comments_address);

														case 15:
															comments = _context7.sent;

															new_posts[parent_index].comments = comments;
															_this3.setState({
																posts: new_posts,
																content: "",
																uploading: false
															});
															file_uploader = document.getElementById("file_upload_2");

															file_uploader.value = "";

														case 20:
														case "end":
															return _context7.stop();
													}
												}
											}, _callee7, _this3);
										}));

										return function (_x6, _x7) {
											return _ref7.apply(this, arguments);
										};
									}());
								}

							case 8:
							case "end":
								return _context8.stop();
						}
					}
				}, _callee8, this);
			}));

			function postComment(_x5) {
				return _ref6.apply(this, arguments);
			}

			return postComment;
		}()
	}, {
		key: "onSubmit",
		value: function () {
			var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(event) {
				var _this4 = this;

				return _regenerator2.default.wrap(function _callee11$(_context11) {
					while (1) {
						switch (_context11.prev = _context11.next) {
							case 0:
								event.preventDefault();
								_context11.next = 3;
								return _web.web3.eth.getAccounts();

							case 3:
								accounts = _context11.sent;

								if (_web.metamask_provider == false || accounts.length == 0) {
									this.setState({ metamask: false });
								} else {
									this.setState({ metamask: true, uploading: true });
									_ipfs2.default.files.add(this.state.buffer, function () {
										var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(error, result) {
											var posts, new_posts, file_uploader;
											return _regenerator2.default.wrap(function _callee10$(_context10) {
												while (1) {
													switch (_context10.prev = _context10.next) {
														case 0:
															if (!error) {
																_context10.next = 3;
																break;
															}

															console.error(error);
															return _context10.abrupt("return");

														case 3:
															_context10.next = 5;
															return _factory2.default.methods.createPost(result[0].hash, _this4.state.content).send({ from: accounts[0] });

														case 5:
															_context10.next = 7;
															return _factory2.default.methods.getPosts().call();

														case 7:
															posts = _context10.sent;
															_context10.next = 10;
															return function () {
																var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(posts) {
																	var new_posts, i, Post, currentPost;
																	return _regenerator2.default.wrap(function _callee9$(_context9) {
																		while (1) {
																			switch (_context9.prev = _context9.next) {
																				case 0:
																					new_posts = [];
																					i = 0;

																				case 2:
																					if (!(i < posts.length)) {
																						_context9.next = 21;
																						break;
																					}

																					Post = new _web.web3.eth.Contract(JSON.parse(_Post2.default.interface), posts[i]);
																					_context9.next = 6;
																					return Post.methods.image_hash().call();

																				case 6:
																					_context9.t0 = _context9.sent;
																					_context9.next = 9;
																					return Post.methods.author().call();

																				case 9:
																					_context9.t1 = _context9.sent;
																					_context9.next = 12;
																					return Post.methods.content().call();

																				case 12:
																					_context9.t2 = _context9.sent;
																					_context9.next = 15;
																					return Post.methods.getComments().call();

																				case 15:
																					_context9.t3 = _context9.sent;
																					currentPost = {
																						imageUrl: _context9.t0,
																						author: _context9.t1,
																						content: _context9.t2,
																						comments: _context9.t3
																					};

																					new_posts.push(currentPost);

																				case 18:
																					i++;
																					_context9.next = 2;
																					break;

																				case 21:
																					return _context9.abrupt("return", new_posts);

																				case 22:
																				case "end":
																					return _context9.stop();
																			}
																		}
																	}, _callee9, this);
																}));

																return function (_x12) {
																	return _ref11.apply(this, arguments);
																};
															}()(posts);

														case 10:
															new_posts = _context10.sent;

															_this4.setState({
																posts: new_posts,
																content: "",
																uploading: false
															});
															file_uploader = document.getElementById("file_upload");

															file_uploader.value = "";

														case 14:
														case "end":
															return _context10.stop();
													}
												}
											}, _callee10, _this4);
										}));

										return function (_x10, _x11) {
											return _ref10.apply(this, arguments);
										};
									}());
								}

							case 5:
							case "end":
								return _context11.stop();
						}
					}
				}, _callee11, this);
			}));

			function onSubmit(_x9) {
				return _ref9.apply(this, arguments);
			}

			return onSubmit;
		}()
	}, {
		key: "imageZoom",
		value: function () {
			var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(event) {
				return _regenerator2.default.wrap(function _callee12$(_context12) {
					while (1) {
						switch (_context12.prev = _context12.next) {
							case 0:
								event.preventDefault();
								if (this.state.zoomed !== null) {
									this.setState({ zoomed: null });
								} else {
									this.setState({ zoomed: event.target.getAttribute("src") });
								}

							case 2:
							case "end":
								return _context12.stop();
						}
					}
				}, _callee12, this);
			}));

			function imageZoom(_x13) {
				return _ref12.apply(this, arguments);
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
			var _this5 = this;

			return _react2.default.createElement("div", { className: "container", __source: {
					fileName: _jsxFileName,
					lineNumber: 295
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 296
				}
			}, _react2.default.createElement("title", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 297
				}
			}, "DOSN"), _react2.default.createElement("link", {
				href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
				rel: "stylesheet",
				integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
				crossorigin: "anonymous",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 298
				}
			}), _react2.default.createElement("link", {
				rel: "stylesheet",
				href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 304
				}
			}), _react2.default.createElement("script", {
				src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
				integrity: "sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p",
				crossorigin: "anonymous",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 308
				}
			}), _react2.default.createElement("script", {
				src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",
				integrity: "sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF",
				crossorigin: "anonymous",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 313
				}
			}), _react2.default.createElement("script", { src: "https://cdn.jsdelivr.net/npm/jdenticon@2.2.0", __source: {
					fileName: _jsxFileName,
					lineNumber: 318
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
					lineNumber: 321
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
					lineNumber: 336
				}
			}, _react2.default.createElement("img", {
				src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FMVgBbtMBGQTi6og4mF%2Fgiphy.gif&f=1&nofb=1",
				style: {
					width: "200px",
					margin: "0px 20px 10px"
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 345
				}
			}), _react2.default.createElement("h2", { style: { margin: "5px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 352
				}
			}, "Choose your TIP amount"), _react2.default.createElement("div", {
				className: "input-group input-group-lg flex-nowrap",
				style: {
					width: "60%",
					margin: "30px auto 10px"
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 355
				}
			}, _react2.default.createElement("input", {
				className: "form-control",
				type: "number",
				placeholder: "Minimum TIP Amount is " + this.state.min_tip + " ETH",
				min: "10",
				onChange: this.isdonatebuttonon,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 362
				}
			}), _react2.default.createElement("span", {
				className: "input-group-text",
				id: "addon-wrapping",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 369
				}
			}, "ETH")), _react2.default.createElement("button", {
				onClick: this.takeback,
				className: "btn btn-info",
				style: { margin: "20px 40px" },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 376
				}
			}, _react2.default.createElement("i", { className: "fa fa-close", __source: {
					fileName: _jsxFileName,
					lineNumber: 381
				}
			}), " | Naah! Take me back to feeds"), _react2.default.createElement("button", {
				className: "btn btn-warning",
				style: { margin: "20px 40px" },
				id: "donate-ok",
				onClick: this.transact,
				disabled: this.state.disable_transact_okay,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 384
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 391
				}
			}, this.state.donating == true && _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 393
				}
			}, _react2.default.createElement("img", {
				src: "https://c.tenor.com/k-A2Bukh1lUAAAAi/loading-loading-symbol.gif",
				style: {
					height: "28px",
					margin: "0 15px 0 0"
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 394
				}
			}), "| Transaction is being performed"), this.state.donating == false && _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 405
				}
			}, _react2.default.createElement("i", { className: "fa fa-check", __source: {
					fileName: _jsxFileName,
					lineNumber: 406
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
					lineNumber: 416
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
					lineNumber: 431
				}
			}, _react2.default.createElement("img", {
				src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa-%2FAAuE7mC1z-HXEKxL4YhAhc7WDHWA6Rnly1I592T5ag%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1&nofb=1",
				style: {
					width: "200px",
					margin: "0px 20px 10px"
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 440
				}
			}), _react2.default.createElement("h2", { style: { margin: "5px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 447
				}
			}, "OOPS!"), _react2.default.createElement("h5", { style: { margin: "10px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 448
				}
			}, "Either the MetaMask extension is not installed or you aren't logged into metamask."), _react2.default.createElement("button", {
				onClick: this.takeback,
				className: "btn btn-info",
				style: { margin: "20px 40px" },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 452
				}
			}, _react2.default.createElement("i", { className: "fa fa-arrow-left", __source: {
					fileName: _jsxFileName,
					lineNumber: 457
				}
			}), " | Naah! Take me back to feeds"), _react2.default.createElement("a", {
				href: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
				className: "btn btn-warning",
				target: "_blank",
				style: { margin: "20px 40px" },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 460
				}
			}, _react2.default.createElement("i", { className: "fa fa-chrome", __source: {
					fileName: _jsxFileName,
					lineNumber: 466
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
					lineNumber: 473
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
					lineNumber: 488
				}
			}, _react2.default.createElement("img", {
				src: "https://c.tenor.com/UTxZPwKlNNIAAAAi/ethereum-ethereum-crypto.gif",
				style: {
					width: "200px",
					margin: "0px 20px 40px"
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 497
				}
			}), _react2.default.createElement("h2", { style: { margin: "20px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 504
				}
			}, "Welcome to your Decentralized World!!"), _react2.default.createElement("h5", { style: { margin: "10px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 507
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
					lineNumber: 513
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
					lineNumber: 523
				}
			}), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 534
				}
			}), _react2.default.createElement("input", {
				type: "file",
				onChange: this.captureFile,
				style: { margin: "10px" },
				id: "file_upload",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 535
				}
			}), _react2.default.createElement("button", {
				type: "submit",
				className: "btn btn-primary",
				style: { margin: "10px" },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 541
				}
			}, this.state.uploading && _react2.default.createElement("div", { style: { margin: "5px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 547
				}
			}, _react2.default.createElement("span", { style: { float: "left" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 548
				}
			}, _react2.default.createElement("img", {
				src: "https://c.tenor.com/k-A2Bukh1lUAAAAi/loading-loading-symbol.gif",
				style: {
					height: "28px",
					margin: "0 15px 0 0"
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 549
				}
			})), _react2.default.createElement("span", { style: { float: "right" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 557
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 558
				}
			}, "Uploading...", _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 559
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
					lineNumber: 569
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
					lineNumber: 584
				}
			})), _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 595
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
						lineNumber: 600
					}
				}, _react2.default.createElement("h6", { className: "card-header", __source: {
						fileName: _jsxFileName,
						lineNumber: 609
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
						lineNumber: 610
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
						lineNumber: 621
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
					onClick: _this5.imageZoom,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 632
					}
				})), _react2.default.createElement("div", {
					className: "card-body",
					style: { height: "auto" },
					__source: {
						fileName: _jsxFileName,
						lineNumber: 647
					}
				}, _react2.default.createElement("p", {
					className: "card-text",
					style: {
						fontSize: "22px",
						margin: "20px"
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 651
					}
				}, post.content)), _react2.default.createElement("hr", {
					style: {
						width: "80%",
						margin: "0 auto 20px"
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 661
					}
				}), _react2.default.createElement("div", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 667
					}
				}, _react2.default.createElement("button", {
					className: "btn btn-outline-dark",
					style: {
						width: "fit-content",
						margin: "0 40px 20px",
						padding: "10px"
					},
					onClick: _this5.donate,
					"data-index": _this5.state.posts.length - 1 - index,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 668
					}
				}, _react2.default.createElement("img", {
					src: "https://cdn-icons-png.flaticon.com/512/1777/1777889.png",
					style: {
						width: "28px",
						margin: "auto 5px"
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 680
					}
				}), "Tip this post"), _react2.default.createElement("button", {
					className: "btn btn-outline-primary",
					style: {
						width: "fit-content",
						margin: "0 40px 20px",
						padding: "10px",
						float: "right"
					},
					"data-index": _this5.state.posts.length - 1 - index,
					onClick: _this5.commentHide,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 689
					}
				}, _react2.default.createElement("i", {
					className: "fa fa-comments",
					style: { margin: "0 5px" },
					__source: {
						fileName: _jsxFileName,
						lineNumber: 702
					}
				}), " ", "Comments")), _react2.default.createElement("div", {
					id: "comments" + (_this5.state.posts.length - index - 1),
					style: { margin: "10px", display: "none" },
					__source: {
						fileName: _jsxFileName,
						lineNumber: 709
					}
				}, _react2.default.createElement("form", {
					onSubmit: _this5.postComment,
					style: {
						margin: "20px auto",
						textAlign: "center",
						width: "550px",
						borderRadius: "5px",
						border: "1px solid gray"
					},
					"data-index": _this5.state.posts.length - 1 - index,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 716
					}
				}, _react2.default.createElement("textarea", {
					placeholder: "Comment on this post...",
					style: {
						width: "100%",
						height: "100px",
						padding: "12px",
						border: "0px solid black"
					},
					onChange: _this5.readContent,
					value: _this5.state.content,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 729
					}
				}), _react2.default.createElement("br", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 740
					}
				}), _react2.default.createElement("input", {
					type: "file",
					onChange: _this5.captureFile,
					style: { margin: "10px" },
					id: "file_upload_2",
					__source: {
						fileName: _jsxFileName,
						lineNumber: 741
					}
				}), _react2.default.createElement("button", {
					type: "submit",
					className: "btn btn-primary",
					style: { margin: "10px" },
					__source: {
						fileName: _jsxFileName,
						lineNumber: 747
					}
				}, _this5.state.uploading && _react2.default.createElement("div", { style: { margin: "5px" }, __source: {
						fileName: _jsxFileName,
						lineNumber: 753
					}
				}, _react2.default.createElement("span", {
					style: {
						float: "left"
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 754
					}
				}, _react2.default.createElement("img", {
					src: "https://c.tenor.com/k-A2Bukh1lUAAAAi/loading-loading-symbol.gif",
					style: {
						height: "28px",
						margin: "0 15px 0 0"
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 759
					}
				})), _react2.default.createElement("span", {
					style: {
						float: "right"
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 767
					}
				}, _react2.default.createElement("div", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 772
					}
				}, "Uploading...", _react2.default.createElement("br", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 774
					}
				}), "It might take upto 10 mins!!"))), !_this5.state.uploading && "Submit")), post.comments.slice(0).reverse().map(function (comment, comment_index) {
					return _react2.default.createElement("div", {
						className: "card",
						style: {
							margin: "20px auto 20px",
							width: "550px",
							height: "fit-content"
						},
						key: "comments_" + comment_index,
						__source: {
							fileName: _jsxFileName,
							lineNumber: 787
						}
					}, _react2.default.createElement("p", {
						className: "card-header",
						style: {
							fontWeight: "500",
							fontSize: "13px"
						},
						__source: {
							fileName: _jsxFileName,
							lineNumber: 798
						}
					}, _react2.default.createElement("img", {
						src: "https://identicon-api.herokuapp.com/" + comment.author + "/20?format=png",
						style: {
							margin: "5px 20px 5px 5px",
							borderRadius: "50%",
							background: "white"
						},
						key: "comments_" + comment_index,
						__source: {
							fileName: _jsxFileName,
							lineNumber: 805
						}
					}), comment.author), _react2.default.createElement("div", {
						className: "card-img-top img-fluid",
						style: {
							maxWidth: "90%",
							height: "auto",
							overflow: "hidden",
							display: "flex",
							margin: "0 auto",
							padding: "10px"
						},
						__source: {
							fileName: _jsxFileName,
							lineNumber: 819
						}
					}, _react2.default.createElement("img", {
						src: "https://ipfs.io/ipfs/" + comment.imageUrl,
						className: "card-img-top img-fluid",
						style: {
							objectFit: "contain",
							borderRadius: "25px",
							height: "auto",
							width: "auto",
							margin: "0 auto",
							maxHeight: "250px"
						},
						__source: {
							fileName: _jsxFileName,
							lineNumber: 830
						}
					})), _react2.default.createElement("div", {
						className: "card-body",
						style: { height: "auto" },
						__source: {
							fileName: _jsxFileName,
							lineNumber: 845
						}
					}, _react2.default.createElement("p", {
						className: "card-text",
						style: {
							fontSize: "16px",
							margin: "0px"
						},
						__source: {
							fileName: _jsxFileName,
							lineNumber: 849
						}
					}, comment.content)));
				})));
			})));
		}
	}], [{
		key: "getInitialProps",
		value: function () {
			var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14() {
				var posts, new_posts;
				return _regenerator2.default.wrap(function _callee14$(_context14) {
					while (1) {
						switch (_context14.prev = _context14.next) {
							case 0:
								_context14.next = 2;
								return _factory2.default.methods.getPosts().call();

							case 2:
								posts = _context14.sent;
								_context14.next = 5;
								return function () {
									var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(posts) {
										var new_posts, i, Post, currentPost;
										return _regenerator2.default.wrap(function _callee13$(_context13) {
											while (1) {
												switch (_context13.prev = _context13.next) {
													case 0:
														new_posts = [];
														i = 0;

													case 2:
														if (!(i < posts.length)) {
															_context13.next = 21;
															break;
														}

														Post = new _web.web3.eth.Contract(JSON.parse(_Post2.default.interface), posts[i]);
														_context13.next = 6;
														return Post.methods.image_hash().call();

													case 6:
														_context13.t0 = _context13.sent;
														_context13.next = 9;
														return Post.methods.author().call();

													case 9:
														_context13.t1 = _context13.sent;
														_context13.next = 12;
														return Post.methods.content().call();

													case 12:
														_context13.t2 = _context13.sent;
														_context13.next = 15;
														return Post.methods.getComments().call();

													case 15:
														_context13.t3 = _context13.sent;
														currentPost = {
															imageUrl: _context13.t0,
															author: _context13.t1,
															content: _context13.t2,
															comments: _context13.t3
														};

														new_posts.push(currentPost);

													case 18:
														i++;
														_context13.next = 2;
														break;

													case 21:
														return _context13.abrupt("return", new_posts);

													case 22:
													case "end":
														return _context13.stop();
												}
											}
										}, _callee13, this);
									}));

									return function (_x14) {
										return _ref14.apply(this, arguments);
									};
								}()(posts);

							case 5:
								new_posts = _context14.sent;
								return _context14.abrupt("return", { posts: new_posts });

							case 7:
							case "end":
								return _context14.stop();
						}
					}
				}, _callee14, this);
			}));

			function getInitialProps() {
				return _ref13.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return PostIndex;
}(_react.Component);

exports.default = PostIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUG9zdEZhY3RvcnkiLCJQb3N0Q29udHJhY3QiLCJpcGZzIiwid2ViMyIsIm1ldGFtYXNrX3Byb3ZpZGVyIiwiSGVhZCIsImFjY291bnRzIiwiUG9zdEluZGV4IiwicHJvcHMiLCJzdGF0ZSIsInBvc3RzIiwiYnVmZmVyIiwiY29udGVudCIsInpvb21lZCIsImxvYWRpbmciLCJ1cGxvYWRpbmciLCJtYXRhbWFzayIsImlzX2RvbmF0ZSIsIm1pbl90aXAiLCJ2YWx1ZSIsInRpcF9wb3N0X2tleSIsImRvbmF0aW5nIiwiZGlzYWJsZV90cmFuc2FjdF9va2F5IiwiY2FwdHVyZUZpbGUiLCJiaW5kIiwib25TdWJtaXQiLCJpbWFnZVpvb20iLCJyZWFkQ29udGVudCIsInRha2ViYWNrIiwidHJhbnNhY3QiLCJkb25hdGUiLCJpc2RvbmF0ZWJ1dHRvbm9uIiwicG9zdENvbW1lbnQiLCJjb21tZW50SGlkZSIsImV0aCIsImdldEFjY291bnRzIiwic2V0U3RhdGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmV3X3ZhbHVlIiwidGFyZ2V0IiwiZmlsZSIsImZpbGVzIiwicmVhZGVyIiwid2luZG93IiwiRmlsZVJlYWRlciIsInJlYWRBc0FycmF5QnVmZmVyIiwib25sb2FkZW5kIiwiQnVmZmVyIiwicmVzdWx0IiwibWV0YW1hc2siLCJwZXJzaXN0IiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJtaW5fY29udHJpYnV0aW9uIiwiY2FsbCIsInRpcCIsInV0aWxzIiwiZnJvbVdlaSIsImdldEF0dHJpYnV0ZSIsImxlbmd0aCIsImluZGV4IiwiZGVwbG95ZWRQb3N0cyIsImFkZHJlc3MiLCJwb3N0IiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiLCJyZWNlaXZlQ29udHJpYnV0aW9uIiwic2VuZCIsImZyb20iLCJ0b1dlaSIsImNvbW1lbnRzX2RpdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRpc3BsYXkiLCJjb21tZW50c19hZGRyZXNzIiwiY29tbWVudHMiLCJuZXdfY29tbWVudHMiLCJpIiwiQ29tbWVudCIsImltYWdlX2hhc2giLCJhdXRob3IiLCJjdXJyZW50Q29tbWVudCIsImltYWdlVXJsIiwicHVzaCIsIm5ld19wb3N0cyIsInBhcmVudF9pbmRleCIsImFkZCIsImVycm9yIiwicGFyZW50X2FkZHJlc3MiLCJjcmVhdGVDb21tZW50IiwiaGFzaCIsInBhcmVudF9wb3N0IiwiZ2V0Q29tbWVudHMiLCJmaWxlX3VwbG9hZGVyIiwiY3JlYXRlUG9zdCIsImdldFBvc3RzIiwiUG9zdCIsImN1cnJlbnRQb3N0IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJ3aWR0aCIsImhlaWdodCIsInRleHRBbGlnbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImxlZnQiLCJ0b3AiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1hcmdpbiIsImJvcmRlciIsImZsb2F0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJjdXJzb3IiLCJzbGljZSIsInJldmVyc2UiLCJtYXAiLCJvdmVyZmxvdyIsIm9iamVjdEZpdCIsImZvbnRTaXplIiwiY29tbWVudCIsImNvbW1lbnRfaW5kZXgiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQXlCOztBQUN4QyxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFJLFdBQUosQUFBZTs7SUFFVCxBO29DQUNMOztvQkFBQSxBQUFZLE9BQU87c0NBQUE7OzBJQUFBLEFBQ1osQUFDTjs7UUFBQSxBQUFLO1VBQ0csTUFBQSxBQUFLLE1BREEsQUFDTSxBQUNsQjtXQUZZ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UDtlQVBNLEFBT0UsQUFDUjtrQkFYRixBQUdRLEFBUUs7QUFSTCxBQUNOOztpQkFKRjttQkEzQ0YsQUFnQ0MsQUFXQyxBQWVEO0FBZkM7QUFDQywwQkFjRixjQUFBO2lCQUFBLEFBQ1csQUFDVjthQUFPLEVBQUUsUUFGVixBQUVRLEFBQVU7O2lCQUZsQjttQkFBQSxBQUlDO0FBSkQ7QUFDQyx3QkFHQSxjQUFBO2lCQUFBLEFBQ1csQUFDVjs7aUJBQU8sQUFDSSxBQUNWO2VBSkYsQUFFUSxBQUVFO0FBRkYsQUFDTjs7aUJBSEY7bUJBQUEsQUFPRTtBQVBGO0FBQ0MsZ0JBaEVDLEFBQ0osQUEwREMsQUFJQyxBQU9VO0FBalFaLEFBQ0osQUE2R0MsQUEwRUU7QUF6ZVIsQUFDQyxBQTRTQyxBQUNFLEFBK1FKOzs7Ozs7Ozs7Ozs7ZUFyekJvQixrQkFBQSxBQUFZLFFBQVosQUFBb0IsV0FBcEIsQUFBK0IsQTs7WUFBN0M7QTs7MkJBQ2dCOytGQUFDLG1CQUFBLEFBQWdCLE9BQWhCO2tDQUFBOzRFQUFBO3FCQUFBO2lEQUFBO2tCQUNsQjtBQURrQiwwQkFBQSxBQUNOLEFBQ1A7QUFGYSxrQkFBQSxBQUVUOztrQkFGUztvQkFFTixJQUFJLE1BRkUsQUFFSSxTQUZKO2lDQUFBO0FBQUE7QUFHZjs7QUFIZSxxQkFHUixJQUFJLFVBQUEsQUFBSyxJQUFULEFBQWEsU0FDekIsS0FBQSxBQUFLLE1BQU0sZUFEQyxBQUNaLEFBQXdCLFlBQ3hCLE1BTG9CLEFBR1IsQUFFWixBQUFNO2dDQUxjO3FCQVFKLEtBQUEsQUFBSyxRQUFMLEFBQWEsYUFSVCxBQVFKLEFBQTBCOztrQkFSdEI7eUNBQUE7Z0NBQUE7cUJBU04sS0FBQSxBQUFLLFFBQUwsQUFBYSxTQVRQLEFBU04sQUFBc0I7O2tCQVRoQjt5Q0FBQTtnQ0FBQTtxQkFVTCxLQUFBLEFBQUssUUFBTCxBQUFhLFVBVlIsQUFVTCxBQUF1Qjs7a0JBVmxCO3lDQUFBO2dDQUFBO3FCQVdKLEtBQUEsQUFBSyxRQUFMLEFBQWEsY0FYVCxBQVdKLEFBQTJCOztrQkFYdkI7eUNBT2Y7QUFQZTtBQUFBLG9DQVNwQjtBQVRvQixrQ0FVcEI7QUFWb0IsbUNBV3BCO0FBWG9CLG9DQUFBLEFBYXJCO0FBTEM7O3dCQUtELEFBQVUsS0FiVyxBQWFyQixBQUFlOztrQkFYa0I7QUFGWjtnQ0FBQTtBQUFBOztrQkFBQTtpREFBQSxBQWVmOztrQkFmZTtrQkFBQTtnQ0FBQTs7QUFBQTt3QkFBQTtBQUFEOztnQ0FBQTtvQ0FBQTtBQUFBO1NBQUEsRyxBQUFBLEFBZ0JuQjs7WUFoQkM7QTsyQ0FpQkcsRUFBRSxPLEFBQUYsQUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXRETSxBLEFBNDFCeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYXR1bHNpbmdoL1Byb2plY3RzL0RlY2VudHJhbGl6ZWRfT1NOIn0=