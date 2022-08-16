import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export = [
  {
    name: 'blog',
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123',
    database: 'blog',
    port: 5433,
    logging: false,
    migrationsRun: false,
    synchronize: false,
    migrations: ['src/db/migrations/*.ts'],
    entities: ['src/db/entities/*.ts'],
  },
] as TypeOrmModuleOptions[];
