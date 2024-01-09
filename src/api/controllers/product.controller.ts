import { Body, Controller, Get, Param, Post, Query, Req, UnprocessableEntityException, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ProductUsecase } from "src/use-case/product/product-usecase";
import { ProductDTO } from "../dtos/product.dto";
import { ProductImageUsecase } from "src/use-case/product-images/product-image-usecase";
import { ProductImageDTO } from "../dtos/productstImage.dto";

@Controller('product')
@ApiTags('product')
export class ProductController {
    constructor(
        private readonly productUsecase: ProductUsecase,
        private readonly productImageUsecase: ProductImageUsecase,


    ) { }

    @Get('/')
    async getProduct(@Query('id') id: string) {
        return await this.productUsecase.getProcuct(id)
    }

    @Post('create')
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @UseInterceptors(FileInterceptor('file'))
    async createProduct(@Query('id') productId: string, @UploadedFile() file: Express.Multer.File) {
        const products = await this.productImageUsecase.createProductImage(productId, file)
        console.log({ products, file })
        return { products, file }


    }

}
