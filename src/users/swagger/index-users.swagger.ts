import { User } from "src/typeorm/entities/User.entities";
import { OmitType } from '@nestjs/swagger'

export class IndexUserSwagger extends OmitType(User, ['password']) { }