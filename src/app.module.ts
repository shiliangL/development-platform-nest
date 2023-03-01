import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';
import { DocsModule } from './docs/docs.module';

@Module({
  imports: [QuestionModule, DocsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}