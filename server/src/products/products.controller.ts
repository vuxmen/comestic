import {Controller, Get, Post, Body, Param, Patch} from '@nestjs/common'
import {ProductsService} from './products.service'

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post('add')
  addProduct(
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('amount') amount: number
  ) {
    return this.productsService.addProduct(name, price, amount)
  }

  @Get()
  getProducts() {
    return this.productsService.getProducts()
  }

  @Get(':id')
  getProduct(@Param('id') productId: string) {
    return this.productsService.getProduct(productId)
  }

  @Patch(':id')
  updateProduct(
    @Param('id') productId: string,
    @Body('name') name?: string,
    @Body('price') price?: number,
    @Body('amount') amount?: number
    ) {
      return this.productsService.updateProduct(productId, name, price, amount)
    }

}
