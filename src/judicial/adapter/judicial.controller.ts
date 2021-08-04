/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express';
import { JudicialUseCase } from '../application/judicial.usecase';
import { JudicialModel } from '../domain/judicial.model';

export class RoleController {
  constructor(private useCase: JudicialUseCase) {}

  async list(req: Request, res: Response) {
    const result = await this.useCase.list();
    res.json(result);
  }

  async listOne(req: Request, res: Response) {
    const params = req.params;
    const id = +params.id;
    const movie: Partial<JudicialModel> = { id };
    const result = await this.useCase.listOne(movie);
    res.json(result);
  }

  async listByPage(req: Request, res: Response) {
    const params = req.params;
    const page = +params.page;
    const result = await this.useCase.listByPage(page, 20);
    res.json(result);
  }

  async insert(req: Request, res: Response): Promise<any> {
    const body = req.body;
    const judicial: JudicialModel = {
      description: body.description,
      lead: body.lead,
    };
    const result = await this.useCase.insert(judicial);
    res.json(result);
  }

  async update(req: Request, res: Response) {
    const params = req.params;
    const body = req.body;

    const user: JudicialModel = body;
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
