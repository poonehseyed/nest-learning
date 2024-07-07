import { Param } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cat.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}


  @Get()
  findAll(): string {
    return this.catsService.findAll();
    
  }


  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return this.catsService.findOne(params.id);
  }

  
}