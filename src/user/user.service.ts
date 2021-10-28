import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserAuthenticate } from './auth/user.authenticate';
import { User } from './user.model';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel('User') private readonly usersModel: Model<User>,
        private userAuthenticate: UserAuthenticate
    ) {}

    async createNewUser(
        username: string, 
        first_name: string, 
        ph_no: number, 
        address: string, 
        password: string, 
        last_name?: string, 
        age?: number) {
        try{
            const newUser = new this.usersModel({
                username,
                first_name,
                last_name,
                ph_no,
                address,
                age,
                password
            });
            const result = await newUser.save();
            console.log(result)
            return result.id as string;
        }catch(err){
            return err;
        }
    }

    async authenticateUser(username: string, password: string) {
        try{
            const user = await this.usersModel.findOne({username: username}).exec();
            if(user!=null){
                if(user.password == password) {
                    return this.userAuthenticate.createToken(user.username, user.id);
                }
                else
                return "incorrect password" as string;
            }
            else{
                return "user not found" as string;
            }
        }catch(err){
            return err;
        }
    }
}
