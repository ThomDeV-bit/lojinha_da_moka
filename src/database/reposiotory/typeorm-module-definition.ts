import { ConfigurableModuleBuilder, Type } from '@nestjs/common';
import { IUserRepository } from '../entities/user.entity';
import { IRolesRepository } from '../entities/roles.entity';
import { UserPermissionRepository } from './userPermission/user-permission.repository';
import { ProductRepository } from './product/product.repository';

export interface ModuleOptions {
    userRepository: Type<IUserRepository>;
    rolesRepository: Type<IRolesRepository>;
    userPermissionRepository : Type<UserPermissionRepository>
    productRepository: Type<ProductRepository>
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } =
    new ConfigurableModuleBuilder<ModuleOptions>().build();
