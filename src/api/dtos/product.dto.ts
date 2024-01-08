import { ApiProperty } from "@nestjs/swagger"
import { Expose } from "class-transformer"

export class ProductDTO {
    id: string

    @ApiProperty({ name: 'name' })
    @Expose({ name: 'name' })
    name: string

    @ApiProperty({ name: 'price' })
    @Expose({ name: 'price' })
    price: number

    @ApiProperty({ name: 'quantity' })
    @Expose({ name: 'quantity' })
    quantity: number


    @ApiProperty({ name: 'image', nullable: true, format: "binary", type: 'string' })
    @Expose({ name: 'image' })
    image?: Blob | any
}
