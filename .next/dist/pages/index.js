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

var _jsxFileName = "/home/atulsingh/Projects/Decentralized_OSN/pages/index.js?entry";


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
					lineNumber: 291
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 292
				}
			}, _react2.default.createElement("title", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 293
				}
			}, "DOSN"), _react2.default.createElement("link", {
				href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
				rel: "stylesheet",
				integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
				crossorigin: "anonymous",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 294
				}
			}), _react2.default.createElement("link", {
				rel: "stylesheet",
				href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 300
				}
			}), _react2.default.createElement("script", {
				src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
				integrity: "sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p",
				crossorigin: "anonymous",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 304
				}
			}), _react2.default.createElement("script", {
				src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",
				integrity: "sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF",
				crossorigin: "anonymous",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 309
				}
			}), _react2.default.createElement("script", { src: "https://cdn.jsdelivr.net/npm/jdenticon@2.2.0", __source: {
					fileName: _jsxFileName,
					lineNumber: 314
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
					lineNumber: 317
				}
			}), this.state.metamask == false && _react2.default.createElement(_MetamaskCard2.default, { takeback: this.takeback, __source: {
					fileName: _jsxFileName,
					lineNumber: 327
				}
			}), this.state.loading && _react2.default.createElement(_LoadingCard2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 329
				}
			}), this.state.zoomed !== null && _react2.default.createElement(_ZoomedImage2.default, {
				zoomed: this.state.zoomed,
				imageZoom: this.imageZoom,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 331
				}
			}), _react2.default.createElement(_TweetForm2.default, {
				content: this.state.content,
				uploading: this.state.uploading,
				submit: this.onSubmit,
				readContent: this.readContent,
				captureFile: this.captureFile,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 336
				}
			}), _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 343
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
						lineNumber: 348
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUG9zdEZhY3RvcnkiLCJQb3N0Q29udHJhY3QiLCJpcGZzIiwid2ViMyIsIm1ldGFtYXNrX3Byb3ZpZGVyIiwiSGVhZCIsIlR3ZWV0Rm9ybSIsIlR3ZWV0Q2FyZCIsIkxvYWRpbmdDYXJkIiwiWm9vbWVkSW1hZ2UiLCJNZXRhbWFza0NhcmQiLCJEb25hdGVDYXJkIiwiYWNjb3VudHMiLCJQb3N0SW5kZXgiLCJwcm9wcyIsImlzZG9uYXRlYnV0dG9ub24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmV3X3ZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJzdGF0ZSIsIm1pbl90aXAiLCJzZXRTdGF0ZSIsImRpc2FibGVfdHJhbnNhY3Rfb2theSIsImNhcHR1cmVGaWxlIiwiZmlsZSIsImZpbGVzIiwicmVhZGVyIiwid2luZG93IiwiRmlsZVJlYWRlciIsInJlYWRBc0FycmF5QnVmZmVyIiwib25sb2FkZW5kIiwiYnVmZmVyIiwiQnVmZmVyIiwicmVzdWx0IiwidGFrZWJhY2siLCJtZXRhbWFzayIsImlzX2RvbmF0ZSIsImRvbmF0ZSIsInBlcnNpc3QiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsIm1pbl9jb250cmlidXRpb24iLCJjYWxsIiwidGlwIiwidXRpbHMiLCJmcm9tV2VpIiwidGlwX3Bvc3Rfa2V5IiwiZ2V0QXR0cmlidXRlIiwidHJhbnNhY3QiLCJldGgiLCJnZXRBY2NvdW50cyIsImxlbmd0aCIsImRvbmF0aW5nIiwiaW5kZXgiLCJkZXBsb3llZFBvc3RzIiwiYWRkcmVzcyIsInBvc3QiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsInJlY2VpdmVDb250cmlidXRpb24iLCJzZW5kIiwiZnJvbSIsInRvV2VpIiwiY29tbWVudEhpZGUiLCJjb21tZW50c19kaXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5IiwiY29tbWVudHNfYWRkcmVzcyIsInBvc3RzIiwiY29tbWVudHMiLCJuZXdfY29tbWVudHMiLCJpIiwiQ29tbWVudCIsImltYWdlX2hhc2giLCJhdXRob3IiLCJjb250ZW50IiwiY3VycmVudENvbW1lbnQiLCJpbWFnZVVybCIsInB1c2giLCJuZXdfcG9zdHMiLCJwb3N0Q29tbWVudCIsInBhcmVudF9pbmRleCIsInVwbG9hZGluZyIsImFkZCIsImVycm9yIiwicGFyZW50X2FkZHJlc3MiLCJjcmVhdGVDb21tZW50IiwiaGFzaCIsInBhcmVudF9wb3N0IiwiZ2V0Q29tbWVudHMiLCJmaWxlX3VwbG9hZGVyIiwib25TdWJtaXQiLCJjcmVhdGVQb3N0IiwiZ2V0UG9zdHMiLCJQb3N0IiwiY3VycmVudFBvc3QiLCJpbWFnZVpvb20iLCJ6b29tZWQiLCJyZWFkQ29udGVudCIsImxvYWRpbmciLCJtYXRhbWFzayIsInNsaWNlIiwicmV2ZXJzZSIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUF5Qjs7QUFDeEMsQUFBTzs7OztBQUNQLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0FBRXZCLElBQUksV0FBSixBQUFlOztJLEFBRVQ7b0NBQ0w7O29CQUFBLEFBQVksT0FBTztlQUFBOztzQ0FBQTs7MElBQUEsQUFDWjs7UUFEWSxBQThDbkIsbUJBQW1CLFVBQUEsQUFBQyxPQUFVLEFBQzdCO1NBQUEsQUFBTSxBQUNOO09BQUksWUFBSixBQUFnQixBQUNoQjtPQUFJLE1BQUEsQUFBTSxPQUFOLEFBQWEsU0FBUyxNQUFBLEFB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YSxTQVRQLEFBU04sQUFBc0I7O2tCQVRoQjt5Q0FBQTtnQ0FBQTtxQkFVTCxLQUFBLEFBQUssUUFBTCxBQUFhLFVBVlIsQUFVTCxBQUF1Qjs7a0JBVmxCO3lDQUFBO2dDQUFBO3FCQVdKLEtBQUEsQUFBSyxRQUFMLEFBQWEsY0FYVCxBQVdKLEFBQTJCOztrQkFYdkI7eUNBT2Y7QUFQZTtBQUFBLG9DQVNwQjtBQVRvQixrQ0FVcEI7QUFWb0IsbUNBV3BCO0FBWG9CLG9DQUFBLEFBYXJCO0FBTEM7O3dCQUtELEFBQVUsS0FiVyxBQWFyQixBQUFlOztrQkFYa0I7QUFGWjtnQ0FBQTtBQUFBOztrQkFBQTtpREFBQSxBQWVmOztrQkFmZTtrQkFBQTtnQ0FBQTs7QUFBQTt3QkFBQTtBQUFEOztnQ0FBQTtvQ0FBQTtBQUFBO1NBQUEsR0FnQm5CLEEsQUFoQm1COztZQUFsQjtBOzJDQWlCRyxFQUFFLE9BQUYsQSxBQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNUNNLEEsQUFnV3hCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2F0dWxzaW5naC9Qcm9qZWN0cy9EZWNlbnRyYWxpemVkX09TTiJ9