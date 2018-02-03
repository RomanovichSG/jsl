var express = require('express');
var app = express();

app.get(/.*/, function(request, response) {
        if (
            /^\/script\//.test(request.url) ||
            /^\/css\//.test(request.url) ||
            /^\/img\//.test(request.url)
        ) {
            response.sendFile(request.url, {root: __dirname });
        } else {
            switch (request.url) {
                case '/': response.sendFile('index.html', {root: __dirname });
                break;
                default: response.sendFile('html' + request.url + '.html', {root: __dirname });
            }
        }
});
app.listen(4000);