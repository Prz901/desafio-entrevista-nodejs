import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Vehicle } from 'src/typeorm/entities/Vehicle.entities';
import { Establishment } from 'src/typeorm/entities/Establishment.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle]), TypeOrmModule.forFeature([Establishment])],
  providers: [VehicleService],
  controllers: [VehicleController]
})
export class VehicleModule { }
