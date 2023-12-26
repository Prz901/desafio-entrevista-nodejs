import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { compareSync } from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { UserLoginParams } from 'src/utils/types';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) { }

  async login(userlogin: UserLoginParams) {
    const payload = { sub: userlogin.username }

    return {
      token: this.jwtService.sign(payload)
    }
  }

  async validateUser(username: string, password: string) {
    const user = await this.userService.findUser(username)

    if (user === null) {
      return null
    }

    const isPasswordValid = compareSync(password, user.password)

    if (!isPasswordValid) return null

    return user
  }
}
