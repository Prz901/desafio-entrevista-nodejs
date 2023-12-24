import { IsNotEmpty } from '@nestjs/class-validator'

export class CreateEstablishmentDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly cnpj: string;

  @IsNotEmpty()
  readonly address: string;

  @IsNotEmpty()
  readonly phone: string

  @IsNotEmpty()
  readonly qtdMotorcicle: number

  @IsNotEmpty()
  readonly qtdCar: number
}