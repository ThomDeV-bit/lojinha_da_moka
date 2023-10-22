import { RolesRepository } from "./roles/roles.repository";
import { UserRepository } from "./user/user.repository";
import { UserPermissionRepository } from "./userPermission/user-permission.repository";
export class RepositoryModule {
    static register() {
        return {
            userRepository: UserRepository,
            rolesRepository : RolesRepository,
            userPermissionRepository : UserPermissionRepository

        }
    }
}
