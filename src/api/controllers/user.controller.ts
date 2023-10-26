import {
    Body,
    Controller,
    Get,
    Post,
    UnprocessableEntityException,
    UseGuards,
    Request
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserSearchUseCase } from 'src/use-case/user/user-find';
import { UserDTO } from '../dtos/user.dto';
import { UserCreateUseCase } from 'src/use-case/user/user-create';
import { AuthGuard } from 'src/common/auth/auth.guards';


@Controller('users')
@ApiTags('users')
export class UserController {
    constructor (
        private readonly userSearchUseCase: UserSearchUseCase,
        private readonly userCreateUseCase: UserCreateUseCase
    ) {}

    @UseGuards(AuthGuard)
    @Get('search')
    async find (@Request() req) {
        console.log(req.user)
        return req.user
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
