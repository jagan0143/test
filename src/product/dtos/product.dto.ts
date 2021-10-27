import { IsAlphanumeric, IsInt, IsNotEmpty, IsNumber, IsObject, IsOptional, Length, Max, Min } from "class-validator";

export class NewProduct {
    @IsNotEmpty()
    @IsAlphanumeric()
    @Length(8,10)
    productName: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    price: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    discount: number;

    @IsOptional()
    @IsObject()
    description: object;

    @IsOptional()
    @IsNumber()
    @Min(1)
    stock: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(5)
    rating: number;
}

export class UpdateProduct {
    @IsAlphanumeric()
    @Length(8,10)
    @IsOptional()
    p_name?: string;
    price?: number;
    discount?: number;
    desc?: object;
    stock?: number;
    rating?: number;
}