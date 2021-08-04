import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Lead } from './lead.entity';

@Entity({ name: 'judicial' })
export class Judicial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  description: string;

  @ManyToOne(() => Lead, (lead) => lead.judicials)
  lead: Lead;
}
