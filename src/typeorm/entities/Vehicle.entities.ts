import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Establishment } from './Establishment.entities';

@Entity({ name: 'vehicles' })
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string

  @Column()
  model: string

  @Column()
  color: string

  @Column()
  plate: string;

  @Column()
  type: string;

  @ManyToOne(() => Establishment, (establishment) => establishment)
  establishment: Establishment

}