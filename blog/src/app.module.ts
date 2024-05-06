import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { BlogFileRepository,BlogMongoRepository } from './blog.repository';
import { Blog, BlogSchema } from './blog.schema';

// 'mongodb+srv://{유저ID}:{password}@{클러스터주소}/blog',
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://scym12:<password>>@cluster0.jxoqo0c.mongodb.net/blog',
    ),
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
  ],
  controllers: [BlogController],
  providers: [BlogService, BlogFileRepository, BlogMongoRepository ],
})
export class AppModule {}
