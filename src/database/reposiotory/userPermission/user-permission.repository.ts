import { Injectable, Inject, ForbiddenException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPermissionEntity } from 'src/database/entities/user-permission.entiry';
import { Repository } from 'typeorm';
import { TYPEORM_TOKENS } from '../tokens';
import { UserRepository } from '../user/user.repository';
import { RolesRepository } from '../roles/roles.repository';
import { v4 } from 'uuid';
import { UserPermissionDTO } from 'src/api/dtos/userPermission.dto';
import { RolesEntity } from 'src/database/entities/roles.entity';

@Injectable()
export class UserPermissionRepository {
    constructor (
        @InjectRepository(UserPermissionEntity)
        private readonly userPermissionRepository: Repository<UserPermissionEntity>,
        @Inject(TYPEORM_TOKENS.USER_REPOSITORY)
        private readonly userRepository: UserRepository,
        @Inject(TYPEORM_TOKENS.ROLES_REPOSIOTRY)
        private readonly rolesRepository: RolesRepository
    ) {}

    async createUserPermission (userId: string, role: string, userPermission: UserPermissionDTO) {
        const user = await this.userRepository.findOne(userId);
        const roles = await this.rolesRepository.find(role);
        if (!user && !role) {
            throw new BadRequestException('user does not exists');
        }
        userPermission.id = v4();
        userPermission.user = user;
        userPermission.roles = roles;
        const newUserPermission =  this.userPermissionRepository.create(userPermission);
        return await this.userPermissionRepository.save(newUserPermission);
    }
}
