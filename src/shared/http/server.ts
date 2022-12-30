import 'reflect-metadata'
import { AppDataSource } from '../typeorm/data-source'
import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import routes from './routes'
import AppErros from '@shared/errors/AppError'

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

app.use((error: Error, req: Request, resp: Response, next: NextFunction) => {
  if (error instanceof AppErros) {
    return resp.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }
  return resp.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
  .then(() => {
    const port = 3000
    app.listen(port, () => console.log(`Server started on port ${port}`))
  })
  .catch((error) => console.log(error))
