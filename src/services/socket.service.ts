import { Injectable } from '@nestjs/common';
import { Server } from 'socket.io';

@Injectable()
export class SocketService {
  connect(): any {
    const io = new Server();

    io.on('connection', (socket) => {
      try {
        // send a message to the client
        socket.emit('hello from server', 1, '2', { 3: Buffer.from([4]) });
      } catch (error) {
        console.log(error);
      }

      try {
        // receive a message from the client
        socket.on('hello from client', (...args) => {
          console.log('Server received hello from client', args);
        });
      } catch (error) {
        console.log(error);
      }
    });
  }
}
