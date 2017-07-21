webpackJsonp([0],{

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

var template;
if (typeof window === 'undefined') {
    template = Vdt.require('./index.vdt', __filename);
} else {
    template = __webpack_require__(29);
}

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
/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ }),

/***/ 29:
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
return h('div', null, ['\n    index page ', function() {try {return [ self.get('test') ][0]} catch(e) {_e(e)}}.call(this), '\n'])
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