import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreateUserEvent } from "src/api/dtos/eventEmiter.dto";
import { TYPEORM_TOKENS } from "src/database/reposiotory/tokens";
import { UserRepository } from "src/database/reposiotory/user/user.repository";

@Injectable()
export class UserSearchUseCase {
    constructor(
        @Inject(TYPEORM_TOKENS.USER_REPOSITORY)
        private readonly userRepository: UserRepository
    ) { }

    async find() {
        try {
            const users = await this.userRepository.findAll()
            return users
        } catch (error) {
            throw new NotFoundException()
        }
    }
}
