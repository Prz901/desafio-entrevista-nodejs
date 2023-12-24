import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Vehicle } from 'src/typeorm/entities/Vehicle.entities';
import { Repository } from 'typeorm';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle) private establishmentRepository: Repository<Vehicle>
  ) { }

  async find() {
    return 'entrei na rota'
    // return await this.establishmentRepository.find()
  }

}
