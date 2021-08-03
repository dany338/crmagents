/* eslint-disable @typescript-eslint/no-empty-interface */
import { RepositoryBase } from '../../shared/application/base.repository';
import { JudicialModel } from '../domain/judicial.model';

export interface JudicialRepository extends RepositoryBase<JudicialModel> {}
