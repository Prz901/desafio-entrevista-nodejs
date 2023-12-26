import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

import { hashSync } from 'bcrypt'

@Entity({ name: 'users' })
export class User {

  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  username: string

  @Column()
  @ApiProperty()
  password: string

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10)
  }
}