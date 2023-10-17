import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import dataSource, { dataSourceOptions } from './database/config/database.config';

async function bootstrap() {

  dataSource.initialize().then(() => {
    console.log('Database Connected')
  })
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Lojinha da moka')
    .setDescription('good fly ')
    .setVersion('1.0')
    .addTag('moka')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
  const url = app.getUrl()
  console.log(`Swagger application is running on: ${url}/swagger`)
}
bootstrap();
