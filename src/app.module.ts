import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User.entities';
import { UsersModule } from './users/users.module';
import { PassportModule } from '@nestjs/passport';

import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { LocalStrategy } from './auth/strategies/local.strategy';
import { EstablishmentModule } from './establishment/establishment.module';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [__dirname + '/**/*.entities{.js,.ts}'],
      synchronize: true

    } as TypeOrmModuleOptions), UsersModule, AuthModule, EstablishmentModule, VehicleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
