import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_URL_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: ['src/modules/**/typeorm/entities/*{.ts,js}'],
  subscribers: [],
  migrations: ['src/shared/typeorm/migrations/**/*{.ts,js}']
})
