import { Controller, Get, Res, Post, HttpCode } from '@nestjs/common';
import { response } from 'express';

@Controller('login')
export class LoginController {
    @Get()
    create(): string {
      return 'This action adds a new cat';
    }
    
    
}
