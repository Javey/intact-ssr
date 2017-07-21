var template;
if (typeof window === 'undefined') {
    template = Vdt.require('./app.vdt', __filename);
} else {
    template = require('./app.vdt');
}


module.exports = Intact.extend({
    defaults: {
        view: ''
    },

    template: template,

    _init: function() {

    },

    load: function(Widget, data, callee) {
        return new Promise((resolve) => {
            function load() {
                var widget = new Widget(data);
                if (widget.inited) {
                    this.set('view', widget);
                    resolve();
                } else {
                    widget.one('$inited', () => {
                        this.set('view', widget);
                        resolve();
                    });
                }
            }
            if (this.inited) {
                load.call(this);
            } else {
                this.one('$inited', load);
            }
        });
    },

    run: function(data) {
        this.load();
    }
});
