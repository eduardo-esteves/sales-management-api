import { Request, Response } from 'express'
import ListProductService from '../services/ListProductService'
import ShowProductService from '../services/ShowProductService'
import CreateProductService from '../services/CreateProductService'

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

  public async create (req: Request, resp: Response): Promise<Response> {
    const { name, price, quantity } = req.body

    const createProduct = new CreateProductService()
    const product = await createProduct.execute({
      name,
      price,
      quantity
    })

    return resp.json(product)
  }
}
