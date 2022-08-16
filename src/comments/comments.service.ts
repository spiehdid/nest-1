import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/db/entities/comment.entity';
import { NewsService } from 'src/news/news.service';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    private readonly newsService: NewsService
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const newsId = createCommentDto.newsId;
    const news = await this.newsService.findOne(newsId);

    const comment = {
      author: 'andrey',
      text: createCommentDto.text,
      date: new Date().toUTCString(),
      news
    };

    return this.commentRepository.save(comment);
  }

  getComments(newsId: number) {
    return this.commentRepository.find({ where: {
        news: {
            id: newsId
        }
    } })
  }
}
