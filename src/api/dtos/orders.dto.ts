import { UserDTO } from "./user.dto";
import { ProductsByOrderDTO } from "./productsByOrder.dto";

export class OrdersDto {
    id: string;

    totalPrice: number;

    status: string;

    created_at: Date

    updated_at: Date;

    user: UserDTO;

    productsByOrder: ProductsByOrderDTO[];
}