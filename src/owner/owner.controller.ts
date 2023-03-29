import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OwnerService } from './owner.service';
import CreateOwnerDto 
from "./dto/create-owner.dto";
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { DataSource } from 'typeorm';
import Owner from './entities/owner.entity';


@Controller('owner')
export class OwnerController {
  constructor(
    private readonly ownerService: OwnerService,
    private dataSource: DataSource,
    ) {}

  @Post('newowner')
  async newOwner(@Body() owner: CreateOwnerDto) {
    const ownerRepo = this.dataSource.getRepository(Owner);
    ownerRepo.save(owner);
    return owner;
  }

  @Get('owners')
  async listOwners() {
    const ownerRepo = this.dataSource.getRepository(Owner);
    const [adat, darab] = await ownerRepo
      .createQueryBuilder()
      .getManyAndCount();
    return { owner: adat, count: darab };
  }


  @Delete('owner/:id')
  deleteOwner(@Param('id') id: number) {
    const ownerRepo = this.dataSource.getRepository(Owner);
    ownerRepo.delete(id);
  }

}
