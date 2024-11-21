import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './schemas/comment.schema';
import { Model } from 'mongoose';

@Injectable()
export class CommentsService {

  constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>) { }

  create(createCommentDto: CreateCommentDto) {
    const newUser = new this.commentModel(createCommentDto);
    return newUser.save();
  }

  findAll() {
    return this.commentModel.find().populate(['user', 'parent']).exec();
  }

  getAllTopLevelComments() {
    return this.commentModel.find().populate(['user']).exec();
  }

  getChildrenComments(parent: string) {

    try {
      return this.commentModel.find({
        parent
      }).populate(['user', 'parent']).exec();
    } catch (e) {
      throw new BadRequestException('Something bad happened.', {
        cause: new Error(e.message),
        description: 'Some error description',
      });
    }

  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
