import { Injectable, NotFoundException, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Establishment } from 'src/typeorm/entities/Establishment.entities';
import { Vehicle } from 'src/typeorm/entities/Vehicle.entities';
import { CreateVehicleParams, UpdateEstablishmentParams, UpdateVehicleParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle) private vehicleRepository: Repository<Vehicle>,
    @InjectRepository(Establishment) private establishmentRepository: Repository<Establishment>
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

  async create(id: number, createVehicle: CreateVehicleParams) {
    // establishment ? type vehicle ? qtd > 0

    const establishment = await this.establishmentRepository.findOne({
      where: {
        id: id
      }
    })
    if (establishment) {
      const vehicle = await this.vehicleRepository.create({ brand: createVehicle.brand, color: createVehicle.color, model: createVehicle.model, plate: createVehicle.plate, type: createVehicle.type })
      vehicle.establishment = establishment

      if (vehicle.type === 'car') {
        if (establishment.qtdCar > 0) {
          establishment.qtdCar = establishment.qtdCar - 1
        } else {
          throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST)
        }
      }
      if (vehicle.type === 'motorcycle') {
        if (establishment.qtdMotorcycle > 0) {
          establishment.qtdMotorcycle = establishment.qtdMotorcycle - 1
        } else {
          throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST)
        }
      }

      await this.establishmentRepository.save(establishment)
      return await this.vehicleRepository.save(vehicle)

    } else {
      throw new NotFoundException('Item not found');
    }
  }

  async update(id: number, UpdateEstablishment: UpdateVehicleParams) {
    return await this.vehicleRepository.update({ id }, { ...UpdateEstablishment })
  }

  async destroy(id: number) {
    return await this.vehicleRepository.delete({ id })
  }

}
