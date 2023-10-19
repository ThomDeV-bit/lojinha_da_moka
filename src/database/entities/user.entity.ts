import { Column, Entity, PrimaryColumn } from "typeorm";

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

    @Column({ name: 'roles' })
    roles: string

}

export interface IUserRepository {
    find(): Promise<UserEntity[]>;
}