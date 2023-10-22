import {
    Body,
    Controller,
    Get,
    Post,
    Header,
    Headers,
    UnprocessableEntityException,
    UseGuards,
    Query
} from '@nestjs/common';
import { ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';
import { Roles } from 'src/common/auth/role/role.decorator';
import { Role } from 'src/common/auth/role/role.enum';
import { UserEntity } from 'src/database/entities/user.entity';
import { UserSearchUseCase } from 'src/use-case/user/user-find';
import { UserDTO } from '../dtos/user.dto';
import { UserCreateUseCase } from 'src/use-case/user/user-create';
import { RolesEntity } from 'src/database/entities/roles.entity';
import { AuthGuard } from 'src/common/auth/auth.guards';

@Controller('users')
@ApiTags('users')
export class UserController {
    constructor (
        private readonly userSearchUseCase: UserSearchUseCase,
        private readonly userCreateUseCase: UserCreateUseCase
    ) {}

    @Get('search')
    async find () {
        return await this.userSearchUseCase.find();
    }

    @Post('create')
    async create (@Body()user : UserDTO) {
        try {
            return await this.userCreateUseCase.create(user);
        } catch (error) {
            throw new UnprocessableEntityException('AAAAAAAAAAAAAAAAAAAA');
        }
    }
}
