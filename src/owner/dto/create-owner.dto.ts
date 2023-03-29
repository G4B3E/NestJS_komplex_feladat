import {
    IsString,
    MaxLength,
    MinLength,
    IsBoolean,
    IsNotEmpty
  } from 'class-validator';

export default class CreateOwnerDto {
    @IsNotEmpty({message:"Kérem írja be teljes nevét!"})
    @IsString({ message: 'Kérlek létező nevet adj meg!' })
    @MinLength(5, { message: 'Kérlek érvényes nevet  adj meg(hosszúság min 5 karakter)!' })
    @MaxLength(30, { message: 'Kérlek érvényes nevet adj meg(hosszúság max 30 karakter)!' })
    fullName: string;
  
    @IsNotEmpty({message:"Kérem írja be a vállalkozásának típusát!(true or false)"})
    @IsBoolean({message:"sss"})
    business: boolean;
  }
