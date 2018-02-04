'use strict'

let express = require('express');
let app = express();
let hbs = require("hbs");
let db = require('mysql');
let connection = db.createConnection({
    host: 'localhost',
    user: 'shop',
    password: 'sh0ppassw0rd',
    database: 'shop'
});

let services = [];

connection.connect();

function renderServices(callback) {
    connection.query(
        'SELECT name FROM service',
        function(err, res) {
            if (err) {
                callback(err, null);
            } else
                callback(null, res);
        }
    )
}

renderServices(function (err, res) {
    if (err) {
        throw err;
    } else {
        let length = 0;
        while (length < res.length) {
            services.push(res[length].name);
            ++length;
        }
    }
})

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.get(/.*/, function(request, response) {
        if (
            /^\/script\//.test(request.url) ||
            /^\/css\//.test(request.url) ||
            /^\/img\//.test(request.url)
        ) {
            response.sendFile(request.url, {root: __dirname });
        } else {
            switch (request.url) {
                case '/': response.render('index.hbs',
                    {
                        service: services
                    }
                );
                break;
                case '/main': response.render('main' + request.url + '.hbs');
                break;
                default: response.render('error.hbs');
            }
        }
});
app.listen(4000);
