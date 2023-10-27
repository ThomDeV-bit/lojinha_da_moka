import { ForbiddenException, Header, Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { SingInDTO } from "src/api/dtos/singIn.dto";
import { UserDTO } from "src/api/dtos/user.dto";
import { UserEntity } from "src/database/entities/user.entity";
import { TYPEORM_TOKENS } from "src/database/reposiotory/tokens";
import { UserRepository } from "src/database/reposiotory/user/user.repository";
import { compare, hash } from 'bcrypt'
import { JwtService } from "@nestjs/jwt";
import * as dotenv from "dotenv";
import { dot } from "node:test/reporters";

@Injectable()

export class SingInUseCase {

    constructor(
        @Inject(TYPEORM_TOKENS.USER_REPOSITORY)
        private readonly userRepository: UserRepository,
        private readonly jwtToken: JwtService
    ) { }

    async singIn(userSingIn: SingInDTO) {
        dotenv.config()
        const user: UserEntity = await this.userRepository.findOneByEmail(userSingIn.email)
        if (!user) throw new UnauthorizedException('Usuario invalido')
        const password = user.password
        const passwordValid = await compare(userSingIn.password, password)
        if (passwordValid === false) throw new UnauthorizedException('Senha invalida')
        const payload = { sub: user.id, email: user.email }
        return {
            acess_token: await this.jwtToken.signAsync(payload),
            refresh_token: await this.jwtToken.signAsync(payload, { expiresIn: 30 * 2}),
            token_type: "Bearer",
            expires_in: 3600
        }
    }
}
