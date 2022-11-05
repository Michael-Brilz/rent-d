
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserRegist, UserSchema } from "./User";
import { UserService } from "./users.service";
import { UserController } from "./user.controller";


@Module({
    imports: [MongooseModule.forFeature([{
        schema: UserSchema,
        name: UserRegist.name
    }])],
    controllers: [UserController],
    providers: [UserService, UserRegist],
    exports: [UserService, UserRegist]
})

export class UserModule {}