import {
    Body,
    Controller,
    Get,
    Post,
    UnprocessableEntityException,
    UseGuards,
    Request,
    Header,
    Headers,
} from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { UserSearchUseCase } from 'src/use-case/user/user-find';
import { UserDTO } from '../dtos/user.dto';
import { UserCreateUseCase } from 'src/use-case/user/user-create';
import { AuthGuard } from 'src/common/auth/auth.guards';
import { ROLES_KEY, Roles } from 'src/common/auth/role/role.decorator';
import { Role } from 'src/common/auth/role/role.enum';


@Controller('users')
@ApiTags('users')
@ApiSecurity('JWT-auth')
export class UserController {
    constructor(
        private readonly userSearchUseCase: UserSearchUseCase,
        private readonly userCreateUseCase: UserCreateUseCase
    ) { }

    @UseGuards(AuthGuard)
    @Roles(Role.Admin)
    @Get('search')
    async find(@Request() req) {
        req.user = await this.userSearchUseCase.find()
        return req.user
    }

    @Post('create')
    async create(@Body() user: UserDTO) {
        return await this.userCreateUseCase.create(user);
    }
}
