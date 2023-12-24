import { Controller, UseGuards, Get, Post, Put, Delete, Body, Param, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { EstablishmentService } from './establishment.service';
import { AuthGuard } from '@nestjs/passport'
import { CreateEstablishmentDto } from './dtos/CreateEstablishment.dto';
import { UpdateEstablishmentDto } from './dtos/UpdateEstablishment.dto';


@Controller('establishment')
@UseGuards(AuthGuard('jwt'))
export class EstablishmentController {
  constructor(private readonly establishmentService: EstablishmentService) { }

  @Get()
  async index() {
    return await this.establishmentService.findAll()
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id: number) {
    return await this.establishmentService.findEstablishment(id)
  }

  @Post()
  async create(@Body() createEstablishmentDto: CreateEstablishmentDto) {
    return await this.establishmentService.create(createEstablishmentDto)
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateEstablishmentDto,
  ) {
    return await this.establishmentService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', ParseIntPipe) id: number) {
    await this.establishmentService.destroy(id);
  }

}
