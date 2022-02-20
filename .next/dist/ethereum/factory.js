"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _PostFactory = require("./build/PostFactory.json");

var _PostFactory2 = _interopRequireDefault(_PostFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web.web3.eth.Contract(JSON.parse(_PostFactory2.default.interface), "0x78dC420cd74533442633c63BDb02A5cBA3ead1f8");

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIm1ldGFtYXNrX3Byb3ZpZGVyIiwiUG9zdEZhY3RvcnkiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFTLEFBQVQsQUFBZSxBQUFmLEFBQXdDLEFBQXhDOztBQUNBLEFBQU8sQUFBUCxBQUF3QixBQUF4Qjs7Ozs7O0FBRUEsSUFBTSxXQUFXLElBQUksVUFBSyxBQUFMLElBQVMsQUFBYixTQUNoQixLQUFLLEFBQUwsTUFBVyxzQkFBWSxBQUF2QixBQURnQixZQUVoQixBQUZnQixBQUFqQixBQUtBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYXR1bHNpbmdoL1Byb2plY3RzL0RlY2VudHJhbGl6ZWRfT1NOIn0=