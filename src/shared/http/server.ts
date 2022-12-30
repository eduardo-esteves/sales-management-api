import 'reflect-metadata'
import { AppDataSource } from '../typeorm/data-source'
import { app } from './app'

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
  .then(() => {
    const port = 3000
    app.listen(port, () => console.log(`Server started on port ${port}`))
  })
  .catch((error) => console.log(error))
