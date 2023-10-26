import { DynamicModule, Module } from '@nestjs/common';
import { TypeormModule } from './database/reposiotory/typeorm-module';
import { RepositoryModule } from './database/reposiotory/repository.module';
import { UseCaseModule } from './use-case/use-cases.module';
import { ApiModule } from './api/api.module';
import { LoggerModule } from 'nestjs-pino';
import { logger } from './common/logger/logger';
import { JwtModule } from '@nestjs/jwt';

@Module({})
export class AppModule {
    static register (): DynamicModule {
        const imports = [
            LoggerModule.forRoot({
                pinoHttp: logger
            }),
            JwtModule.register({
                global : true ,
                secret : 'testeToken',
                signOptions : {
                    expiresIn : 3600
                }
            }),
            TypeormModule.register(RepositoryModule.register()),
            ApiModule.register({
                useCaseModule: UseCaseModule.register()
            })
        ];

        return {
            module: AppModule,
            imports
        };
    }
}
