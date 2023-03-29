import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountService } from './account.service';
import CreateAccountDto 
from "./dto/create-account.dto"
import { UpdateAccountDto } from './dto/update-account.dto';
import Account from './entities/account.entity';
import { DataSource } from 'typeorm';

@Controller('account')
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private dataSource: DataSource,
    ) {}

  @Post('newaccount')
  async newAccount(@Body() account: CreateAccountDto) {
    const accountRepo = this.dataSource.getRepository(Account);
    accountRepo.save(account);
    return account;
  }

  @Get('accounts')
  async listAccounts() {
    const accountRepo = this.dataSource.getRepository(Account);
    const [adat, darab] = await accountRepo
      .createQueryBuilder()
      .getManyAndCount();
    return { account: adat, count: darab };
  }

  @Delete('account/:id')
  deleteAccount(@Param('id') id: number) {
    const accountRepo = this.dataSource.getRepository(Account);
    accountRepo.delete(id);
  }

}
