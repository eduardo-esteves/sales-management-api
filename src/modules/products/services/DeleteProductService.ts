import AppError from '@shared/errors/AppError'
import { ProductsRepository } from '../typeorm/repositories/ProductsRepository'

interface IRequest {
  id: string
}

export default class DeleteProductService {
  productRepository: ProductsRepository

  constructor () {
    this.productRepository = new ProductsRepository()
  }

  public async execute ({ id }: IRequest): Promise<void> {
    const product = await this.productRepository.productOrm.findOne({ where: { id } })

    if (!product) {
      throw new AppError('Product not found')
    }

    await this.productRepository.productOrm.remove(product)
  }
}
