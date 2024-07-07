import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { CatsController } from './cat/cat.controller';
import { AppService } from './app/app.service';
import { CatsService } from './cat/cat.service';


@Module({
  imports: [],
  controllers: [AppController,CatsController],
  providers: [AppService,CatsService],
})
export class AppModule {}
