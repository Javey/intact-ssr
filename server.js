var Express = require('express');
var Intact = require('intact');

var Component = Intact.extend({
    template: '<div>Hello Intact</div>'
});

var app = Express();

app.get('/', function(req, res) {
    res.send((new Component()).toString());
});

app.listen(3000);
