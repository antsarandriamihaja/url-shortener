var express = require('express');
var app = express();
//var mongo= require('mongodb').MongoClient;
var path = require('path');

//configure app
//tell express to serve files in the public folder
app.use(express.static(path.join(__dirname, 'public')));

//serve homepage (index.html)
app.get('/', function(req,res){ 
    //route to serve homepage
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(8080, function(){
    console.log("Server listening on port 8080");
})