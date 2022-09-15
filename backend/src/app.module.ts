import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER } from '@nestjs/core';
import { NotFoundExceptionFilter } from './filter/not-found-exception-filter';
import { GqlModule } from './gql/gql.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [GqlModule, DatabaseModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: NotFoundExceptionFilter,
    },
  ],
})
export class AppModule {}
