import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import routes from './routes'
import AppError from '@shared/errors/AppError'

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

app.use((error: Error, req: Request, resp: Response, next: NextFunction) => {
  if (error instanceof AppError) {
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

export { app }
