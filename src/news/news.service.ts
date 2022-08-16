import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { News } from 'src/db/entities/news.entity';
import { Repository } from 'typeorm';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News) private readonly newsRepository: Repository<News>,
  ) {}

  async create(createNewsDto: CreateNewsDto) {
    const news = {
      author: 'andrey',
      title: createNewsDto.title,
      text: createNewsDto.text,
      date: new Date().toUTCString(),
      thumbnail: createNewsDto.thumbnail,
    };

    return this.newsRepository.save(news);
  }

  findAll() {
    return this.newsRepository.find();
  }

  async findOne(id: number) {
    const news = await this.newsRepository.findOneBy({ id });

    if (!news) {
      throw new NotFoundException();
    }

    return news;
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    return `This action updates a #${id} news`;
  }

  remove(id: number) {
    return `This action removes a #${id} news`;
  }
}
