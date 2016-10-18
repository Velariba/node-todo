var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/api', require('./routes')(app, express));

app.listen('3000', () => console.log('Server has started!'));

