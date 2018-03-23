var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./cciyc_webapi/routes/routes.js'); //importing route
routes(app); //register the route

var server = app.listen(port, function () {
    console.log('CCIYC Web APIv2 server started on: ' + port);
});


