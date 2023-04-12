import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SocketService } from 'src/services/socket.service';

@ApiTags('Socket.io')
@Controller('socket.io')
export class SocketController {
  constructor(private socketsService: SocketService) {}

  @Get()
  connect() {
    return this.socketsService.connect();
  }
}
