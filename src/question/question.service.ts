import { Repository, Logger } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  create(createQuestionDto: CreateQuestionDto) {
    return 'This action adds a new question';
  }

  findAll() {
    console.log(this.questionRepository);
    return `This action returns all question`;
  }

  async findOne(id: number) {
    console.log(this.questionRepository);
    // const results = await this.questionRepository.find({ id });
    // return results ?? 'not found';
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
