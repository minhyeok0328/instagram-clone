import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), '../frontend/schema.graphql'),
      sortSchema: true,
      playground: true,
      debug: process.env.NODE_ENV !== 'production',
      context: ({ req, connection }) => {
        if (req) {
          return req;
        } else {
          return connection;
        }
      },
    }),
    UserModule,
  ],
  providers: [],
})
export class GraphqlModule {}
