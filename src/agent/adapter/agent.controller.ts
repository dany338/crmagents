/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express';
import { AgentUseCase } from '../application/agent.usecase';
import { AgentModel } from '../domain/agent.model';

export class RoleController {
  constructor(private useCase: AgentUseCase) {}

  async list(req: Request, res: Response) {
    const result = await this.useCase.list();
    res.json(result);
  }

  async listOne(req: Request, res: Response) {
    const params = req.params;
    const id = +params.id;
    const Agent: Partial<AgentModel> = { id };
    const result = await this.useCase.listOne(Agent);
    res.json(result);
  }

  async listByPage(req: Request, res: Response) {
    const params = req.params;
    const page = +params.page;
    const result = await this.useCase.listByPage(page, 20);
    res.json(result);
  }

  async listAgentsByUser(req: Request, res: Response): Promise<any> {
    const params = req.params;
    const user = +params.user;
    const where: object[] = [{ user }];
    const result = await this.useCase.listAgentsByUser(where);
    res.json(result);
  }

  async insert(req: Request, res: Response): Promise<any> {
    const body = req.body;
    const Agent: AgentModel = {
      firstname: body.firstname,
      lastname: body.lastname,
      idcard: body.idcard,
      user: body.user,
    };
    const result = await this.useCase.insert(Agent);
    res.json(result);
  }

  async update(req: Request, res: Response) {
    const params = req.params;
    const body = req.body;

    const user: AgentModel = body;
    const id = +params.id;

    const result = await this.useCase.update(user, { id });
    res.json(result);
  }

  async remove(req: Request, res: Response) {
    const params = req.params;
    const id = +params.id;
    const result = await this.useCase.remove({ id });
    res.json(result);
  }
}
