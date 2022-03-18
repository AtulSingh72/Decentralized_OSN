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

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _factory = require("../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _Post = require("../ethereum/build/Post.json");

var _Post2 = _interopRequireDefault(_Post);

var _ipfs = require("../ethereum/ipfs");

var _ipfs2 = _interopRequireDefault(_ipfs);

var _web = require("../ethereum/web3");

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

var _TweetForm = require("../componenets/TweetForm/TweetForm");

var _TweetForm2 = _interopRequireDefault(_TweetForm);

var _TweetCard = require("../componenets/TweetCard/TweetCard");

var _TweetCard2 = _interopRequireDefault(_TweetCard);

var _LoadingCard = require("../componenets/LoadingCard/LoadingCard");

var _LoadingCard2 = _interopRequireDefault(_LoadingCard);

var _ZoomedImage = require("../componenets/ZoomedImage/ZoomedImage");

var _ZoomedImage2 = _interopRequireDefault(_ZoomedImage);

var _MetamaskCard = require("../componenets/MetamaskCard/MetamaskCard");

var _MetamaskCard2 = _interopRequireDefault(_MetamaskCard);

var _DonateCard = require("../componenets/DonateCard/DonateCard");

var _DonateCard2 = _interopRequireDefault(_DonateCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/atulsingh/Projects/Decentralized_OSN/pages/index.js";


var accounts = [];

var PostIndex = function (_Component) {
	(0, _inherits3.default)(PostIndex, _Component);

	function PostIndex(props) {
		var _this2 = this;

		(0, _classCallCheck3.default)(this, PostIndex);

		var _this = (0, _possibleConstructorReturn3.default)(this, (PostIndex.__proto__ || (0, _getPrototypeOf2.default)(PostIndex)).call(this, props));

		_this.isdonatebuttonon = function (event) {
			event.preventDefault();
			var new_value = true;
			if (event.target.value >= _this.state.min_tip) {
				new_value = false;
			}
			_this.setState({
				value: event.target.value,
				disable_transact_okay: new_value
			});
		};

		_this.captureFile = function (event) {
			event.preventDefault();
			var file = event.target.files[0];
			var reader = new window.FileReader();
			reader.readAsArrayBuffer(file);
			reader.onloadend = function () {
				_this.setState({ buffer: Buffer(reader.result) });
			};
		};

		_this.takeback = function (event) {
			event.preventDefault();
			_this.setState({ metamask: true, is_donate: false });
		};

		_this.donate = function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var tip;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.persist();
								event.preventDefault();
								console.log(event.target);
								_context.next = 5;
								return _factory2.default.methods.min_contribution().call();

							case 5:
								tip = _context.sent;

								tip = _web.web3.utils.fromWei(tip, "ether");
								_this.setState({
									is_donate: true,
									min_tip: tip,
									tip_post_key: event.target.getAttribute("data-index")
								});

							case 8:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, _this2);
			}));

			return function (_x) {
				return _ref.apply(this, arguments);
			};
		}();

		_this.transact = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
				var index, address, post;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								event.persist();
								event.preventDefault();
								_context2.next = 4;
								return _web.web3.eth.getAccounts();

							case 4:
								accounts = _context2.sent;

								console.log(accounts);

								if (!(_web.metamask_provider == false || accounts.length == 0)) {
									_context2.next = 10;
									break;
								}

								_this.setState({ metamask: false, is_donate: false });
								_context2.next = 20;
								break;

							case 10:
								_this.setState({ metamask: true, donating: true });
								index = _this.state.tip_post_key;

								console.log(index);
								_context2.next = 15;
								return _factory2.default.methods.deployedPosts(index).call();

							case 15:
								address = _context2.sent;
								post = new _web.web3.eth.Contract(JSON.parse(_Post2.default.interface), address);
								_context2.next = 19;
								return post.methods.receiveContribution().send({
									from: accounts[0],
									value: _web.web3.utils.toWei(_this.state.value, "ether")
								});

							case 19:
								_this.setState({
									metamask: true,
									value: 0,
									is_donate: false,
									donating: false
								});

							case 20:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, _this2);
			}));

			return function (_x2) {
				return _ref2.apply(this, arguments);
			};
		}();

		_this.commentHide = function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(event) {
				var index, comments_div, comments_address, comments, new_posts;
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								event.preventDefault();
								index = event.target.getAttribute("data-index");
								comments_div = document.getElementById("comments" + index);

								if (comments_div.style.display === "none") {
									comments_div.style.display = "block";
								} else {
									comments_div.style.display = "none";
								}
								comments_address = _this.state.posts[index].comments;

								if (!(comments_address.length != 0 && typeof comments_address[0] == "string")) {
									_context4.next = 12;
									break;
								}

								_context4.next = 8;
								return function () {
									var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(comments_address) {
										var new_comments, i, Comment, currentComment;
										return _regenerator2.default.wrap(function _callee3$(_context3) {
											while (1) {
												switch (_context3.prev = _context3.next) {
													case 0:
														new_comments = [];
														i = 0;

													case 2:
														if (!(i < comments_address.length)) {
															_context3.next = 18;
															break;
														}

														Comment = new _web.web3.eth.Contract(JSON.parse(_Post2.default.interface), comments_address[i]);
														_context3.next = 6;
														return Comment.methods.image_hash().call();

													case 6:
														_context3.t0 = _context3.sent;
														_context3.next = 9;
														return Comment.methods.author().call();

													case 9:
														_context3.t1 = _context3.sent;
														_context3.next = 12;
														return Comment.methods.content().call();

													case 12:
														_context3.t2 = _context3.sent;
														currentComment = {
															imageUrl: _context3.t0,
															author: _context3.t1,
															content: _context3.t2
														};

														new_comments.push(currentComment);

													case 15:
														i++;
														_context3.next = 2;
														break;

													case 18:
														return _context3.abrupt("return", new_comments);

													case 19:
													case "end":
														return _context3.stop();
												}
											}
										}, _callee3, this);
									}));

									return function (_x4) {
										return _ref4.apply(this, arguments);
									};
								}()(comments_address);

							case 8:
								comments = _context4.sent;
								new_posts = _this.state.posts;

								new_posts[index].comments = comments;
								_this.setState({ posts: new_posts });

							case 12:
							case "end":
								return _context4.stop();
						}
					}
				}, _callee4, _this2);
			}));

			return function (_x3) {
				return _ref3.apply(this, arguments);
			};
		}();

		_this.postComment = function () {
			var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(event) {
				var parent_index;
				return _regenerator2.default.wrap(function _callee7$(_context7) {
					while (1) {
						switch (_context7.prev = _context7.next) {
							case 0:
								event.persist();
								event.preventDefault();
								_context7.next = 4;
								return _web.web3.eth.getAccounts();

							case 4:
								accounts = _context7.sent;
								parent_index = event.target.getAttribute("data-index");

								console.log(parent_index);
								if (_web.metamask_provider == false || accounts.length == 0) {
									_this.setState({ metamask: false });
								} else {
									_this.setState({ metamask: true, uploading: true });
									_ipfs2.default.files.add(_this.state.buffer, function () {
										var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(error, result) {
											var parent_address, parent_post, comments_address, new_posts, comments, file_uploader;
											return _regenerator2.default.wrap(function _callee6$(_context6) {
												while (1) {
													switch (_context6.prev = _context6.next) {
														case 0:
															if (!error) {
																_context6.next = 3;
																break;
															}

															console.error(error);
															return _context6.abrupt("return");

														case 3:
															_context6.next = 5;
															return _factory2.default.methods.deployedPosts(parent_index).call();

														case 5:
															parent_address = _context6.sent;
															_context6.next = 8;
															return _factory2.default.methods.createComment(parent_address, result[0].hash, _this.state.content).send({ from: accounts[0] });

														case 8:
															parent_post = new _web.web3.eth.Contract(JSON.parse(_Post2.default.interface), parent_address);
															_context6.next = 11;
															return parent_post.methods.getComments().call();

														case 11:
															comments_address = _context6.sent;
															new_posts = _this.state.posts;
															_context6.next = 15;
															return function () {
																var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(comments_address) {
																	var new_comments, i, Comment, currentComment;
																	return _regenerator2.default.wrap(function _callee5$(_context5) {
																		while (1) {
																			switch (_context5.prev = _context5.next) {
																				case 0:
																					new_comments = [];
																					i = 0;

																				case 2:
																					if (!(i < comments_address.length)) {
																						_context5.next = 18;
																						break;
																					}

																					Comment = new _web.web3.eth.Contract(JSON.parse(_Post2.default.interface), comments_address[i]);
																					_context5.next = 6;
																					return Comment.methods.image_hash().call();

																				case 6:
																					_context5.t0 = _context5.sent;
																					_context5.next = 9;
																					return Comment.methods.author().call();

																				case 9:
																					_context5.t1 = _context5.sent;
																					_context5.next = 12;
																					return Comment.methods.content().call();

																				case 12:
																					_context5.t2 = _context5.sent;
																					currentComment = {
																						imageUrl: _context5.t0,
																						author: _context5.t1,
																						content: _context5.t2
																					};

																					new_comments.push(currentComment);

																				case 15:
																					i++;
																					_context5.next = 2;
																					break;

																				case 18:
																					return _context5.abrupt("return", new_comments);

																				case 19:
																				case "end":
																					return _context5.stop();
																			}
																		}
																	}, _callee5, this);
																}));

																return function (_x8) {
																	return _ref7.apply(this, arguments);
																};
															}()(comments_address);

														case 15:
															comments = _context6.sent;

															new_posts[parent_index].comments = comments;
															_this.setState({
																posts: new_posts,
																content: "",
																uploading: false
															});
															file_uploader = document.getElementById("file_upload_2");

															file_uploader.value = "";

														case 20:
														case "end":
															return _context6.stop();
													}
												}
											}, _callee6, _this2);
										}));

										return function (_x6, _x7) {
											return _ref6.apply(this, arguments);
										};
									}());
								}

							case 8:
							case "end":
								return _context7.stop();
						}
					}
				}, _callee7, _this2);
			}));

			return function (_x5) {
				return _ref5.apply(this, arguments);
			};
		}();

		_this.onSubmit = function () {
			var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(event) {
				return _regenerator2.default.wrap(function _callee10$(_context10) {
					while (1) {
						switch (_context10.prev = _context10.next) {
							case 0:
								event.preventDefault();
								_context10.next = 3;
								return _web.web3.eth.getAccounts();

							case 3:
								accounts = _context10.sent;

								if (_web.metamask_provider == false || accounts.length == 0) {
									_this.setState({ metamask: false });
								} else {
									_this.setState({ metamask: true, uploading: true });
									_ipfs2.default.files.add(_this.state.buffer, function () {
										var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(error, result) {
											var posts, new_posts, file_uploader;
											return _regenerator2.default.wrap(function _callee9$(_context9) {
												while (1) {
													switch (_context9.prev = _context9.next) {
														case 0:
															if (!error) {
																_context9.next = 3;
																break;
															}

															console.error(error);
															return _context9.abrupt("return");

														case 3:
															_context9.next = 5;
															return _factory2.default.methods.createPost(result[0].hash, _this.state.content).send({ from: accounts[0] });

														case 5:
															_context9.next = 7;
															return _factory2.default.methods.getPosts().call();

														case 7:
															posts = _context9.sent;
															_context9.next = 10;
															return function () {
																var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(posts) {
																	var new_posts, i, Post, currentPost;
																	return _regenerator2.default.wrap(function _callee8$(_context8) {
																		while (1) {
																			switch (_context8.prev = _context8.next) {
																				case 0:
																					new_posts = [];
																					i = 0;

																				case 2:
																					if (!(i < posts.length)) {
																						_context8.next = 21;
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
																					_context8.next = 15;
																					return Post.methods.getComments().call();

																				case 15:
																					_context8.t3 = _context8.sent;
																					currentPost = {
																						imageUrl: _context8.t0,
																						author: _context8.t1,
																						content: _context8.t2,
																						comments: _context8.t3
																					};

																					new_posts.push(currentPost);

																				case 18:
																					i++;
																					_context8.next = 2;
																					break;

																				case 21:
																					return _context8.abrupt("return", new_posts);

																				case 22:
																				case "end":
																					return _context8.stop();
																			}
																		}
																	}, _callee8, this);
																}));

																return function (_x12) {
																	return _ref10.apply(this, arguments);
																};
															}()(posts);

														case 10:
															new_posts = _context9.sent;

															_this.setState({
																posts: new_posts,
																content: "",
																uploading: false
															});
															file_uploader = document.getElementById("file_upload");

															file_uploader.value = "";

														case 14:
														case "end":
															return _context9.stop();
													}
												}
											}, _callee9, _this2);
										}));

										return function (_x10, _x11) {
											return _ref9.apply(this, arguments);
										};
									}());
								}

							case 5:
							case "end":
								return _context10.stop();
						}
					}
				}, _callee10, _this2);
			}));

			return function (_x9) {
				return _ref8.apply(this, arguments);
			};
		}();

		_this.imageZoom = function () {
			var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(event) {
				return _regenerator2.default.wrap(function _callee11$(_context11) {
					while (1) {
						switch (_context11.prev = _context11.next) {
							case 0:
								event.preventDefault();
								if (_this.state.zoomed !== null) {
									_this.setState({ zoomed: null });
								} else {
									_this.setState({ zoomed: event.target.getAttribute("src") });
								}

							case 2:
							case "end":
								return _context11.stop();
						}
					}
				}, _callee11, _this2);
			}));

			return function (_x13) {
				return _ref11.apply(this, arguments);
			};
		}();

		_this.readContent = function (event) {
			event.preventDefault();
			_this.setState({ content: event.target.value });
		};

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
		return _this;
	}

	(0, _createClass3.default)(PostIndex, [{
		key: "componentDidMount",
		value: function () {
			var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12() {
				return _regenerator2.default.wrap(function _callee12$(_context12) {
					while (1) {
						switch (_context12.prev = _context12.next) {
							case 0:
								_context12.next = 2;
								return _web.web3.eth.getAccounts();

							case 2:
								accounts = _context12.sent;

								this.setState({ loading: false });

							case 4:
							case "end":
								return _context12.stop();
						}
					}
				}, _callee12, this);
			}));

			function componentDidMount() {
				return _ref12.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: "render",
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement("div", { className: "container", __source: {
					fileName: _jsxFileName,
					lineNumber: 292
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 293
				}
			}, _react2.default.createElement("title", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 294
				}
			}, "DOSN"), _react2.default.createElement("link", {
				href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
				rel: "stylesheet",
				integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
				crossorigin: "anonymous",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 295
				}
			}), _react2.default.createElement("link", {
				rel: "stylesheet",
				href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 301
				}
			}), _react2.default.createElement("script", {
				src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
				integrity: "sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p",
				crossorigin: "anonymous",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 305
				}
			}), _react2.default.createElement("script", {
				src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",
				integrity: "sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF",
				crossorigin: "anonymous",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 310
				}
			}), _react2.default.createElement("script", { src: "https://cdn.jsdelivr.net/npm/jdenticon@2.2.0", __source: {
					fileName: _jsxFileName,
					lineNumber: 315
				}
			})), this.state.is_donate == true && _react2.default.createElement(_DonateCard2.default, {
				min_tip: this.state.min_tip,
				isdonatebuttonon: this.isdonatebuttonon,
				takeback: this.takeback,
				transact: this.transact,
				disable_transact_okay: this.state.disable_transact_okay,
				donating: this.state.donating,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 318
				}
			}), this.state.metamask == false && _react2.default.createElement(_MetamaskCard2.default, { takeback: this.takeback, __source: {
					fileName: _jsxFileName,
					lineNumber: 328
				}
			}), this.state.loading && _react2.default.createElement(_LoadingCard2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 330
				}
			}), this.state.zoomed !== null && _react2.default.createElement(_ZoomedImage2.default, {
				zoomed: this.state.zoomed,
				imageZoom: this.imageZoom,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 332
				}
			}), _react2.default.createElement(_TweetForm2.default, {
				content: this.state.content,
				uploading: this.state.uploading,
				submit: this.onSubmit,
				readContent: this.readContent,
				captureFile: this.captureFile,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 337
				}
			}), _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 344
				}
			}, this.state.posts.slice(0).reverse().map(function (post, index) {
				return _react2.default.createElement(_TweetCard2.default, {
					postLength: _this3.state.posts.length,
					post: post,
					index: index,
					imageZoom: _this3.imageZoom,
					donate: _this3.donate,
					commentHide: _this3.commentHide,
					postComment: _this3.postComment,
					readContent: _this3.readContent,
					content: _this3.state.content,
					captureFile: _this3.captureFile,
					uploading: _this3.state.uploading,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 349
					}
				});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGluayIsIlBvc3RGYWN0b3J5IiwiUG9zdENvbnRyYWN0IiwiaXBmcyIsIndlYjMiLCJtZXRhbWFza19wcm92aWRlciIsIkhlYWQiLCJUd2VldEZvcm0iLCJUd2VldENhcmQiLCJMb2FkaW5nQ2FyZCIsIlpvb21lZEltYWdlIiwiTWV0YW1hc2tDYXJkIiwiRG9uYXRlQ2FyZCIsImFjY291bnRzIiwiUG9zdEluZGV4IiwicHJvcHMiLCJpc2RvbmF0ZWJ1dHRvbm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld192YWx1ZSIsInRhcmdldCIsInZhbHVlIiwic3RhdGUiLCJtaW5fdGlwIiwic2V0U3RhdGUiLCJkaXNhYmxlX3RyYW5zYWN0X29rYXkiLCJjYXB0dXJlRmlsZSIsImZpbGUiLCJmaWxlcyIsInJlYWRlciIsIndpbmRvdyIsIkZpbGVSZWFkZXIiLCJyZWFkQXNBcnJheUJ1ZmZlciIsIm9ubG9hZGVuZCIsImJ1ZmZlciIsIkJ1ZmZlciIsInJlc3VsdCIsInRha2ViYWNrIiwibWV0YW1hc2siLCJpc19kb25hdGUiLCJkb25hdGUiLCJwZXJzaXN0IiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJtaW5fY29udHJpYnV0aW9uIiwiY2FsbCIsInRpcCIsInV0aWxzIiwiZnJvbVdlaSIsInRpcF9wb3N0X2tleSIsImdldEF0dHJpYnV0ZSIsInRyYW5zYWN0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJsZW5ndGgiLCJkb25hdGluZyIsImluZGV4IiwiZGVwbG95ZWRQb3N0cyIsImFkZHJlc3MiLCJwb3N0IiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiLCJyZWNlaXZlQ29udHJpYnV0aW9uIiwic2VuZCIsImZyb20iLCJ0b1dlaSIsImNvbW1lbnRIaWRlIiwiY29tbWVudHNfZGl2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsImNvbW1lbnRzX2FkZHJlc3MiLCJwb3N0cyIsImNvbW1lbnRzIiwibmV3X2NvbW1lbnRzIiwiaSIsIkNvbW1lbnQiLCJpbWFnZV9oYXNoIiwiYXV0aG9yIiwiY29udGVudCIsImN1cnJlbnRDb21tZW50IiwiaW1hZ2VVcmwiLCJwdXNoIiwibmV3X3Bvc3RzIiwicG9zdENvbW1lbnQiLCJwYXJlbnRfaW5kZXgiLCJ1cGxvYWRpbmciLCJhZGQiLCJlcnJvciIsInBhcmVudF9hZGRyZXNzIiwiY3JlYXRlQ29tbWVudCIsImhhc2giLCJwYXJlbnRfcG9zdCIsImdldENvbW1lbnRzIiwiZmlsZV91cGxvYWRlciIsIm9uU3VibWl0IiwiY3JlYXRlUG9zdCIsImdldFBvc3RzIiwiUG9zdCIsImN1cnJlbnRQb3N0IiwiaW1hZ2Vab29tIiwiem9vbWVkIiwicmVhZENvbnRlbnQiLCJsb2FkaW5nIiwibWF0YW1hc2siLCJzbGljZSIsInJldmVyc2UiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQXlCOztBQUN4QyxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQWdCOzs7Ozs7Ozs7QUFFdkIsSUFBSSxXQUFKLEFBQWU7O0ksQUFFVDtvQ0FDTDs7b0JBQUEsQUFBWSxPQUFPO2VBQUE7O3NDQUFBOzswSUFBQSxBQUNaOztRQURZLEFBOENuQixtQkFBbUIsVUFBQSxBQUFDLE9BQVUsQUFDN0I7U0FBQSxBQUFNLEFBQ047T0FBSSxZQUFKLEFBQWdCLEFBQ2hCO09BQUksTUFBQSxBQUFNLE9B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TixLQUFBLEFBQUssUUFBTCxBQUFhLFNBVFAsQUFTTixBQUFzQjs7a0JBVGhCO3lDQUFBO2dDQUFBO3FCQVVMLEtBQUEsQUFBSyxRQUFMLEFBQWEsVUFWUixBQVVMLEFBQXVCOztrQkFWbEI7eUNBQUE7Z0NBQUE7cUJBV0osS0FBQSxBQUFLLFFBQUwsQUFBYSxjQVhULEFBV0osQUFBMkI7O2tCQVh2Qjt5Q0FPZjtBQVBlO0FBQUEsb0NBU3BCO0FBVG9CLGtDQVVwQjtBQVZvQixtQ0FXcEI7QUFYb0Isb0NBQUEsQUFhckI7QUFMQzs7d0JBS0QsQUFBVSxLQWJXLEFBYXJCLEFBQWU7O2tCQVhrQjtBQUZaO2dDQUFBO0FBQUE7O2tCQUFBO2lEQUFBLEFBZWY7O2tCQWZlO2tCQUFBO2dDQUFBOztBQUFBO3dCQUFBO0FBQUQ7O2dDQUFBO29DQUFBO0FBQUE7U0FBQSxHLEFBQUEsQUFnQm5COztZQWhCQztBOzJDQWlCRyxFQUFFLE8sQUFBRixBQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUE1Q00sQUFnV3hCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2F0dWxzaW5naC9Qcm9qZWN0cy9EZWNlbnRyYWxpemVkX09TTiJ9