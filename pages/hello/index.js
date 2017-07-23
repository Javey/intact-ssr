const Layout = require('../layout');
let template;
if (typeof window === 'undefined') {
    template = Vdt.require('./hello.vdt', __filename);
} else {
    template = require('./hello.vdt');
}

module.exports = Intact.extend({
    template: template 
});
