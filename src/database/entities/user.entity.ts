import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { RolesEntity } from "./roles.entity";
import { UserPermission } from "./user-permission.entiry";

@Entity()

export class UserEntity {
    @PrimaryColumn()
    id: string


    @Column({ name: 'name', length: 100, nullable: false, type: 'varchar' })
    name: string

    @Column({ name: 'email', nullable: false, unique: true })
    email: string

    @Column({ name: 'phone', nullable: false, length: 16, unique: true })
    phone: string

    @Column({ name: 'password', nullable: false })
    password: string

    @OneToMany(()=>UserPermission, (userPermission)=> userPermission.user)
    userPermissions: UserPermission[]

}

export interface IUserRepository {
    find();
}
