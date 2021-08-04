import express from 'express';
import { RoleController } from './lead.controller';
import { Validators } from '../../shared/adapter/validator';
import { schemas } from './lead.schema';
import { ErrorHandler } from '../../helper/errors.handler';
import { AuthenticationGuard } from '../../shared/infraestructure/guards/authentication.guard';
import { AuthorizationGuard } from '../../shared/infraestructure/guards/authorization.guard';
import { LeadOperation } from '../infraestructure/lead.operation';
import { LeadUseCase } from '../application/lead.usecase';

const operation = new LeadOperation();
const useCase = new LeadUseCase(operation);
const controller = new RoleController(useCase);
const route = express.Router();

route.get(
  '/',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN', 'AGENT'),
  controller.list.bind(controller)
);
route.get(
  '/:id',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN', 'AGENT'),
  Validators.validate(schemas.LIST_ONE),
  controller.listOne.bind(controller)
);
route.get(
  '/page/:page',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN', 'AGENT'),
  Validators.validate(schemas.LIST_BY_PAGE),
  controller.listByPage.bind(controller)
);
route.get(
  '/agent/:agent',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN', 'AGENT'),
  Validators.validate(schemas.LIST_LEADS_BY_AGENT),
  controller.listLeadsByAgent.bind(controller)
);
route.post(
  '/search',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN', 'AGENT'),
  Validators.validate(schemas.SEARCH_BY_NAME),
  controller.searchByName.bind(controller)
);
route.get(
  '/validation/:id',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN', 'AGENT'),
  Validators.validate(schemas.GET_VALIDATION),
  controller.getValidation.bind(controller)
);
route.post(
  '/',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN', 'AGENT'),
  Validators.validate(schemas.INSERT),
  ErrorHandler.asyncError(controller.insert.bind(controller))
);
route.put(
  '/:id',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN', 'AGENT'),
  Validators.validate(schemas.UPDATE),
  controller.update.bind(controller)
);
route.delete(
  '/:id',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN'),
  Validators.validate(schemas.REMOVE),
  controller.remove.bind(controller)
);

export { route };
