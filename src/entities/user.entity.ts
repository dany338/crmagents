import {
  Column,
  Entity,
  OneToMany,
  ManyToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Agent } from './agent.entity';
import { Role } from './role.entity';

@Entity({ name: 'user' })
@Unique('unique-email', ['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @Column({ type: 'varchar', length: 200 })
  password: string;

  @Column({ type: 'varchar', length: 100 })
  refreshToken: string;

  @OneToMany(() => Agent, (agent) => agent.user)
  agents: Agent[];

  @ManyToMany((type) => Role, (role) => role.users)
  roles: Role[];
}
