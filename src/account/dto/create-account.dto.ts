import {
    IsString,
    MaxLength,
    MinLength,
    IsNumber,
    IsEmpty,
    IsNotEmpty,
  } from 'class-validator';

export default class CreateAccountDto {
    @IsNotEmpty({message:"Kérem írja be a számlaszámát!"})
    @IsString({ message: 'Kérlek az alábbi formátum alatt adj meg számlaszámot: 1111-1111 ' })
    @MinLength(9, { message: 'Kérlek érvényes bankszámla számot adj meg(hosszúság min 8 karakter)!' })
    @MaxLength(9, { message: 'Kérlek érvényes bankszámla számot adj meg(hosszúság max 8 karakter)!' })
    accountNumber: string;
  
    @IsNotEmpty({message:"Kérem írja be egyenlegét!"})
    @IsNumber()
    balance: number;

  }
