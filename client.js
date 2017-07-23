import Intact from 'intact';
const Vdt = require('vdt');
window.Intact = Intact;
window.Vdt = Vdt;
const routes = require('./routes');
const App = require('./components/app');
const Router = require('director').Router;
const _ = require('lodash');

const app = new App();
const container = document.getElementById('app');

const router = Router({
    '/': function() {
        require(['./pages/index'], function(Component) {
            app.load(Component).then(() => {
                if (!app.rendered) {
                    Intact.hydrate(app, container);
                }
            });
        });
    },
    '/hello': function() {
        require(['./pages/hello'], function(Component) {
            app.load(Component).then(() => {
                if (!app.rendered) {
                    Intact.hydrate(app, container);
                }
            });
        });
    }
}).configure({
    html5history: true,
    run_handler_in_init: true,
    convert_hash_in_init: false 
});

router.init();

app.router = router;
window.app = app;
