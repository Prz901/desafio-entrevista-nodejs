import { IsNotEmpty } from '@nestjs/class-validator'

export class UpdateVehicleDto {
  @IsNotEmpty()
  readonly brand: string;

  @IsNotEmpty()
  readonly model: string;

  @IsNotEmpty()
  readonly color: string;

  @IsNotEmpty()
  readonly plate: string;
}