import { ConnectionOptions } from 'typeorm';

import { resolve } from 'path';

const database_config: ConnectionOptions = {
  type: 'sqlite',
  database: 'database.sqlite',
  synchronize: true,
  logging: false,
  entities: [resolve(__dirname, '..', 'infra', 'entities', '*.ts')],
  migrations: [resolve(__dirname, '..', 'database', 'migrations', '*.ts')],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: resolve(__dirname, '..', 'infra', 'entities', '*.ts'),
    migrationsDir: resolve(__dirname, '..', 'database', 'migrations', '*.ts'),
    subscribersDir: 'src/subscriber',
  },
};

export default database_config;
