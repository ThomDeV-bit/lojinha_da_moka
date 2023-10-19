import { Controller, Get} from "@nestjs/common";
import { Roles } from "src/common/auth/role/role.decorator";
import { Role } from "src/common/auth/role/role.enum";
import { UserEntity } from "src/database/entities/user.entity";
import { UserUseCase } from "src/use-case/user/user-find";

@Controller()
@Roles(Role.Admin)
export class UserController {
    constructor(
        private readonly userUseCase: UserUseCase
    ) { }

    @Get()
    async find(@): Promise<UserEntity[]> {
        return await this.userUseCase.find()
    }
}