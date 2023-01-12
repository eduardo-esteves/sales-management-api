import 'reflect-metadata'
import 'dotenv/config'
import { AppDataSource } from '../typeorm/data-source'
import { app } from './app'

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
  .then(() => {
    const port = process.env.API_PORT ?? ''
    app.listen(port, () => console.log(`Server started on porta ${port}`))
  })
  .catch((error) => console.log(error))
