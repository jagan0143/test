import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UserAuthenticate {
    constructor(private jwtService: JwtService){}

    async createToken(username: string, id: string) {
        try{
            const payload = {
                username,
                id
            }
            const token = this.jwtService.sign(payload);
            return {token};
        }catch(err){
            return err;
        }
    }
}