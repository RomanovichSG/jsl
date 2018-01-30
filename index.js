var express = require('express');
var app = express();
app.use(function(request, response, next) {
    console.log('/script' + request.url + '.js');
    next();
});
app.get(/.*/, function(request, response) {
    switch (request.url) {
        case '/': response.sendFile('index.html', {root: __dirname });
        break;
        default: response.sendFile('html' + request.url + '.html', {root: __dirname });
    }
});
app.listen(4000);