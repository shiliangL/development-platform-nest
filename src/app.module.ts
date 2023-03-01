import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocsModule } from './docs/docs.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [DocsModule, QuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
