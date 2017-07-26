import Intact from 'intact';
import Vdt from 'vdt';
import {Router} from 'director';
import _ from 'lodash';

window.Intact = Intact;
window.Vdt = Vdt;

const App = require('./components/app');

const app = new App({
    container: document.getElementById('app')
});

const router = Router({
    '/': function() {
        require(['./pages/index'], app.run());
    },
    '/hello': function() {
        require(['./pages/hello'], app.run());
    }
}).configure({
    html5history: true,
    run_handler_in_init: true,
    convert_hash_in_init: false 
});

router.init();

app.router = router;
window.app = app;
