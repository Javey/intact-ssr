/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _intact = __webpack_require__(2);

var _intact2 = _interopRequireDefault(_intact);

var _vdt = __webpack_require__(3);

var _vdt2 = _interopRequireDefault(_vdt);

var _path = __webpack_require__(4);

var _path2 = _interopRequireDefault(_path);

var _director = __webpack_require__(5);

var _collect = __webpack_require__(15);

var _lodash = __webpack_require__(7);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = _director.http.Router;
var app = (0, _express2.default)();

global.Intact = _intact2.default;
global.Vdt = _vdt2.default;

app.engine('vdt', _vdt2.default.__express);
app.set('views', _path2.default.resolve(__dirname, '../views'));
app.set('view engine', 'vdt');
_vdt2.default.setDefaults({ 'delimiters': ['{{', '}}'] });

var Root = __webpack_require__(8);
function run(Component) {
    return function () {
        var _this = this;

        var root = new Root();
        root.load(Component).then(function () {
            _this.res.render('index', {
                content: root.toString(),
                style: (0, _collect.collectInitial)()
            });
        });
    };
}
var router = new Router({
    '/': {
        get: run(__webpack_require__(10))
    },
    '/hello': {
        get: run(__webpack_require__(17))
    }
});
app.use(function (req, res, next) {
    router.dispatch(req, res, function (err) {
        next();
    });
});

app.use('/', _express2.default.static(_path2.default.join(__dirname, '')));

app.listen(3001);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("intact");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vdt");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("director");

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _clientCleanup = __webpack_require__(21);

var _clientCleanup2 = _interopRequireDefault(_clientCleanup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = __webpack_require__(9);


module.exports = Intact.extend({
    defaults: {
        view: '',
        container: null
    },

    template: template,

    _init: function _init() {},

    load: function load(Widget, data) {
        var _this2 = this;

        return new Promise(function (resolve) {
            function load() {
                var _this = this;

                var widget = new Widget(data);
                if (widget.inited) {
                    this.set('view', widget);
                    resolve();
                } else {
                    widget.one('$inited', function () {
                        _this.set('view', widget);
                        resolve();
                    });
                }
            }
            if (_this2.inited) {
                load.call(_this2);
            } else {
                _this2.one('$inited', load);
            }
        });
    },

    run: function run(data) {
        var _this3 = this;

        return function (Component) {
            _this3.load(Component, data).then(function () {
                if (!_this3.rendered) {
                    Intact.hydrate(_this3, _this3.get('container'));
                    (0, _clientCleanup2.default)();
                }
            });
        };
    }
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(obj, _Vdt, blocks) {
if (false) {
    var __this = this;
    module.hot.dispose(function(data) {
        data.vdt = __this;
        data.isParent = __this.data !== obj;
    })
}

_Vdt || (_Vdt = Vdt);
obj || (obj = {});
blocks || (blocks = {});
var h = _Vdt.miss.h, hc = _Vdt.miss.hc, widgets = this && this.widgets || {}, _blocks = {}, __blocks = {},
__u = _Vdt.utils, extend = __u.extend, _e = __u.error, _className = __u.className,
__o = __u.Options, _getModel = __o.getModel, _setModel = __o.setModel,
_setCheckboxModel = __u.setCheckboxModel, _detectCheckboxChecked = __u.detectCheckboxChecked,
_setSelectModel = __u.setSelectModel,
self = this.data, scope = obj;
return h('div', null, h('div', null, function() {try {return [ self.get('view') ][0]} catch(e) {_e(e)}}.call(this), 'c-flex-1', 'view'), 'c-flex-1')
}
if (false) {
    module.hot.accept();
    var vdt = module.hot.data && module.hot.data.vdt
    if (vdt) {
        if (!module.hot.data.isParent) {
            vdt.template = module.exports;
        }
        vdt.update();
    }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(11);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(12);

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Intact.extend({
    template: _index2.default,

    _init: function _init() {
        var _this = this;

        return new Promise(function (resolve) {
            setTimeout(function () {
                _this.set('test', 1);
                resolve();
            }, 500);
        });
    },

    _create: function _create() {
        console.log('document');
    }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(obj, _Vdt, blocks) {
if (false) {
    var __this = this;
    module.hot.dispose(function(data) {
        data.vdt = __this;
        data.isParent = __this.data !== obj;
    })
}

_Vdt || (_Vdt = Vdt);
obj || (obj = {});
blocks || (blocks = {});
var h = _Vdt.miss.h, hc = _Vdt.miss.hc, widgets = this && this.widgets || {}, _blocks = {}, __blocks = {},
__u = _Vdt.utils, extend = __u.extend, _e = __u.error, _className = __u.className,
__o = __u.Options, _getModel = __o.getModel, _setModel = __o.setModel,
_setCheckboxModel = __u.setCheckboxModel, _detectCheckboxChecked = __u.detectCheckboxChecked,
_setSelectModel = __u.setSelectModel,
self = this.data, scope = obj;
return h('div', null, h('span', null, ['\n        index page ', function() {try {return [ self.get('test') ][0]} catch(e) {_e(e)}}.call(this), function() {try {return [ undefined ][0]} catch(e) {_e(e)}}.call(this), ' a\n    ']))
}
if (false) {
    module.hot.accept();
    var vdt = module.hot.data && module.hot.data.vdt
    if (vdt) {
        if (!module.hot.data.isParent) {
            vdt.template = module.exports;
        }
        vdt.update();
    }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-collector: Loads CSS like style-loader, but pass the content to the style collector instead of inserting in the DOM

// load the styles
var content = __webpack_require__(13);
if (typeof content === 'string') content = [[module.i, content, '']];
// collect the styles
__webpack_require__(15).add(content, {});
if (content.locals) module.exports = content.locals;
delete __webpack_require__.c[module.i];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(undefined);
// imports


// module
exports.push([module.i, "span {\n  color: #f00;\n}\n", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var styleStack = __webpack_require__(16);
// it's necessary setting initialStyleStack as it may not be required as the same module between webpack and the user
// due to path differences in certain scenarios
global.initialStyleStack = global.initialStyleStack !== undefined ? global.initialStyleStack : new styleStack();

// initial style collection
exports.add = add.bind(null, initialStyleStack);

exports.collectInitial = function collectInitial() {
  var styleTag = initialStyleStack.getStyleTag();
  exports.add = inactiveAdd;
  // commented-out so it doesn't have to be stored by the user and to test hot-reload
  //initialStyleStack = undefined;
  return styleTag;
};

exports.collectContext = function collectContext(fn) {

  var contextStyleStack = new styleStack();

  // include path differences may make this fail, TODO: test
  exports.add = add.bind(null, contextStyleStack);
  var result = fn();
  exports.add = inactiveAdd;

  return [contextStyleStack.getStyleTag(), result];
};

function add(stack, list, options) {
  var styles = styleStack.listToStyles(list);
  stack.addStylesToStack(styles, options);
}

function inactiveAdd() {}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var styleStack = module.exports = function styleStack() {
  this.stylesInStack = {}; // this is stylesInDom in style-loader
  this.stackStyleElement = { // this is roughly equivalent to singletonElement in style-loader
    cssText: ""
  };
  this.singletonCounter = 0;
};

styleStack.prototype.addStylesToStack = function addStylesToStack(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var stackStyle = this.stylesInStack[item.id];
    if (stackStyle) {
      stackStyle.refs++;
      for (var j = 0; j < stackStyle.parts.length; j++) {
        stackStyle.parts[j](item.parts[j]); // calls updateStyle function
      }
      for (; j < item.parts.length; j++) {
        stackStyle.parts.push(this.addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(this.addStyle(item.parts[j], options));
      }
      this.stylesInStack[item.id] = { id: item.id, refs: 1, parts: parts };
    }
  }
};

styleStack.prototype.addStyle = function addStyle(obj) {
  var styleIndex = this.singletonCounter++;
  var update = applyToSingletonTag.bind(null, this.stackStyleElement, styleIndex);

  update(obj); // call update once for first insertion

  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
      update(obj = newObj); // this case is not properly handled and would only be reached
      // if re-including a style while specifying a different sourceMap or media option
    }
  };
};

styleStack.prototype.getStyleTag = function getStyleTag() {
  return '<style class="server-style-loader-element">' + this.stackStyleElement.cssText + '</style>';
};

function applyToSingletonTag(styleElement, index, obj) {
  styleElement.cssText = replaceText(index, obj.css);
}

module.exports.listToStyles = function listToStyles(list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = { css: css, media: media, sourceMap: sourceMap };
    if (!newStyles[id]) styles.push(newStyles[id] = { id: id, parts: [part] });else newStyles[id].parts.push(part);
  }
  return styles;
};

var replaceText = function () {
  var textStore = [];

  return function (index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Layout = __webpack_require__(18);
var template = __webpack_require__(19);

module.exports = Intact.extend({
    template: template
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Intact.extend({
    _init: function _init() {
        this.set('a', 1);
    }
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(obj, _Vdt, blocks) {
if (false) {
    var __this = this;
    module.hot.dispose(function(data) {
        data.vdt = __this;
        data.isParent = __this.data !== obj;
    })
}

_Vdt || (_Vdt = Vdt);
obj || (obj = {});
blocks || (blocks = {});
var h = _Vdt.miss.h, hc = _Vdt.miss.hc, widgets = this && this.widgets || {}, _blocks = {}, __blocks = {},
__u = _Vdt.utils, extend = __u.extend, _e = __u.error, _className = __u.className,
__o = __u.Options, _getModel = __o.getModel, _setModel = __o.setModel,
_setCheckboxModel = __u.setCheckboxModel, _detectCheckboxChecked = __u.detectCheckboxChecked,
_setSelectModel = __u.setSelectModel,
self = this.data, scope = obj;
const layout = __webpack_require__(20);

return (function(blocks) {
var _blocks = {}, __blocks = extend({}, blocks), _obj = null || {};
if (_obj.hasOwnProperty("arguments")) { extend(_obj, _obj.arguments === null ? obj : _obj.arguments); delete _obj.arguments; }
return layout.call(this, _obj, _Vdt, (_blocks.container = function(parent) {return ['Hello Intact ', function() {try {return [ self.get('a') ][0]} catch(e) {_e(e)}}.call(this)];}) && (__blocks.container = function(parent) {
var self = this;
return blocks.container ? blocks.container.call(this, function() {
return _blocks.container.call(self, parent);
}) : _blocks.container.call(this, parent);
}) && __blocks)}).call(this, blocks)
}
if (false) {
    module.hot.accept();
    var vdt = module.hot.data && module.hot.data.vdt
    if (vdt) {
        if (!module.hot.data.isParent) {
            vdt.template = module.exports;
        }
        vdt.update();
    }
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(obj, _Vdt, blocks) {
if (false) {
    var __this = this;
    module.hot.dispose(function(data) {
        data.vdt = __this;
        data.isParent = __this.data !== obj;
    })
}

_Vdt || (_Vdt = Vdt);
obj || (obj = {});
blocks || (blocks = {});
var h = _Vdt.miss.h, hc = _Vdt.miss.hc, widgets = this && this.widgets || {}, _blocks = {}, __blocks = {},
__u = _Vdt.utils, extend = __u.extend, _e = __u.error, _className = __u.className,
__o = __u.Options, _getModel = __o.getModel, _setModel = __o.setModel,
_setCheckboxModel = __u.setCheckboxModel, _detectCheckboxChecked = __u.detectCheckboxChecked,
_setSelectModel = __u.setSelectModel,
self = this.data, scope = obj;
return h('div', null, (_blocks.container = function(parent) {return null;}) && (__blocks.container = function(parent) {
var self = this;
return blocks.container ? blocks.container.call(this, function() {
return _blocks.container.call(self, parent);
}) : _blocks.container.call(this, parent);
}) && __blocks.container.call(this), 'layout')
}
if (false) {
    module.hot.accept();
    var vdt = module.hot.data && module.hot.data.vdt
    if (vdt) {
        if (!module.hot.data.isParent) {
            vdt.template = module.exports;
        }
        vdt.update();
    }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function clientCleanup() {
  var elements = document.getElementsByClassName('server-style-loader-element');
  Array.prototype.forEach.call(elements, function (element) {
    element.remove();
  });
};

/***/ })
/******/ ]);