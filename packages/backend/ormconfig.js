const { resolve }= require('path')

module.exports = {
  type: "sqlite",
  host: "localhost",
  port: 3306,
  username: "",
  password: "",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [
    resolve(__dirname, 'src', 'infra', 'entities', '*.ts')
   ],
  migrations: [
    resolve(__dirname, 'src', 'database','migrations', '*.ts')
  ],
  subscribers: [
    "src/subscriber/**/*.ts"
  ],
  cli: {
    "entitiesDir": 'src/infra/entities',
    "migrationsDir": 'src/database/migrations',
    "subscribersDir": 'src/subscriber',
  }
}