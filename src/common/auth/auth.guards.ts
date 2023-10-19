import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "./role/role.enum";
import { ROLES_KEY } from "./role/role.decorator";

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private refelctor: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.refelctor.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ])
        if (!requiredRoles) return true;
        const { user } = context.switchToHttp().getRequest()
        return requiredRoles.some((role) => user.roles?.includes(role));
    }
}
