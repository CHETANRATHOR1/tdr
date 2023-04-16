import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsNotEmpty, IsOptional, IsString, ValidateIf } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @ValidateIf((object) => object.mobile_number === undefined)
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty()
  @ValidateIf((object) => object.email === undefined)
  @IsNotEmpty()
  mobile_number: string;

//   @ApiProperty()
//   @IsEmpty()
//   @IsOptional()
//   mobileNumber: string;

//   @IsEmpty()
//   @IsOptional()
//   fullName: string;

//   @IsEmpty()
//   @IsOptional()
//   email: string;

//   @IsEmpty()
//   @IsOptional()
//   hasEmailVerified: boolean;

//   @IsEmpty()
//   @IsOptional()
//   hasMobileVerified: boolean;

//   @IsEmpty()
//   @IsOptional()
//   profileRiskType: string;

//   @IsEmpty()
//   @IsOptional()
//   deviceToken: string;

//   @IsEmpty()
//   @IsOptional()
//   authToken: string;

//   @IsEmpty()
//   @IsOptional()
//   avatar: string;

//   @IsEmpty()
//   @IsOptional()
//   hasNotificationTurnedOn: string;
}
