import Express from 'express';
import Intact from 'intact';
import Vdt from 'vdt';
import path from 'path';
import {http} from 'director';
import {collectInitial} from 'node-style-loader/collect';
import _ from 'lodash';

const Router = http.Router;
const app = Express();

global.Intact = Intact;
global.Vdt = Vdt;

app.engine('vdt', Vdt.__express);
app.set('views', path.resolve(__dirname, '../views'));
app.set('view engine', 'vdt');
Vdt.setDefaults({'delimiters': ['{{', '}}']});

const Root = require('./components/app');
function run(Component) {
    return function() {
        const root = new Root();
        root.load(Component).then(() => {
            this.res.render('index', {
                content: root.toString(),
                style: collectInitial()
            });
        });
    };
}
const router = new Router({
    '/': {
        get: run(require('./pages/index'))
    },
    '/hello': {
        get: run(require('./pages/hello'))
    }
});
app.use(function(req, res, next) {
    router.dispatch(req, res, function(err) {
        next();
    });
});

app.use('/', Express.static(path.join(__dirname, '')));

app.listen(3001);
