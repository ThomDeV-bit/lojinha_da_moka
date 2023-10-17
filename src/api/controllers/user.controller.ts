import { Controller, Get } from "@nestjs/common";
import { UserEntity } from "src/database/entities/user.entity";

@Controller()

export class UserController {
    constructor(
        private readonly userUseCase: UserUseCase
    ) { }

    @Get()
    async find(): Promise<UserEntity[]> {
        return await this.userUseCase.find()
    }
}