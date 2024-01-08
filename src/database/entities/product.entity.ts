import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity({ name: 'products' })

export class ProductEntity {
    @PrimaryColumn({ name: 'id' })
    id: string

    @Column({ name: 'name', nullable: false })
    name: string

    @Column({ name: 'price', type: 'int', nullable: false })
    price: number

    @Column({ name: 'quantity', nullable: false })
    quantity: number

    @Column({ name: 'image', type: 'blob', nullable: true })
    image: Blob
}
