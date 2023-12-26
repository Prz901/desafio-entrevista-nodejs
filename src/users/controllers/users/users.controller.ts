import { Controller, Get, Post, Body, Put, Param, ParseIntPipe, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IndexUserSwagger } from 'src/users/swagger/index-users.swagger';
import { CreateUserSwagger } from 'src/users/swagger/create-users.swagger';
import { UpdateUserSwagger } from 'src/users/swagger/update-users.swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private userService: UsersService) { }

  @Get()
  @ApiOperation({ summary: 'Lista todos os usuários da aplicação' })
  @ApiResponse({ status: 200, description: "Lista de usuários retornado com sucesso", type: IndexUserSwagger, isArray: true })
  async getUsers() {
    const users = await this.userService.findAllUsers()
    return users
  }

  @Get(':id')
  @ApiOperation({ summary: 'Exibir os dados de um único usuário' })
  @ApiResponse({ status: 200, description: "Dados de um único usuario", type: IndexUserSwagger })
  @ApiResponse({ status: 404, description: "Usuário não foi encontrado" })
  async getOneUser(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.find(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuário' })
  @ApiResponse({ status: 201, description: "Usuário criado com sucesso", type: CreateUserSwagger })
  @ApiResponse({ status: 400, description: "Parâmetros inválidos" })
  createUser(@Body() CreateUserDto: CreateUserDto) {
    return this.userService.create(CreateUserDto)
  }

  @Put(':id')
  @ApiOperation({ summary: 'Edita os dados do usuário' })
  @ApiResponse({ status: 200, description: "Usuário atualizado com sucesso", type: UpdateUserSwagger })
  @ApiResponse({ status: 404, description: "Usuário não encontrado" })
  updateUserById(@Param('id', ParseIntPipe) id: number, @Body() UpdateUser: UpdateUserDto) {
    return this.userService.update(id, UpdateUser)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta o usuário' })
  @ApiResponse({ status: 204 })
  @ApiResponse({ status: 404, description: "Usuário não encontrado" })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.userService.destroy(id)
  }
}
