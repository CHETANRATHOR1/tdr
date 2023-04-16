import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthDto, CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { response } from 'express';

@Injectable()
export class AuthService {

  constructor(
    private usersService:UsersService
  ){}

  async create(signInDto: AuthDto) {
   try {
    let user = await this.usersService.findOne(signInDto)
    console.log("user",user);
    
    if (!user) {
      const otp = this.generateOtp()
      let response =  this.usersService.create(signInDto)
      return {response,otp:otp}  
    }

    return new BadRequestException({HttpStatus:400,message:'User Already Existed',statusCode:401})


   } catch (error) {
    
   }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(by: number) {
    return `This action returns a # auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  generateOtp(){
    return Math.floor(Math.random() * 9000) 
  }
}
