import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';




@Module({
  imports: [UsersModule, CommentsModule, ConfigModule.forRoot({
    envFilePath: '.env'
  }),
    MongooseModule.forRoot(process.env.MONGO_URI || '', {dbName: 'threads' })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
