/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import { LeadModel } from '../domain/lead.model';
import { OperationRepository } from '../../shared/infraestructure/operation.repository';
import { LeadRepository } from '../application/lead.repository';
import { Lead } from '../../entities/lead.entity';
import { Result } from '../../shared/application/result.interface';
import { OperationService } from '../../shared/infraestructure/operation.service';
import { getRepository, Repository } from 'typeorm';
import { ResponseDto } from '../../helper/response.dto';

export class LeadOperation
  extends OperationRepository<LeadModel>
  implements LeadRepository {
  constructor() {
    super(Lead);
  }

  async listLeadsByAgent(
    where: object[] = [],
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<LeadModel>> {
    const trace: string = OperationService.getTrace();
    const repository: Repository<Lead> = getRepository(Lead);
    const data: LeadModel[] = await repository.find({ where, relations, order });
    console.log('listLeadsByAgent', data);
    return ResponseDto.format(trace, data);
  }

  async searchByName(
    where: object[] = [],
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<LeadModel>> {
    const trace: string = OperationService.getTrace();
    const repository: Repository<Lead> = getRepository(Lead);
    const data: LeadModel[] = await repository.find({ where, relations, order });
    console.log('searchByName', data);
    return ResponseDto.format(trace, data);
  }

  async getValidation(
    id: number,
    where: object[] = [],
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<LeadModel>> {
    const trace: string = OperationService.getTrace();
    const repository: Repository<Lead> = getRepository(Lead);
    const data: LeadModel[] = await repository.find({ where, relations, order });
    console.log('getValidation', data);
    return ResponseDto.format(trace, data);
  }
}
