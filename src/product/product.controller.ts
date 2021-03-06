import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NewProduct, UpdateProduct } from './dtos/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {};

    @Get()
    async getProducts(){
        try{
            const products = await this.productService.getProdutcs();
            return products;
        }catch(err){
            return err;
        }
    }

    @Post("new")
    async addProduct( @Body() body: NewProduct
        // @Body('productName') p_name: string,
        // @Body('price') price: number,
        // @Body('discount') discount: number,
        // @Body('description') desc?: object,
        // @Body('stock') stock?: number,
        // @Body('rating') rating?: number,
    ) {
        try{
            const newProduct = await this.productService.addNewProduct(body)
            return newProduct;
        }catch(err){
            return err;
        }
    }

    @Put('update/:id')
    async updateProductById(@Param('id') id: string, @Body() body: UpdateProduct) {
        try{
            const updatedProduct = await this.productService.updateProductData(id, body);
            return updatedProduct;
        }catch(err){
            return err;
        }
    }

    @Delete('delete/:id')
    async deleteProductById(@Param('id') id: string) {
        try{
            const deletedProduct = await this.productService.deleteProduct(id);
            return deletedProduct;
        }catch(err){
            return err
        }
    }
}
