import { IsNotEmpty } from '@nestjs/class-validator'
import { ApiProperty } from '@nestjs/swagger'


export class UpdateUserDto {

  @ApiProperty()
  username: string;


  @ApiProperty()
  password: string;
}