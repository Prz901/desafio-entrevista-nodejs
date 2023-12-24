import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm'

import { hashSync } from 'bcrypt'

@Entity({ name: 'users' })
export class User {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string

  @Column()
  password: string

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10)
  }
}