import template from './index.vdt';
import css from './index.styl';

module.exports = Intact.extend({
    template: template,

    _init: function() {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.set('test', 1);
                resolve();
            }, 500);
        });
    },

    _create: function() {
        console.log('document');
    }
});
