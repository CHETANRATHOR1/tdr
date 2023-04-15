import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './module/auth/auth.module';
import { Auth } from './module/auth/entities/auth.entity';
import { UsersModule } from './module/users/users.module';
import { SharedModule } from './module/shared/shared.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    password:'12345678',
    username:'postgres',
    synchronize:true,
    database:'tender',
    entities: [Auth],
    migrations: [],
    port:5432

  }), AuthModule, UsersModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
