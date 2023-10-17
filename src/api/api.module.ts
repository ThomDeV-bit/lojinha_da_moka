import { DynamicModule, Module } from "@nestjs/common";
import { OPTIONS_TYPE } from "./api.module-definition"
import { APP_INTERCEPTOR } from "@nestjs/core";
@Module({})

export class ApiModule {
    static register(options: typeof OPTIONS_TYPE): DynamicModule {
        return {
            module: ApiModule,
            global: true,
            imports: [options.useCaseModules],
            providers: [
                {
                    provide: APP_INTERCEPTOR,
                    useClass : GlobalResponse,
            }
            ]

        }
    }
}