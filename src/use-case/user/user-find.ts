import { Injectable, Inject } from "@nestjs/common";
import { UserController } from "src/api/controllers/user.controller";
import { UserEntity } from "src/database/entities/user.entity";
import { TYPEORM_TOKENS } from "src/database/reposiotory/tokens";
import { UserRepository } from "src/database/reposiotory/user/user.repository";

@Injectable()
export class UserSearchUseCase {
    constructor(
        @Inject(TYPEORM_TOKENS.USER_REPOSITORY)
        private readonly userRepository: UserRepository
    ) { }

    async find() {
        return await this.userRepository.findAll()
    }
}
