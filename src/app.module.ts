import { DynamicModule, Module } from '@nestjs/common';
import { TypeormModule } from './database/reposiotory/typeorm-module';
import { RepositoryModule } from './database/reposiotory/repository.module';
import { UseCaseModule } from './use-case/use-cases.module';
import { ApiModule } from './api/api.module';

@Module({})

export class AppModule {
  static register(): DynamicModule {

    const imports = [
      TypeormModule.register(RepositoryModule.register()),
      ApiModule.register({
        useCaseModule: UseCaseModule.register()
      }
      )
    ]

    return {
      module: AppModule,
      imports,
    }
  }
}