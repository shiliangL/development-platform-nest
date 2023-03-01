import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// api文档插件
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('接口文档') // 文档介绍
    .setDescription('系统接口文档') // 文档介绍
    .setVersion('1.0.0') // 文档版本
    .build();
  // 为了创建完整的文档（具有定义的HTTP路由），
  // 我们使用类的createDocument()方法SwaggerModule。
  // 此方法带有两个参数，分别是应用程序实例和基本Swagger选项。
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api', app, document);
  await app.listen(3000);
}
bootstrap();
