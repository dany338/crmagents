/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import { AgentModel } from '../domain/agent.model';
import { OperationRepository } from '../../shared/infraestructure/operation.repository';
import { AgentRepository } from '../application/agent.repository';
import { Agent } from '../../entities/agent.entity';
import { Result } from '../../shared/application/result.interface';
import { OperationService } from '../../shared/infraestructure/operation.service';
import { getRepository, Repository } from 'typeorm';
import { ResponseDto } from '../../helper/response.dto';

export class AgentOperation
  extends OperationRepository<AgentModel>
  implements AgentRepository {
  constructor() {
    super(Agent);
  }

  async listAgentsByUser(
    where: object[] = [],
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<AgentModel>> {
    const trace: string = OperationService.getTrace();
    const repository: Repository<Agent> = getRepository(Agent);
    const data: AgentModel[] = await repository.find({ where, relations, order });
    console.log('listAgentsByUser', data);
    return ResponseDto.format(trace, data);
  }
}
