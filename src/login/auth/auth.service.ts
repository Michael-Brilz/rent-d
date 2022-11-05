import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/models/UserModule/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
constructor(private userService: UserService) {}


    async validateUser(email: string, password: string): Promise<any> {
        try {
        const user = await this.userService.getByEmail(email);
        const isPasswordMatching = await bcrypt.compare(password, user.password);
       if(!isPasswordMatching){
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
       }
       user.password = undefined;
       return user;
    } catch(error) {
        throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
}
}