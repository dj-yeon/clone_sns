import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModel } from './entities/posts.entity'; // PostsModel 엔티티를 import 합니다.

@Module({
  imports: [TypeOrmModule.forFeature([PostsModel])], // 여기서 PostsModel을 사용합니다.
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
