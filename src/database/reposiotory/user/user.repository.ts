import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IUserRepository, UserEntity } from "src/database/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()

export class UserRepository implements IUserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>) { }
    async find(): Promise<UserEntity[]> {
        return await this.userRepository.find()
    }

}