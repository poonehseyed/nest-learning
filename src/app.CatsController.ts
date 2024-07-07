import { Controller, Get } from '@nestjs/common';
import { CatsService } from './app.CatsService';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }


}