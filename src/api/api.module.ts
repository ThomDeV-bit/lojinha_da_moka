import { DynamicModule, Module, UsePipes } from '@nestjs/common';
import { OPTIONS_TYPE } from './api.module-definition';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { UserController } from './controllers/user.controller';
import { GlobalResponse } from 'src/common/globlaResponse/global-response';
import { UserPermissionController } from './controllers/user-permission.controller';
import { TaskController } from './controllers/task';
import { AuthGuard } from 'src/common/auth/auth.guards';
import { SignInController } from './controllers/singIn.controller';
import { ProductController } from './controllers/product.controller';
import { OrderController } from './controllers/order.controller';
@Module({})
export class ApiModule {
    static register(options: typeof OPTIONS_TYPE): DynamicModule {
        return {
            module: ApiModule,
            controllers: [UserController, UserPermissionController, SignInController, TaskController, ProductController,OrderController],
            global: true,
            imports: [options.useCaseModule],
            providers: [
                {
                    provide: APP_INTERCEPTOR,
                    useClass: GlobalResponse
                },
            ]
        };
    }
}
