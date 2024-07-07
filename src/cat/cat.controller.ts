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
 return res.status(HttpStatus.OK).json([]);

  }


  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return this.catsService.findOne(params.id);
  }




}