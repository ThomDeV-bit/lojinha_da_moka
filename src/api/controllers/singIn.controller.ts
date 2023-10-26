import { Body, Controller, Header, Headers, Post, UseGuards } from "@nestjs/common";
import { SingInUseCase } from "src/use-case/singIn/singIn-use-case";
import { SingInDTO } from "../dtos/singIn.dto";
import { ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "src/common/auth/auth.guards";

@Controller('singIn')
@ApiTags('singIn')

export class SingInController {
    constructor (
        private readonly singInUseCase : SingInUseCase
    ){}
    @Post('singIn')
    async singIn(@Body()user : SingInDTO){
        return await this.singInUseCase.singIn(user)
    }
}
