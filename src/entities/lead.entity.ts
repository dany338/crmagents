import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Agent } from './agent.entity';
import { Judicial } from './judicial.entity';

@Entity({ name: 'lead' })
@Unique('unique-lead-idcard', ['idcard'])
export class Lead {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  firstname: string;

  @Column({ type: 'varchar', length: 20 })
  lastname: string;

  @Column({ type: 'varchar', length: 45 })
  idcard: string;

  @ManyToOne(() => Agent, (agent) => agent.leads)
  agent: Agent;

  @OneToMany(() => Judicial, (judicial) => judicial.lead)
  judicials: Judicial[];
}
