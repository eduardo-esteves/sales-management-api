import { Request, Response } from 'express'
import ListProductService from '../services/ListProductService'
import ShowProductService from '../services/ShowProductService'
import CreateProductService from '../services/CreateProductService'
import UpdateProductService from '../services/UpdateProductService'
import DeleteProductService from '../services/DeleteProductService'

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

  public async update (req: Request, resp: Response): Promise<Response> {
    const { name, price, quantity } = req.body
    const { id } = req.params

    const updateProduct = new UpdateProductService()
    const product = await updateProduct.execute({
      id,
      name,
      price,
      quantity
    })

    return resp.json(product)
  }

  public async delete (req: Request, resp: Response): Promise<Response> {
    const { id } = req.params
    const deleteProduct = new DeleteProductService()

    await deleteProduct.execute({ id })
    return resp.json([])
  }
}
