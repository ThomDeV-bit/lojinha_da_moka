import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { IsEmail, IsEnum } from "class-validator";
import { Role } from "src/common/auth/role/role.enum";
import { RolesEntity } from "src/database/entities/roles.entity";

export class UserDTO {

    @ApiProperty({name : 'id'})
    @Expose({name: 'id'})
    id :string

    @ApiProperty({name : 'name'})
    @Expose({name: 'name'})
    name: string


    @ApiProperty({name : 'email'})
    @Expose({name: 'email'})
    @IsEmail()
    email: string

    @ApiProperty({name : 'phone'})
    @Expose({name: 'phone'})
    phone : string

    @ApiProperty({name : 'password'})
    @Expose({name: 'password'})
    password : string


    @ApiProperty({name : 'roles'})
    @Expose({name: 'roles'})
    roles : RolesEntity[]
}
