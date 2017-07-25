exports.ids = [1];
exports.modules = {

/***/ 7:
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

/***/ 9:
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

/***/ })

};;