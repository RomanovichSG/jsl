var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'shop',
    password: 'sh0ppassw0rd',
    database: 'shop'
});

connection.connect();

connection.query(
    'SHOW TABLES',
    function(err, res, fields) {
        if (err) throw err;
        console.log(res);
    }
);

connection.end();
