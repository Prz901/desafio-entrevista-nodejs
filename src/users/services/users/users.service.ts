import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { User } from 'src/typeorm/entities/User.entities';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) { }

  findAllUsers() {
    return this.userRepository.find({ select: ['id', 'username'] })
  }

  async find(id: number) {
    const user = await this.userRepository.findOne({
      where: {
        id: id
      }
    })
    if (user) {
      return user
    } else {
      throw new NotFoundException('User not found')
    }
  }

  async findUser(
    username: string
  ) {

    const user = await this.userRepository.findOne({
      where: {
        username: username
      }
    })
    return user
  }

  create(userDetails: CreateUserParams) {
    const newUser = this.userRepository.create({ username: userDetails.username, password: userDetails.password })

    return this.userRepository.save(newUser)
  }

  async update(id: number, updateUserDetails: UpdateUserParams) {
    return await this.userRepository.update({ id }, { ...updateUserDetails })
  }

  async destroy(id: number) {
    return await this.userRepository.delete({ id })
  }

}
