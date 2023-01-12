import AppError from '@shared/errors/AppError'
import Product from '../typeorm/entities/Product'
import { ProductsRepository } from '../typeorm/repositories/ProductsRepository'

interface IRequest {
  name: string
  price: number
  quantity: number
}

export default class CreateProductService {
  productRepository: ProductsRepository

  constructor () {
    this.productRepository = new ProductsRepository()
  }

  public async execute ({ name, price, quantity }: IRequest): Promise<Product> {
    const productExists = await this.productRepository.findByName(name)

    if (productExists) {
      // eslint-disable-next-line
      throw new AppError('There is already one product with this name')
    }

    const product = this.productRepository.productOrm.create({
      name,
      price,
      quantity
    })

    await this.productRepository.productOrm.save(product)

    return product
  }
}
