import { Inject, Injectable } from "@nestjs/common";
import { ProductDTO } from "src/api/dtos/product.dto";
import { ProductRepository } from "src/database/reposiotory/product/product.repository";
import { TYPEORM_TOKENS } from "src/database/reposiotory/tokens";
import { v4 } from "uuid";

@Injectable()

export class ProductUsecase {
    constructor(
        @Inject(TYPEORM_TOKENS.PRODUCT_REPOSITORY)
        private readonly productRepository: ProductRepository
    ) { }

    async getProcuct(id: string) {
        const product = await this.productRepository.find(id)
        return product
    }

    async createProduct(product: ProductDTO, image: Express.Multer.File) {
        const id = v4()
        const products = await this.productRepository.insertProduct({
            id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
        })
        return products
    }

}
