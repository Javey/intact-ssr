webpackJsonp([1],{

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

var Layout = __webpack_require__(34);
var template = void 0;
if (typeof window === 'undefined') {
    template = Vdt.require('./hello.vdt', __filename);
} else {
    template = __webpack_require__(35);
}

module.exports = Intact.extend({
    template: template
});
/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Intact.extend({
    _init: function _init() {
        this.set('a', 1);
    }
});

/***/ }),

/***/ 35:
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
const layout = __webpack_require__(36);

return (function(blocks) {
var _blocks = {}, __blocks = extend({}, blocks), _obj = null || {};
if (_obj.hasOwnProperty("arguments")) { extend(_obj, _obj.arguments === null ? obj : _obj.arguments); delete _obj.arguments; }
return layout.call(this, _obj, _Vdt, (_blocks.container = function(parent) {return ['\n        Hello Intact ', function() {try {return [ self.get('a') ][0]} catch(e) {_e(e)}}.call(this), '\n    '];}) && (__blocks.container = function(parent) {
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

/***/ 36:
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

/***/ })

});