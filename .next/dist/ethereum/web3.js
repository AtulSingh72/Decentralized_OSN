"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.metamask_provider = exports.web3 = undefined;

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0,
    metamask_provider = void 0;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
	exports.web3 = web3 = new _web2.default(window.web3.currentProvider);
	exports.metamask_provider = metamask_provider = true;
} else {
	var provider = new _web2.default.providers.HttpProvider("http://10.42.0.86:7545");
	exports.web3 = web3 = new _web2.default(provider);
	exports.metamask_provider = metamask_provider = false;
}

exports.web3 = web3;
exports.metamask_provider = metamask_provider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJtZXRhbWFza19wcm92aWRlciIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFJLFlBQUo7SUFBVSx5QkFBVjs7QUFFQSxJQUFJLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLE9BQU8sQUFBZCxTQUF1QixBQUE1RCxhQUF5RSxBQUN4RTt1QkFBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNBO2lEQUFvQixBQUFwQixBQUNBO0FBSEQsT0FHTyxBQUNOO0tBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQWdDLEFBQWhDLEFBQWpCLEFBQ0E7dUJBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNBO2lEQUFvQixBQUFwQixBQUNBO0FBRUQ7O1FBQVMsQUFBVDtRQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hdHVsc2luZ2gvUHJvamVjdHMvRGVjZW50cmFsaXplZF9PU04ifQ==