import { Request, Response } from 'express'
import ListProductService from '../services/ListProductService'

export default class ProductsController {
  public async index (req: Request, resp: Response): Promise<Response> {
    const listProducts = new ListProductService()
    const product = await listProducts.execute()

    return resp.json(product)
  }
}
