import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductDTO } from "src/api/dtos/product.dto";
import { ProductEntity } from "src/database/entities/product.entity";
import { In, Repository } from "typeorm";

@Injectable()


export class ProductRepository {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>
    ) { }

    async find(product: string) {
        const result = await this.productRepository.findOne({
            where: {
                id: product
            }
        })
        return result
    }

    async findById(id: string[]) {
        return await this.productRepository.find({
            where: {
                id: In(id)
            },
            relations: {
                categorie: true,
                image: true,
                productsByOrder: true
            }
        })
    }

    async insertProduct(product: ProductDTO) {
        const productSave = this.productRepository.create(product)
        return await this.productRepository.save(productSave)
    }
}


