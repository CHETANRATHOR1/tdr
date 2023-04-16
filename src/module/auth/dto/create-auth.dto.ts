import { BadRequestException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  ValidateIf,
} from 'class-validator';

export class CreateAuthDto {}

export class AuthDto {
   

  @ApiProperty()
  @ValidateIf((object) => object.mobile_number === undefined)
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty()
  @ValidateIf((object) => object.email === undefined)
  @IsNotEmpty()
  mobile_number: string;

  validate() {
    if ((this.email && this.email) || (!this.mobile_number && !this.email)) {
      throw new Error(
        'Either mobile or email is required, not both or neither',
      );
    }
  }
}
