import { AuthService } from './auth.service';
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard }  from './LocalAuthGuard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req){
        return req.user;
    }
}
