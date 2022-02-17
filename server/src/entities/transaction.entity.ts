import {Entity, Column, ManyToMany, ManyToOne, JoinColumn, JoinTable} from 'typeorm'
import {Base} from './base'
import {User} from './users.entity'
import {Production} from './production.entity'

@Entity({name: 'Transaction'})
export class Transaction extends Base {
  @Column({name: 'transaction_id'})
  transactionId: string

  @ManyToOne(() => Production, production => production.transactions)
  @JoinColumn({name: 'production_id'})
  production: Production

  @Column({name: 'total_items'})
  totalItems: number

  @Column({name: 'sold_quantity'})
  soldQuantity: number

  @Column({name: 'inventory_quantity'})
  inventoryQuantity: number

  @ManyToMany(() => User)
  @JoinTable()
  users: User[]
}