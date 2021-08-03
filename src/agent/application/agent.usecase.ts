import { UseCaseRepository } from '../../shared/application/usecase.repository';
import { Result } from '../../shared/application/result.interface';
import { AgentModel } from '../domain/agent.model';
import { AgentRepository } from './agent.repository';

export class AgentUseCase extends UseCaseRepository<
  AgentModel,
  AgentRepository
> {
  constructor(public operation: AgentRepository) {
    super(operation);
  }

  async listAgentsByUser(
    where: object[] = [],
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<AgentModel>> {
    return this.operation.listAgentsByUser(where, relations, order);
  }
}
