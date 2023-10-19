import { DynamicModule, Module, UsePipes } from "@nestjs/common";
import { OPTIONS_TYPE } from "./api.module-definition"
import { APP_INTERCEPTOR } from "@nestjs/core";
import { UserController } from "./controllers/user.controller";
@Module({})

export class ApiModule {
    static register(options: typeof OPTIONS_TYPE): DynamicModule {
        return {
            module: ApiModule,
            controllers: [UserController],
            global: true,
            imports: [options.useCaseModule],
            // providers: [
            //     {
            //         provide: APP_INTERCEPTOR,
            //         useClass : GlobalResponse,
            // }


        }
    }
}