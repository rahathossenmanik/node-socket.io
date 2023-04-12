import { Module } from '@nestjs/common';
import { SocketController } from 'src/controllers/socket.controller';
import { SocketService } from 'src/services/socket.service';

@Module({
  imports: [],
  controllers: [SocketController],
  providers: [SocketService]
})
export class AppModule {}
