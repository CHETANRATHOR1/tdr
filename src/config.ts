
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {} from './module/auth/entities/auth.entity'
import { UsersEntity } from './module/users/entities/user.entity';
const config: TypeOrmModuleOptions = {
    type:'postgres',
    host:'localhost',
    password:'12345678',
    username:'postgres',
    synchronize:true,
    database:'tender',
    entities:[UsersEntity],
    port:5432
};

export default config;
