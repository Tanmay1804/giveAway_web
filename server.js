var express = require("express");
 
var app = express();
	
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/assets/css'));
app.use('/js', express.static(__dirname + '/public/assets/js'));
app.use('/images', express.static(__dirname + '/public/assets/images'));

var server = app.listen(8081, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
