import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductDTO } from "src/api/dtos/product.dto";
import { ProductEntity } from "src/database/entities/product.entity";
import { Repository } from "typeorm";

@Injectable()


export class ProductRepository {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>
    ) { }

    async find() {
        return await this.productRepository.find()
    }

    async insertProduct(product: ProductDTO) {
        const productSave = this.productRepository.create(product)
        return await this.productRepository.save(productSave)
    }
}


