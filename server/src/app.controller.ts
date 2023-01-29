import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Map } from './interface/map.interface';

@Controller('map')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMap(): Map {
    return this.appService.getMap();
  }
}
