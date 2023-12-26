import { IsNotEmpty } from '@nestjs/class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class UpdateVehicleDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly brand: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly model: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly color: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly plate: string;
}