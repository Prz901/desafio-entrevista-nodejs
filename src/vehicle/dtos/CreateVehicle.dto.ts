import { IsNotEmpty } from '@nestjs/class-validator'
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVehicleDto {
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

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly type: string;
}