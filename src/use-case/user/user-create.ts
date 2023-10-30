import { ForbiddenException, Inject, Injectable, UnprocessableEntityException } from '@nestjs/common';

import { TYPEORM_TOKENS } from 'src/database/reposiotory/tokens';
import { UserRepository } from 'src/database/reposiotory/user/user.repository';
import { RolesRepository } from 'src/database/reposiotory/roles/roles.repository';
import { UserDTO } from 'src/api/dtos/user.dto';
import { v4 } from 'uuid';
import { hash } from 'bcrypt';


@Injectable()
export class UserCreateUseCase {
    constructor (
        @Inject(TYPEORM_TOKENS.USER_REPOSITORY)
        private readonly userRepository: UserRepository,

    ) {}
    async create (user : UserDTO) {
        try {
            user.id = v4()
            user.password = await hash(user.password,10)
            return await this.userRepository.insert(user)
        } catch (error) {
            throw new UnprocessableEntityException('Falha ao criar usuario');
        }
    }
}
