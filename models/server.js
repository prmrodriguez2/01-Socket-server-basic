//Servidor de express
const express = require('express'); 
//Servidor de Socket
const http = require('http');
//Socket server
const socketio = require('socket.io');
//Path
const path = require('path');
//Sockets
const Sockets = require('./sockets');

class Server {

    constructor () {

        this.app = express();
        this.port = process.env.PORT;

        //Servidor de Socket
        this.server = http.createServer(this.app);

        //Configuracion del socker server
        this.io = socketio(this.server, { /* Configuraciones */ });
    
    }

    middlewares(){

        //Desplegar directorio publico
        this.app.use(express.static( path.resolve( __dirname, '../public' ) )); 

    }

    configurarSocket(){

        //Sockets
        new Sockets(this.io);
    }

    execute (){

        //Inicializar el middlewares
        this.middlewares();

         //Inicializar el middlewares
         this.configurarSocket();

        //Inicializar el server
        this.server.listen(this.port, () => {
            console.log('Server corriendo el puerto:', this.port);
        });
    }
}


module.exports = Server;