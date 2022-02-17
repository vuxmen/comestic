import {Entity, Column, ManyToMany, OneToMany, JoinTable} from 'typeorm'
import {Base} from './base'
import {Transaction} from './transaction.entity'

@Entity({name: 'Production'})
export class Production extends Base {
  @Column({name: 'production_model'})
  model: string

  @Column({name: 'production_name'})
  name: string

  @Column({name: 'price'})
  price: number

  @Column({name: 'total_items'})
  totalItems: number

  @Column({name: 'sold_quantity'})
  soldQuantity: number

  @Column({name: 'inventory_quantity'})
  inventoryQuantity: number

  @OneToMany(() => Transaction, transaction => transaction.production, {cascade: true})
  transactions: Transaction[]
}