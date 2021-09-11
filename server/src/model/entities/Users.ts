import { Column, Entity, OneToMany } from 'typeorm'
import { BaseModelWithID } from '../base/BaseModel'
import { Files } from './Files'

@Entity()
export class Users extends BaseModelWithID {

  @Column()
  username: string

  @Column({ default: null })
  name?: string

  @Column({ default: null })
  tg_id?: number

  @Column('jsonb', { default: null })
  tg_raw?: any

  @OneToMany(() => Files, files => files.user)
  files?: Files[]
}