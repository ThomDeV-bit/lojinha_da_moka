import { Body, Controller, Header, Headers, Post, Query, Request, UnauthorizedException, UseGuards } from "@nestjs/common";
import { SingInUseCase } from "src/use-case/singIn/singIn-use-case";
import { GRANT_TYPE, SingInDTO } from "../dtos/singIn.dto";
import { ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "src/common/auth/auth.guards";
import { RefreshTokenUseCase } from "src/use-case/singIn/refresh-token-use-case";
import { throwIfEmpty } from "rxjs";

@Controller('singIn')
@ApiTags('singIn')

export class SignInController {
    constructor(
        private readonly singInUseCase: SingInUseCase,
        private readonly refreTokenUseCase: RefreshTokenUseCase
    ) { }

    @Post('singIn')
    async singIn(@Query() user: SingInDTO, @Request() req) {
        if (user.grant_type === GRANT_TYPE.LOGIN) {
            req.user = await this.singInUseCase.singIn(user)
            return req.user
        }
        else if (user.grant_type === GRANT_TYPE.REFRESH_TOKEN) {
            return await this.refreTokenUseCase.refreshToken(user.refresh_token)
        }
        else{
            throw new UnauthorizedException('Grant_type invalido')
        }
    }
}
