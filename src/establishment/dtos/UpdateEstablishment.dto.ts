import { IsNotEmpty } from '@nestjs/class-validator'

export class UpdateEstablishmentDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly cnpj: string;

  @IsNotEmpty()
  readonly address: string;

  @IsNotEmpty()
  readonly phone: string

  @IsNotEmpty()
  readonly qtdMotorcycle: number

  @IsNotEmpty()
  readonly qtdCar: number
}