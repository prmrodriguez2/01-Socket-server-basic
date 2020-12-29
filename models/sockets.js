class Sockets {

    constructor ( io ) {

        this.io = io;
        this.socketsEvent();

    }

    socketsEvent () {
        //Connection
        this.io.on('connection', ( socket ) => { 

            //Escuchar evento : mensaje-to-server 
            socket.on( 'mensaje-to-server', ( data ) => {
                console.log(data);
                //socket.emit('mensaje-from-cliente', data);
                this.io.emit('mensaje-from-cliente', data);
            });
        });

    }

}

module.exports = Sockets;