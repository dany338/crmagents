import { RepositoryBase } from '../../shared/application/base.repository';
import { Result } from '../../shared/application/result.interface';
import { LeadModel } from '../domain/lead.model';

export interface LeadRepository extends RepositoryBase<LeadModel> {
  listLeadsByAgent(
    where: object[],
    relations: string[],
    order: object
  ): Promise<Result<LeadModel>>;

  searchByName(
    where: object[],
    relations: string[],
    order: object
  ): Promise<Result<LeadModel>>;

  getValidation(
    id: number,
    where: object[],
    relations: string[],
    order: object
  ): Promise<Result<LeadModel>>;
}
