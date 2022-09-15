import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Member } from './models/member.model';
import { Feed } from './models/feed.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: '1234',
      database: 'instagram',
      models: [Member, Feed],
    }),
  ],
})
export class DatabaseModule {}
