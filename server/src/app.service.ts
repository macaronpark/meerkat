import { Injectable } from '@nestjs/common';
import { Map } from './interface/map.interface';
import { MAP_DATA } from './data/map.data';

@Injectable()
export class AppService {
  getMap(): Map {
    return MAP_DATA;
  }
}
