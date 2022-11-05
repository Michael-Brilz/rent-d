import { Body, Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDocument} from './User';
import { UserService } from './users.service';


@Controller('registmember')
export class UserController {
  constructor(private usersService: UserService) {}


  // @Get()
  // async getUsers(): Promise<UserDocument[]> {
  //     return this.usersService.getByEmail();
  // }

  @Post()
  async createUser(
    @Body() createUserDto: CreateUserDto){
    const newPost = await this.usersService.createUser(createUserDto);
       

    // return this.usersService.createUser(createUserDto)
      
  }


}