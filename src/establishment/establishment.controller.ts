import { Controller, UseGuards, Get, Post, Put, Delete, Body, Param, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { EstablishmentService } from './establishment.service';
import { AuthGuard } from '@nestjs/passport'
import { CreateEstablishmentDto } from './dtos/CreateEstablishment.dto';
import { UpdateEstablishmentDto } from './dtos/UpdateEstablishment.dto';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IndexEstablishmentSwagger } from './swagger/index-establishment.swagger';
import { CreateEstablishmentSwagger } from './swagger/create-establishment.swagger';

@ApiBearerAuth()
@Controller('establishment')
@ApiTags('Establishments')
@UseGuards(AuthGuard('jwt'))
export class EstablishmentController {
  constructor(private readonly establishmentService: EstablishmentService) { }

  @Get()
  @ApiOperation({ summary: 'Lista todos os estabelecimentos da aplicação' })
  @ApiResponse({ status: 200, description: "Lista de usuários retornado com sucesso", type: IndexEstablishmentSwagger, isArray: true })
  async index() {
    return await this.establishmentService.findAll()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lista apenas um único estabelecimento' })
  @ApiResponse({ status: 200, description: "Lista de estabelecimentos retornados com sucesso", type: IndexEstablishmentSwagger })
  async show(@Param('id', ParseIntPipe) id: number) {
    return await this.establishmentService.findEstablishment(id)
  }

  @Post()
  @ApiOperation({ summary: 'Cria um novo estabelecimento' })
  @ApiResponse({ status: 200, description: "Lista de usuários retornado com sucesso", type: CreateEstablishmentSwagger })
  async create(@Body() createEstablishmentDto: CreateEstablishmentDto) {
    return await this.establishmentService.create(createEstablishmentDto)
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza um estabelecimento' })
  async update(@Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateEstablishmentDto,
  ) {
    return await this.establishmentService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete um estabelecimento' })
  async destroy(@Param('id', ParseIntPipe) id: number) {
    await this.establishmentService.destroy(id);
  }

}
