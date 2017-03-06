var express = require('express');
var app = express();

//configure app
//add middleware
//define routes

app.get('/', function(req,res){
    res.send('');
});

app.listen(8080, function(){
    console.log("Server listening on port 8080");
})