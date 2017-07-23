const Express = require('express');
const Intact = require('intact');
const Vdt = require('vdt');
const path = require('path');
const Router = require('director').http.Router;
const routes = require('./routes');
const _ = require('lodash');

const app = Express();

global.Intact = Intact;
global.Vdt = Vdt;

app.engine('vdt', Vdt.__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'vdt');
Vdt.setDefaults({'delimiters': ['{{', '}}']});

const Root = require('./components/app');
const router = new Router(_.mapValues(routes, (item) => {
    return {
        get: function() {
            const root = new Root();
            root.load(require(item)).then(() => {
                this.res.render('index', {content: root.toString()});
            });
        }
    };
}));
app.use(function(req, res, next) {
    router.dispatch(req, res, function(err) {
        next();
    });
});

app.use('/dist', Express.static(path.join(__dirname, 'dist')));
// app.use('/components', Express.static(path.join(__dirname, 'components')));
// app.use('/pages', Express.static(path.join(__dirname, 'pages')));
// app.use('/node_modules', Express.static(path.join(__dirname, 'node_modules')));
// app.use('/client.js', Express.static(path.join(__dirname, '/client.js')));
// const fs = require('fs');
// app.use('/routes.js', function(req, res, next) {
    // var contents = fs.readFileSync(path.join(__dirname, '/routes.js'), 'utf8');
    // contents = umdify(contents);
    // res.end(contents);
// });

app.listen(3001);
