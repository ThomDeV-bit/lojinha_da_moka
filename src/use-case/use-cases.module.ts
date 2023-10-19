import { DynamicModule, Module } from "@nestjs/common";
import { USER_USE_CASE } from "./user";

@Module({})

export class UseCaseModule {
    static register(): DynamicModule {
        return {
            module: UseCaseModule,
            global: true,
            providers: [...USER_USE_CASE],
            exports: [...USER_USE_CASE]

        }
    }
}