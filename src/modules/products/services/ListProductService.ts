import Product from '../typeorm/entities/Product'
import { ProductsRepository } from '../typeorm/repositories/ProductsRepository'

export default class ListProductService {
  private readonly productRepository: ProductsRepository

  constructor () {
    this.productRepository = new ProductsRepository()
  }

  public async execute (): Promise<Product[]> {
    const products = await this.productRepository.productOrm.find()

    return products
  }
}
