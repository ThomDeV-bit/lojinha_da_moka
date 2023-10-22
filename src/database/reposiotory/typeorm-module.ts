import { DynamicModule, Module } from '@nestjs/common';
import { OPTIONS_TYPE } from './typeorm-module-definition';
import { UserEntity } from '../entities/user.entity';
import dataSource, { dataSourceOptions } from '../config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TYPEORM_TOKENS } from './tokens';
import { RolesEntity } from '../entities/roles.entity';
import { UserPermissionRepository } from './userPermission/user-permission.repository';
import { UserPermissionEntity } from '../entities/user-permission.entiry';

@Module({})
export class TypeormModule {
    static register (options: typeof OPTIONS_TYPE): DynamicModule {
        const entitiesSchema = [ UserEntity, RolesEntity, UserPermissionEntity ];
        const config = dataSourceOptions;
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
                        };
                    }
                })
            ],
            exports: [ TYPEORM_TOKENS.USER_REPOSITORY, TYPEORM_TOKENS.ROLES_REPOSIOTRY, TYPEORM_TOKENS.USER_PERMISSION_REPOSIOTRY],
            providers: [
                {
                    provide: TYPEORM_TOKENS.USER_REPOSITORY,
                    useClass: options.userRepository
                },
                {
                    provide: TYPEORM_TOKENS.ROLES_REPOSIOTRY,
                    useClass: options.rolesRepository
                },
                {
                    provide : TYPEORM_TOKENS.USER_PERMISSION_REPOSIOTRY,
                    useClass : UserPermissionRepository
                }
            ]
        };
    }
}
