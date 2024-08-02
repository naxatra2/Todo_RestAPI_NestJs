import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello! Nakshatra this side from Todo rest API!';
  }
}