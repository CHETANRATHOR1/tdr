import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '../users/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UsersEntity])],
  controllers: [AuthController],
  providers: [AuthService,UsersService]
})
export class AuthModule {}
