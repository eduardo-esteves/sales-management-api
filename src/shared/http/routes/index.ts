import { Router } from 'express'

const routes = Router()

routes.get('/', (req, resp) => resp.json({
  message: 'Hello Sales Management API'
}))

export default routes
