import { DynamicModule, Module } from "@nestjs/common";
import { OPTIONS_TYPE } from "./typeorm-module-definition";
import { UserEntity } from "../entities/user.entity";
import dataSource, { dataSourceOptions } from "../config/database.config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TYPEORM_TOKENS } from "./tokens";

@Module({})

export class TypeormModule {
    static register(options: typeof OPTIONS_TYPE): DynamicModule {
        const entitiesSchema = [UserEntity]
        const config = dataSourceOptions
        return {
            module: TypeormModule,
            global: true,
            imports: [
                TypeOrmModule.forFeature(entitiesSchema),
                TypeOrmModule.forRootAsync({
                    useFactory: async () => {
                        return {
                            autoLoadEntities: true,
                            ...config
                        }
                    }
                })
            ],
            exports: [TYPEORM_TOKENS.USER_REPOSITORY],
            providers: [
                {
                    provide: TYPEORM_TOKENS.USER_REPOSITORY,
                    useClass: options.userRepository
                }
            ]
        }

    }
}