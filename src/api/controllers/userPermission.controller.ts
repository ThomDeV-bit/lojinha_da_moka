import { Body, Controller, Param, Post, Query, UnprocessableEntityException } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserPermissionUseCase } from "src/use-case/userPermission/user-permission-use-case";
import { UserPermissionDTO } from "../dtos/userPermission.dto";
import { logger } from "src/common/logger/logger";

@Controller('userPermission')
@ApiTags('userPermission')


export class UserPermissionController {
    constructor( private readonly userPermissionUseCase : UserPermissionUseCase){}
    @Post('create')
    async createPermission(@Query('user') userId: string , @Query('roles') role : string, @Body() userPermission : UserPermissionDTO){
        try {
            logger.logger.info(UserPermissionController.prototype.createPermission)
            return await this.userPermissionUseCase.createPermission(userId,role,userPermission)
        } catch (error) {
            throw new UnprocessableEntityException()
        }
    }
}
