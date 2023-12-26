import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Vehicle } from './Vehicle.entities';

@Entity({ name: 'establishments' })
export class Establishment {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string

  @Column()
  cnpj: string

  @Column()
  address: string

  @Column()
  phone: string

  @Column()
  qtdMotorcycle: number;

  @Column()
  qtdCar: number;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.establishment)
  vehicle: Vehicle[]
}