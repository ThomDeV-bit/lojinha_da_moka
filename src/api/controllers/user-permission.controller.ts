import { Body, Controller, Get, Param, Post, Query, Request, UnprocessableEntityException, UseGuards } from "@nestjs/common";
import { ApiSecurity, ApiTags } from "@nestjs/swagger";
import { UserPermissionUseCase } from "src/use-case/userPermission/user-permission-use-case";
import { UserPermissionDTO } from "../dtos/userPermission.dto";
import { logger } from "src/common/logger/logger";
import { AuthGuard } from "src/common/auth/auth.guards";

@Controller('userPermission')
@ApiTags('userPermission')

export class UserPermissionController {
    constructor(private readonly userPermissionUseCase: UserPermissionUseCase) { }
    @UseGuards(AuthGuard)
    @Post('create')

    async createPermission(
        @Query('user') userId: string, @Query('roles') role: string,
        @Body() userPermission: UserPermissionDTO, @Request() req) {
        req.user = await this.userPermissionUseCase.createPermission(userId, role, userPermission)

        return req.user
    }
}
