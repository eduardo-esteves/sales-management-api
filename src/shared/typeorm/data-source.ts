import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: '12345678',
  database: 'sales_management_api',
  synchronize: true,
  logging: true,
  entities: ['src/modules/**/typeorm/entities/*{.ts,js}'],
  subscribers: [],
  migrations: ['src/shared/typeorm/migrations/**/*{.ts,js}']
})
