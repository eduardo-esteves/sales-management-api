import { Router } from 'express'
import productsRouter from '@modules/products/routes/products.routes'

const routes = Router()

routes.use('/products', productsRouter)

routes.get('/', (req, resp) => resp.json({
  message: 'Hello Sales Management API'
}))

export default routes
