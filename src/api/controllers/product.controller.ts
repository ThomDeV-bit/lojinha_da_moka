import { Body, Controller, Get, Post, Req, UnprocessableEntityException, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ProductUsecase } from "src/use-case/product/product-usecase";
import { ProductDTO } from "../dtos/product.dto";

@Controller('product')
@ApiTags('product')
export class ProductController {
    constructor(
        private readonly productUsecase: ProductUsecase
    ) { }

    @Get('/')
    async getProduct() {
        return await this.productUsecase.getProcuct()
    }

    @Post('create')
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                price: { type: 'integer' },
                quantity: { type: 'integer' },
                image: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @UseInterceptors(FileInterceptor('image'))
    async createProduct(@Body() product: ProductDTO, @UploadedFile() image: Express.Multer.File) {
        try {
            const products = await this.productUsecase.createProduct(product, image)
            console.log({ products, image })
            return { products, image }
        } catch (error) {
            throw new UnprocessableEntityException('Erro ao adicionar Produto')
        }

    }

}
