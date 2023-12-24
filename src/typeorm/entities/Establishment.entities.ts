import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

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
  qtdMotorcicle: number;

  @Column()
  qtdCar: number;

}