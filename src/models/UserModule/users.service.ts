import { HttpException, Injectable, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserRegist, UserDocument }  from './User';
import { Model } from "mongoose"; 
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
    constructor(@InjectModel(UserRegist.name) private userModel: Model<UserDocument>) {}

    async createUser(createUserDto: CreateUserDto): Promise<UserDocument>{

        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(createUserDto.password, salt)

        const member = new this.userModel();
        member.firstname = createUserDto.firstname;
        member.lastname = createUserDto.lastname;
        member.email = createUserDto.email;
        member.created = createUserDto.created
        member.password = password;

        return await member.save();
    }

    async getByEmail(email: string): Promise<any>{
      const user = await this.userModel.findOne({email: email});
      if (user){
        return user;
      }
      throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
    }

   
}