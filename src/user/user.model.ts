import * as Mongoose from "mongoose";

 export const userSchema = new Mongoose.Schema({
     username:{
        type: String,
        required: true
     },
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String
    },
    ph_no:{
        type: Number,
        required: true
    },
    age:{
        type: Number
    },
    address:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

export interface User {
    id: string,
    username: string,
    first_name: string,
    last_name: string,
    ph_no: number,
    age: number,
    address: string,
    password: string
}