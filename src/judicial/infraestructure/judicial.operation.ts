/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import { JudicialModel } from '../domain/judicial.model';
import { OperationRepository } from '../../shared/infraestructure/operation.repository';
import { JudicialRepository } from '../application/judicial.repository';
import { Judicial } from '../../entities/judicial.entity';

export class JudicialOperation
  extends OperationRepository<JudicialModel>
  implements JudicialRepository {
  constructor() {
    super(Judicial);
  }
}
