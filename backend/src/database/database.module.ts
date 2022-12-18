import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'instagram',
      entities: [User],
      synchronize: process.env.NODE_ENV !== 'production',
      cache: {
        type: 'redis',
        options: {
          host: 'localhost',
          port: 6379,
        },
      },
    }),
  ],
})
export class DatabaseModule {}
