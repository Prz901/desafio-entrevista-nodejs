import { Controller, UseGuards, Get, Post, Delete, Put, ParseIntPipe, Param, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dtos/CreateVehicle.dto';
import { UpdateVehicleDto } from './dtos/UpdateVehicle.dto';

@Controller('vehicle')
@UseGuards(AuthGuard('jwt'))
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) { }

  @Get()
  async index() {
    return await this.vehicleService.find()
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id: number) {
    return await this.vehicleService.findVehicle(id)
  }

  @Post()
  async create(@Body() createVehicle: CreateVehicleDto) {
    return await this.vehicleService.create(createVehicle)
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateVehicleDto,) {
    return await this.vehicleService.update(id, body)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', ParseIntPipe) id: number) {
    return await this.vehicleService.destroy(id)
  }

}
