import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userServices: UsersService) {}

    @Post('signup')
    async signup(
        @Body('userName') username: string,
        @Body('firstName') first_name: string,
        @Body('phoneNumber') ph_no: number,
        @Body('address') address: string,
        @Body('password') password: string,
        @Body('age') age?: number,
        @Body('lastName') last_name?: string
        ) {
            try{
                const userId = await this.userServices.createNewUser(
                    username, 
                    first_name, 
                    ph_no, 
                    address, 
                    password, 
                    last_name, 
                    age);
                return {id: userId}; 
            }catch(err){
                return err;
            }
        }
    
    @Post('login')
    async login(
        @Body('username') username: string,
        @Body('password') Password: string
    ) {
        try{
            const authInfo = await this.userServices.authenticateUser(username, Password);
            return authInfo;   
        }catch(err){
            return err;
        }
    }
}
