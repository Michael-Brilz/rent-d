
import { UserModule } from './../../models/UserModule/user.module';
import { LocalStrategy } from './utils/local.strategy';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';



@Module({
  imports: [PassportModule, UserModule],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy]
})
export class AuthModule {}
