import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import {  Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CatsService } from './cat.service';
import { CatDto } from './cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}


  @Get()
  async findAll(@Res() res: Response){
    
 return res.status(HttpStatus.OK).json(this.catsService.findAll());

  }


  @Get(':id')
  findOne(@Param('id') id: number): CatDto {
    console.log(id);
    return this.catsService.findOne(+id);
  }




}