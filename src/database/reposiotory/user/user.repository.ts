import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from 'src/api/dtos/user.dto';
import { IUserRepository, UserEntity } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository implements IUserRepository {
    constructor (
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async find (): Promise<UserEntity[]> {
        return await this.userRepository.find({
            relations : {
                userPermissions : {
                    roles :true,
                }
            }
        });
    }

    async insert (user: UserDTO): Promise<UserEntity> {
        const users = this.userRepository.create(user);
        return await this.userRepository.save(users);
    }

    async findOne(user : string): Promise<UserEntity>{
        return await this.userRepository.findOne({
            where : {
                id  : user
            }
        })
    }}
