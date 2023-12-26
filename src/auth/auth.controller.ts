import { Controller, Post, Req, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoginUserDto } from './dto/LoginUser.dto';
import { LoginUserSwagger } from './swagger/login-user.swagger';

@Controller('api/auth')
@ApiTags('Login')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiOperation({ summary: 'Efetuar login na api' })
  @ApiResponse({ status: 201, description: "Usuário logado", type: LoginUserSwagger })
  async login(@Body() loginUserDto: LoginUserDto) {
    return await this.authService.login(loginUserDto)
  }

}
