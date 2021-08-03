import { RepositoryBase } from '../../shared/application/base.repository';
import { Result } from '../../shared/application/result.interface';
import { AgentModel } from '../domain/agent.model';

export interface AgentRepository extends RepositoryBase<AgentModel> {
  listAgentsByUser(
    where: object[],
    relations: string[],
    order: object
  ): Promise<Result<AgentModel>>;
}
