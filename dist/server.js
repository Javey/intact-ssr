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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("intact");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vdt");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    '/': './pages/index',
    '/hello': './pages/hello'
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var template = __webpack_require__(4);

module.exports = Intact.extend({
    defaults: {
        view: ''
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
    }
});

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("director");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var template = __webpack_require__(9);

module.exports = Intact.extend({
    template: template,

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Layout = __webpack_require__(10);
var template = __webpack_require__(11);

module.exports = Intact.extend({
    template: template
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Intact.extend({
    _init: function _init() {
        this.set('a', 1);
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
const layout = __webpack_require__(12);

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
/* 12 */
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
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Express = __webpack_require__(15);
var Intact = __webpack_require__(0);
var Vdt = __webpack_require__(1);
var path = __webpack_require__(16);
var Router = __webpack_require__(5).http.Router;
var routes = __webpack_require__(2);
var _ = __webpack_require__(6);

var app = Express();

global.Intact = Intact;
global.Vdt = Vdt;

app.engine('vdt', Vdt.__express);
app.set('views', path.resolve(__dirname, '../views'));
app.set('view engine', 'vdt');
Vdt.setDefaults({ 'delimiters': ['{{', '}}'] });

var Root = __webpack_require__(3);
// const router = new Router(_.mapValues(routes, (item) => {
// return {
// get: function() {
// const root = new Root();
// root.load(require(item)).then(() => {
// this.res.render('index', {content: root.toString()});
// });
// }
// };
// }));
var router = new Router({
    '/': {
        get: function get() {
            var _this = this;

            var root = new Root();
            root.load(__webpack_require__(7)).then(function () {
                _this.res.render('index', { content: root.toString() });
            });
        }
    },
    '/hello': {
        get: function get() {
            var _this2 = this;

            var root = new Root();
            root.load(__webpack_require__(8)).then(function () {
                _this2.res.render('index', { content: root.toString() });
            });
        }
    }
});
app.use(function (req, res, next) {
    router.dispatch(req, res, function (err) {
        next();
    });
});

app.use('/', Express.static(path.join(__dirname, '')));
// app.use('/components', Express.static(path.join(__dirname, 'components')));
// app.use('/pages', Express.static(path.join(__dirname, 'pages')));
// app.use('/node_modules', Express.static(path.join(__dirname, 'node_modules')));
// app.use('/client.js', Express.static(path.join(__dirname, '/client.js')));
// const fs = require('fs');
// app.use('/routes.js', function(req, res, next) {
// var contents = fs.readFileSync(path.join(__dirname, '/routes.js'), 'utf8');
// contents = umdify(contents);
// res.end(contents);
// });

app.listen(3001);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ]);