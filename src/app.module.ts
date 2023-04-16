import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './module/auth/auth.module';
import { Auth } from './module/auth/entities/auth.entity';
import { UsersModule } from './module/users/users.module';
import { SharedModule } from './module/shared/shared.module';
import config from './config';

@Module({
  imports: [TypeOrmModule.forRoot(config), AuthModule, UsersModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  
}
