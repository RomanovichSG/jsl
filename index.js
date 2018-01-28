var express = require('express');
var app = express();
app.use(function(request, response, next){
    console.log(request.url);
    next();
});
app.get("/", function(request, response){
    response.sendFile('html/main.html', {root: __dirname });
});
app.listen(4000);