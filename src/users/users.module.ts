import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, User } from './schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{schema: UserSchema, name: User.name}])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
