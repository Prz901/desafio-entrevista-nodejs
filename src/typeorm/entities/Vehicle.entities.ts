import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

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

}