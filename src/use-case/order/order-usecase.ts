import { Injectable, Inject } from "@nestjs/common";
import { OrdersDto } from "src/api/dtos/orders.dto";
import { OrdersRepository } from "src/database/reposiotory/orders/orders.repository";
import { TYPEORM_TOKENS } from "src/database/reposiotory/tokens";
import { UserRepository } from "src/database/reposiotory/user/user.repository";

@Injectable()


export class OrderUsecase {
    constructor (
        @Inject(TYPEORM_TOKENS.ORDER_REPOSITORY)
        private readonly orderRepository  : OrdersRepository,
        @Inject(TYPEORM_TOKENS.USER_REPOSITORY)
        private readonly userRepository : UserRepository
    ){}

    async createOrder(userId: string, order: OrdersDto){
        
    }
}