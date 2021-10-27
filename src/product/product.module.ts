import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { productSchema } from './product.model';

@Module({
  imports:[MongooseModule.forFeature([{name:'Product', schema:productSchema}])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}