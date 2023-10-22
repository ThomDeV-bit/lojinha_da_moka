import { Inject, Injectable } from "@nestjs/common";
import { TYPEORM_TOKENS } from "../tokens";
import { UserRepository } from "../user/user.repository";

@Injectable()

export class SindIn {

    constructor(
        @Inject(TYPEORM_TOKENS.USER_REPOSITORY)
        private readonly userRepository : UserRepository
    ){}


}
