var template = require('./app.vdt');
import serverStyleCleanup from 'node-style-loader/clientCleanup'

module.exports = Intact.extend({
    defaults: {
        view: '',
        container: null
    },

    template: template,

    _init: function() {

    },

    load: function(Widget, data) {
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

    run(data) {
        return (Component) => {
            this.load(Component, data).then(() => {
                if (!this.rendered) {
                    Intact.hydrate(this, this.get('container'));
                    serverStyleCleanup();
                }
            });
        };
    }
});
