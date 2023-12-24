import { Controller, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
@UseGuards(AuthGuard('jwt'))
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) { }

  @Get()
  async index() {
    return await this.vehicleService.find()
  }

}
