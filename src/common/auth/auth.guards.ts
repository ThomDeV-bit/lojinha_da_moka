import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';;
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
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
            throw new UnauthorizedException('usuario sem permissao')
        }
        return requiredRoles.some((roles) => request.user?.role === roles)
    }
    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        console.log(request.headers)
        return type === "Bearer" ? token : undefined
    }
}
