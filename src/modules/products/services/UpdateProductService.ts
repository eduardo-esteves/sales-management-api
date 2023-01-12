import AppError from '@shared/errors/AppError'
import Product from '../typeorm/entities/Product'
import { ProductsRepository } from '../typeorm/repositories/ProductsRepository'

interface IRequest {
  id: string
  name: string
  price: number
  quantity: number
}

export default class UpdateProductService {
  productRepository: ProductsRepository

  constructor () {
    this.productRepository = new ProductsRepository()
  }

  public async execute ({ id, name, price, quantity }: IRequest): Promise<Product | null> {
    const product = await this.productRepository.productOrm.findOne({ where: { id } })

    if (!product) {
      throw new AppError('Product not found')
    }

    const productExists = await this.productRepository.findByName(name)

    if (productExists && name !== product.name) {
      // eslint-disable-next-line
      throw new AppError('There is already one product with this name')
    }

    product.name = name
    product.price = price
    product.quantity = quantity

    await this.productRepository.productOrm.save(product)

    return product
  }
}
