import { Controller, UseGuards, Get, Post, Delete, Put, ParseIntPipe, Param, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dtos/CreateVehicle.dto';
import { UpdateVehicleDto } from './dtos/UpdateVehicle.dto';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IndexVehiclesSwagger } from './swagger/index-vehicles.swagger';
import { CreateVehicleSwagger } from './swagger/create-vehicle.swagger';

@ApiBearerAuth()
@Controller('vehicle')
@ApiTags('Vehicles')
@UseGuards(AuthGuard('jwt'))
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) { }

  @Get()
  @ApiOperation({ summary: 'Lista todos os veículos da aplicação' })
  @ApiResponse({ status: 200, description: "Lista de veículos retornado com sucesso", type: IndexVehiclesSwagger, isArray: true })
  async index() {
    return await this.vehicleService.find()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lista apenas um único veículo da aplicação' })
  @ApiResponse({ status: 200, description: "Veículo retornado com sucesso", type: IndexVehiclesSwagger })
  async show(@Param('id', ParseIntPipe) id: number) {
    return await this.vehicleService.findVehicle(id)
  }

  @Post(':idEstablisment')
  @ApiOperation({ summary: 'Cria um novo veículo para o estabelecimento na vaga disponível' })
  @ApiResponse({ status: 200, description: "Veículo criado e associado com sucesso", type: CreateVehicleSwagger })
  async create(@Param('idEstablishment', ParseIntPipe) idEstablisment: number, @Body() createVehicle: CreateVehicleDto) {
    return await this.vehicleService.create(idEstablisment, createVehicle)
  }

  @Put(':id')
  @ApiOperation({ summary: 'Edita informação do veículo' })
  async update(@Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateVehicleDto,) {
    return await this.vehicleService.update(id, body)
  }

  @Delete('/:idEstablishment/:id')
  @ApiOperation({ summary: 'Remove o veículo da vaga do estabelecimento' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('idEstablishment', ParseIntPipe) idEstablisment: number, @Param('id', ParseIntPipe) idVehicle: number) {
    return await this.vehicleService.destroy(idEstablisment, idVehicle)
  }

}
