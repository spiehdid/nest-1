import { Global, Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from '../db/entities/news.entity';
import { Comment } from 'src/db/entities/comment.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([News, Comment])
  ],
  controllers: [NewsController],
  providers: [NewsService],
  exports: [NewsService]
})
export class NewsModule {}
