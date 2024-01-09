import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { ProductEntity } from "./product.entity";
import { Blob } from "buffer";


@Entity({ name: 'productImages' })

export class ProductImagesEntity {
    @PrimaryColumn({ name: 'id' })
    id: string

    @Column({ name: 'image', type: 'blob', nullable: true })
    image: Blob

    @ManyToOne(()=> ProductEntity, (product)=> product.image)
    product : ProductEntity
}
