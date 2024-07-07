import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './app.CatsController';
import { AppService } from './app.service';
import { CatsService } from './app.CatsService';


@Module({
  imports: [],
  controllers: [AppController,CatsController],
  providers: [AppService,CatsService],
})
export class AppModule {}
