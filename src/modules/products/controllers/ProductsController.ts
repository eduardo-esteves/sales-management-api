import { Request, Response } from 'express'
import ListProductService from '../services/ListProductService'
import ShowProductService from '../services/ShowProductService'

export default class ProductsController {
  public async index (req: Request, resp: Response): Promise<Response> {
    const listProducts = new ListProductService()
    const product = await listProducts.execute()

    return resp.json(product)
  }

  public async show (req: Request, resp: Response): Promise<Response> {
    const { id } = req.params
    const showProduct = new ShowProductService()
    const product = await showProduct.execute({ id })

    return resp.json(product)
  }
}
