import { Module } from '@nestjs/common';
import { EstablishmentService } from './establishment.service';
import { EstablishmentController } from './establishment.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Establishment } from 'src/typeorm/entities/Establishment.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Establishment])],
  providers: [EstablishmentService],
  controllers: [EstablishmentController]
})
export class EstablishmentModule { }
