const Server = require("./models/server.js") 
require('dotenv').config();
const server = new Server();

server.execute();


//Servidor de express
//const express= require('express'); 
//const app = express();

//Servidor de Socket
//const server = require('http').createServer(app);

//Configuracion del socker server
//const io = require('socket.io')(server);

//Desplegar directorio publico
//app.use(express.static( __dirname + '/public')); 


//io.on('connection', ( socket ) => { 

    //Escuchar evento del lado del cliente que ha sido enviado del servidor
    //socket.on( 'mensaje-to-server', ( data )=> {
        //console.log(data);
        //socket.emit('mensaje-from-cliente', data);
    //    io.emit('mensaje-from-cliente', data);
    //});

    //Emitir el evento del servidor hacia el cliente
    //socket.emit('mensaje-bienvenida', {
    //    msg:'Bienvenido al chat del server',
    //    fecha: new Date()
    //});

    //Escuchar evento del lado del cliente que ha sido enviado del servidor
    //socket.on('mensaje-cliente', ( data )=> {
    //    console.log(data);
    //});
 //});

  //Escuchar el evento
  //mensaje-cliente
  // { msg:'mensaje-cliente', name:'Pedro'}
  


//server.listen(8080, () => {
//    console.log('Server corriendo el puerto: 8080');
//});