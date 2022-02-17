import {Entity, Column} from 'typeorm'
import {Base} from './base'

@Entity({name: 'Organization'})
export class Organization extends Base {
  @Column({name: 'organization_name'})
  name: string
}