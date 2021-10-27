import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewProduct, UpdateProduct } from './dtos/product.dto';
import { Product } from './product.model';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { };

    async getProdutcs(): Promise<Product[]> {
        try {
            const products = await this.productModel.find();
            return products;
        } catch (err) {
            return err;
        }
    }

    async addNewProduct(body: NewProduct): Promise<Product> {
        try {
            const newProduct = await new this.productModel({
                p_name: body.productName,
                desc: body.description,
                price: body.price,
                discount: body.discount,
                stock: body.stock,
                rating: body.rating
            }).save();
            return newProduct;
        } catch (err) {
            return err;
        }
    }

    async updateProductData(id: string, product: UpdateProduct): Promise<Product> {
        try {
            const updatedProduct = await this.productModel.findByIdAndUpdate(id, product, { new: true });
            return updatedProduct;
        } catch (err) {
            return err;
        }
    }

    async deleteProduct(id: string): Promise<Product> {
        try {
            const deletedProduct = await this.productModel.findByIdAndDelete(id);
            return deletedProduct;
        } catch (err) {
            return err;
        }
    }
}
