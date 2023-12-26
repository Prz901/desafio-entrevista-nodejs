import { ApiProperty } from '@nestjs/swagger'

export class LoginUserSwagger {
  @ApiProperty()
  token: string;
}