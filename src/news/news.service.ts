import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from 'src/news/dto/create-comment.dto';
import { Comment } from 'src/news/entities/comment.entity';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {
  private news: News[] = [];

  create(createNewsDto: CreateNewsDto) {
    const news: News = {
      id: this.news.length + 1,
      author: 'andrey',
      title: createNewsDto.title,
      text: createNewsDto.text,
      comments: [],
      date: new Date().toUTCString(),
      thumbnail: createNewsDto.thumbnail,
    };
    this.news.push(news);
  }

  createComment(createCommentDto: CreateCommentDto) {
    const newsId = createCommentDto.newsId;
    const news = this.findOne(newsId);

    const comment: Comment = {
      id: news.comments.length + 1,
      author: 'andrey',
      text: createCommentDto.text,
      date: new Date().toUTCString(),
    };

    this.news[newsId - 1].comments.push(comment);
  }

  findAll() {
    return this.news;
  }

  findOne(id: number) {
    const news = this.news.find((news) => news.id === id);

    if (!news) {
      throw new NotFoundException();
    }

    return news
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    return `This action updates a #${id} news`;
  }

  remove(id: number) {
    return `This action removes a #${id} news`;
  }
}
