import { DynamicModule, Module } from '@nestjs/common';
import { USER_USE_CASE } from './user';
import { USER_PERMISSION_USE_CASE } from './userPermission';
import { SING_IN_USE_CASE } from './singIn';
import { PRODUCT_USE_CASE } from './product';

@Module({})
export class UseCaseModule {
    static register(): DynamicModule {
        return {
            module: UseCaseModule,
            global: true,
            providers: [...USER_USE_CASE, ...USER_PERMISSION_USE_CASE, ...SING_IN_USE_CASE, ...PRODUCT_USE_CASE],
            exports: [...USER_USE_CASE, ...USER_PERMISSION_USE_CASE, ...SING_IN_USE_CASE, ...PRODUCT_USE_CASE]
        };
    }
}
