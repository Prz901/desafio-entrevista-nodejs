import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Vehicle } from './Vehicle.entities';
import { ApiProperty } from '@nestjs/swagger'

@Entity({ name: 'establishments' })
export class Establishment {

  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  name: string

  @Column()
  @ApiProperty()
  cnpj: string

  @Column()
  @ApiProperty()
  address: string

  @Column()
  @ApiProperty()
  phone: string

  @Column()
  @ApiProperty()
  qtdMotorcycle: number;

  @Column()
  @ApiProperty()
  qtdCar: number;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.establishment)
  vehicle: Vehicle[]
}