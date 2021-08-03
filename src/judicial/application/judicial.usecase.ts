import { UseCaseRepository } from '../../shared/application/usecase.repository';
import { JudicialModel } from '../domain/judicial.model';
import { JudicialRepository } from './judicial.repository';

export class JudicialUseCase extends UseCaseRepository<
  JudicialModel,
  JudicialRepository
> {
  constructor(public operation: JudicialRepository) {
    super(operation);
  }
}
