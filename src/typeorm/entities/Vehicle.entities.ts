import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Establishment } from './Establishment.entities';
import { ApiProperty } from '@nestjs/swagger'

@Entity({ name: 'vehicles' })
export class Vehicle {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  brand: string

  @Column()
  @ApiProperty()
  model: string

  @Column()
  @ApiProperty()
  color: string

  @Column()
  @ApiProperty()
  plate: string;

  @Column()
  @ApiProperty()
  type: string;

  @ManyToOne(() => Establishment, (establishment) => establishment)
  establishment: Establishment

}