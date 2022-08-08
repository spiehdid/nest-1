import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    NewsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
