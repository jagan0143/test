import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateProduct } from './dtos/updateProduct.dto';
import { Product } from './product.model';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel('Product') private readonly productModel: Model<Product> ) { };

    async addNewProduct(
        p_name: string,
        price: number,
        discount: number,
        desc?: object,
        stock?: number,
        rating?: number,
    ) {
        try {
            const newProduct = await new this.productModel({
                p_name,
                desc,
                price,
                discount,
                stock,
                rating
            }).save();
            return newProduct.id as string;
        } catch (err) {
            return err;
        }
    }

    async updateProductData(id: string, product: UpdateProduct) {
        try{
            const updatedProduct = await this.productModel.findByIdAndUpdate(id, product, {new: true});
            return updatedProduct;
        }catch(err){
            return err;
        }
    }
}
