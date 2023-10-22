import { Role } from "../../common/auth/role/role.enum";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { UserPermission } from "./user-permission.entiry";


@Entity({name : 'roles'})

export class RolesEntity {
    @PrimaryColumn({name: 'id'})
    id : string

    @Column({name: 'role',type :'enum' ,enum : Role, nullable: false})
    role : string

    @OneToMany(()=>UserPermission, (permission)=>permission.roles)
    userPermission : UserPermission[]
}
export interface IRolesRepository {
    find(roles : string[]);
}
