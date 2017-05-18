var app 	= require('express')();
var http 	= require('http').Server(app);
var io 		= require('socket.io')(http);

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});

//Notify on connect
io.on('connection',function(socket){
	console.log('--User Connected--');

//Notify on disconnect
socket.on('disconnect', function(){
	console.log('===User Disconnect===');

	});
});

//Chat message handler
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
  	io.emit('chat message',msg);
    console.log('message: ' + msg);
  });
});

http.listen(8000, function(){
	console.log('Listening on *:8000');
});