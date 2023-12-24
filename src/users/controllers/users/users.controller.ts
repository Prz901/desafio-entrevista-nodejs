import { Controller, Get, Post, Body, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

  constructor(private userService: UsersService) { }

  @Get()
  async getUsers() {
    const users = await this.userService.findAllUsers()
    return users
  }

  @Post('/find')
  async getOneUser(@Body() user: { username: string }) {
    const { username } = user
    return await this.userService.findUser(username);
  }

  @Post()
  createUser(@Body() CreateUserDto: CreateUserDto) {
    return this.userService.createUser(CreateUserDto)
  }

  @Put(':id')
  updateUserById(@Param('id', ParseIntPipe) id: number, @Body() UpdateUser: UpdateUserDto) {
    return this.userService.updateUser(id, UpdateUser)
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.deleteUser(id)

    return {
      message: 'User delete with success'
    }
  }


}
