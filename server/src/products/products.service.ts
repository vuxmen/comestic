import {Injectable, NotFoundException} from '@nestjs/common'
import {Product} from './products.model'

@Injectable()
export class ProductsService {
  products: Product[] = []
  increaseAutoId: number = 0
  constructor() {}

  getProducts() {
    return this.products
  }

  addProduct(name: string, price: number, amount: number) {
    const productId = this.increaseAutoId +=1;
    const newProduct = new Product(productId.toString(), name, price, amount)
    this.products.push(newProduct)
    this.increaseAutoId = productId
    return newProduct
  }

  getProduct(id: string) {
    const product = this.products.find(product => product.id === id)
    if (!product) {
      throw new NotFoundException('Cant find product with this id')
    }
    return {...product}
  }

  updateProduct(id: string, name?: string, price?: number, amount?: number) {
    const productIndex = this.products.findIndex(product => product.id === id)
    const updateProduct = {...this.products[productIndex], name, price, amount}
    this.products[productIndex] = updateProduct
    return updateProduct
  }
}
