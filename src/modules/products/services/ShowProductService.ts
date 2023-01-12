import AppError from '@shared/errors/AppError'
import Product from '../typeorm/entities/Product'
import { ProductsRepository } from '../typeorm/repositories/ProductsRepository'

interface IRequest {
  id: string
}

export default class ShowProductService {
  productRepository: ProductsRepository

  constructor () {
    this.productRepository = new ProductsRepository()
  }

  public async execute ({ id }: IRequest): Promise<Product | null> {
    const product = await this.productRepository.productOrm.findOne({ where: { id } })

    if (!product) {
      throw new AppError('Product not found')
    }

    return product
  }
}
