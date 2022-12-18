import type { ClientOpts } from 'redis';
import * as redisStore from 'cache-manager-redis-store';
import { CacheModule as cacheModule, Module } from '@nestjs/common';

@Module({
  imports: [
    cacheModule.register<ClientOpts>({
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
  ],
})
export class CacheModule {}
