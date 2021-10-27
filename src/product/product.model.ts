import * as mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    p_name: {
        type: String,
        required: true
    },
    desc: {
        type: Object
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    stock: {
        type: Number
    },
    rating: {
        type:Number
    }
});

export interface Product {
    id: string,
    p_name: string,
    desc: object,
    price: number,
    discount:  number,
    stock: number,
    rating: number
}