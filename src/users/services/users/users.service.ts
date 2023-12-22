import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) { }

  findAllUsers() {
    return this.userRepository.find()
  }

  createUser(userDetails: CreateUserParams) {
    const newUser = this.userRepository.create({ username: userDetails.username, password: userDetails.password })

    return this.userRepository.save(newUser)
  }

  async updateUser(id: number, updateUserDetails: UpdateUserParams) {
    return await this.userRepository.update({ id }, { ...updateUserDetails })
  }

  async deleteUser(id: number) {
    return await this.userRepository.delete({ id })
  }

}
