import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './models/UserModule/user.module';
import { AuthModule } from './login/auth/auth.module';
import { AuthController } from './login/auth/auth.controller';
import { AuthService } from './login/auth/auth.service';

const dotenv = require("dotenv");
dotenv.config();


@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI), UserModule, AuthModule, UserModule],
  controllers: [AppController, LoginController, AuthController],
  providers: [AppService, LoginService, AuthService],
})
export class AppModule {}
