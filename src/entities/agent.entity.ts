import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Lead } from './lead.entity';
import { User } from './user.entity';

@Entity({ name: 'agent' })
@Unique('unique-agent-idcard', ['idcard'])
export class Agent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  firstname: string;

  @Column({ type: 'varchar', length: 20 })
  lastname: string;

  @Column({ type: 'varchar', length: 45 })
  idcard: string;

  @ManyToOne(() => User, (user) => user.agents)
  user: User;

  @OneToMany(() => Lead, (lead) => lead.agent)
  leads: Lead[];
}
