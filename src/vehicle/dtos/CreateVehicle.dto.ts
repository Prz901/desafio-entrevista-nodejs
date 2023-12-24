import { IsNotEmpty } from '@nestjs/class-validator'

export class CreateVehicleDto {
  @IsNotEmpty()
  readonly brand: string;

  @IsNotEmpty()
  readonly model: string;

  @IsNotEmpty()
  readonly color: string;

  @IsNotEmpty()
  readonly plate: string;

  @IsNotEmpty()
  readonly type: string;
}