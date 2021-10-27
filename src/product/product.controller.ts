import { Body, Controller, Param, Post } from '@nestjs/common';
import { UpdateProduct } from './dtos/updateProduct.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {};

    @Post("new")
    async addProduct(
        @Body('productName') p_name: string,
        @Body('price') price: number,
        @Body('discount') discount: number,
        @Body('description') desc?: object,
        @Body('stock') stock?: number,
        @Body('rating') rating?: number,
    ) {
        try{
            const productId = await this.productService.addNewProduct(
                p_name,
                price,
                discount,
                desc,
                stock,
                rating
            )
            return {newProductId:productId};
        }catch(err){
            return err;
        }
    }

    @Post('update/:id')
    async updateProductById(@Param('id') id: string, @Body() body: UpdateProduct) {
        try{
            const result = await this.productService.updateProductData(id, body);
            return result;
        }catch(err){
            return err;
        }
    }
}
