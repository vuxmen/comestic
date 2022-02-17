import {Entity, Column, OneToOne, ManyToMany, JoinColumn} from 'typeorm'
import {Base} from './base'
import {Organization} from './organization.entity'
import {Transaction} from './transaction.entity'

@Entity({name: 'User'})
export class User extends Base {
  @Column({name: 'first_name'})
  firstName: string

  @Column({name: 'last_name'})
  lastName: string

  @Column({name: 'date_of_birth'})
  dateOfBirth: Date

  @Column({name: 'email', nullable: true})
  email: string

  @OneToOne(() => Organization, {cascade: true})
  @JoinColumn({name: 'organization_id'})
  organization: Organization

  @ManyToMany(() => Transaction)
  transactions: Transaction[]
}