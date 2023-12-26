import { IsNotEmpty } from '@nestjs/class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEstablishmentDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly cnpj: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly address: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly phone: string

  @IsNotEmpty()
  @ApiProperty()
  readonly qtdMotorcycle: number

  @IsNotEmpty()
  @ApiProperty()
  readonly qtdCar: number
}