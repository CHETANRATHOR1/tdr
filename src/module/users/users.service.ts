import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { findOneUserBy } from './interface/findoneby.interface';
import { profileRiskType, status } from '../shared/app_constant/appConstant';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    let res =  this.userRepository.create(createUserDto);
    let user = await this.userRepository.save(res)
    return user;
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(by: findOneUserBy) {
    return await this.userRepository.findOne({
      where: by,
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
