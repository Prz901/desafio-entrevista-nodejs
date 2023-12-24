import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Establishment } from 'src/typeorm/entities/Establishment.entities';
import { CreateEstablishmentParams, UpdateEstablishmentParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class EstablishmentService {
  constructor(
    @InjectRepository(Establishment) private establishmentRepository: Repository<Establishment>
  ) { }

  async findAll() {
    return await this.establishmentRepository.find()
  }

  async findEstablishment(id: number) {
    const user = await this.establishmentRepository.findOne({
      where: {
        id: id
      }
    })
    return user
  }

  async create(createEstablishment: CreateEstablishmentParams) {
    const newEstablishment = await this.establishmentRepository.create({ name: createEstablishment.name, cnpj: createEstablishment.cnpj, address: createEstablishment.address, phone: createEstablishment.phone, qtdCar: createEstablishment.qtdCar, qtdMotorcicle: createEstablishment.qtdMotorcicle })

    return await this.establishmentRepository.save(newEstablishment)
  }

  async update(id: number, UpdateEstablishment: UpdateEstablishmentParams) {
    return await this.establishmentRepository.update({ id }, { ...UpdateEstablishment })
  }

  async destroy(id: number) {
    return await this.establishmentRepository.delete({ id })
  }


}
