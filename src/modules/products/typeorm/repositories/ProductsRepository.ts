import { AppDataSource } from '@shared/typeorm/data-source'
import { Repository } from 'typeorm'
import Product from '../entities/Product'

export class ProductsRepository {
  readonly productOrm: Repository<Product>

  constructor () {
    this.productOrm = AppDataSource.getRepository(Product)
  }

  public async findByName (name: string): Promise<Product | null> {
    const product = await this.productOrm.findOne({
      where: {
        name
      }
    })

    return product
  }
}
