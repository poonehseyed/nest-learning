import { Param } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { CatsService } from './app.CatsService';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }


  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  
}