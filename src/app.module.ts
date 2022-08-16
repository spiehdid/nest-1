import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { MailModule } from './mail/mail.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from './db/entities/news.entity';
import { Comment } from './db/entities/comment.entity';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: '123',
      database: 'blog',
      port: 5433,
      logging: true,
      migrationsRun: false,
      synchronize: true,
      entities: [News, Comment],
    }),
    NewsModule,
    MailModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
