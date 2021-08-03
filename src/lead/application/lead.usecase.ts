import { UseCaseRepository } from '../../shared/application/usecase.repository';
import { Result } from '../../shared/application/result.interface';
import { LeadModel } from '../domain/lead.model';
import { LeadRepository } from './lead.repository';

export class LeadUseCase extends UseCaseRepository<LeadModel, LeadRepository> {
  [x: string]: any;
  constructor(public operation: LeadRepository) {
    super(operation);
  }

  async listLeadsByAgent(
    where: object[] = [],
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<LeadModel>> {
    return this.operation.listLeadsByAgent(where, relations, order);
  }

  async searchByName(
    where: object[] = [],
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<LeadModel>> {
    return this.operation.searchByName(where, relations, order);
  }

  async getValidation(
    id: number,
    where: object[] = [],
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<LeadModel>> {
    return this.operation.getValidation(id, where, relations, order);
  }
}
