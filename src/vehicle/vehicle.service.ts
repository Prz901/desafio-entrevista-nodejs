import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Vehicle } from 'src/typeorm/entities/Vehicle.entities';
import { CreateVehicleParams, UpdateVehicleParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle) private vehicleRepository: Repository<Vehicle>
  ) { }

  async find() {
    return await this.vehicleRepository.find()
  }

  async findVehicle(id: number) {
    const vehicle = await this.vehicleRepository.findOne({
      where: {
        id: id
      }
    })
    return vehicle
  }

  async create(createVehicle: CreateVehicleParams) {
    const vehicle = await this.vehicleRepository.create({ brand: createVehicle.brand, color: createVehicle.color, model: createVehicle.model, plate: createVehicle.plate, type: createVehicle.type })

    return await this.vehicleRepository.save(vehicle)

  }

  async update(id: number, UpdateEstablishment: UpdateVehicleParams) {
    return await this.vehicleRepository.update({ id }, { ...UpdateEstablishment })
  }

  async destroy(id: number) {
    return await this.vehicleRepository.delete({ id })
  }

}
