import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';;
import { JwtService } from '@nestjs/jwt';
import { Request, Response, response } from 'express';
import { ROLES_KEY } from './role/role.decorator';
import { Reflector } from '@nestjs/core';
import { Role } from './role/role.enum';
import { UserDTO } from 'src/api/dtos/user.dto';
import { UserEntity } from 'src/database/entities/user.entity';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private jwtToken: JwtService,
        private reflector: Reflector
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const response = context.switchToHttp().getResponse<Response>()
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        const request = context.switchToHttp().getRequest()

        const token = this.extractTokenFromHeader(request)

        if (!token) throw new UnauthorizedException()
        try {
            const payload: UserEntity | undefined = await this.jwtToken.verifyAsync(
                token,
            )
            request.user = payload
            console.log(request.user)
        } catch (error) {
            throw new UnauthorizedException('')
        }
        requiredRoles.map((roles)=> console.log(roles,'******************'))

        return requiredRoles.some((roles) => request.user?.role === roles)
    }
    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === "Bearer" ? token : undefined
    }
}
