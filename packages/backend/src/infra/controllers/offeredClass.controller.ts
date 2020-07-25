import { Request, Response } from 'express';
import { getOfferedClassRepository } from '../../database';

class OfferedClassController {
  async list(request: Request, response: Response): Promise<Response> {
    const allOffClass = await getOfferedClassRepository().getAllOffClass();

    return response.json(allOffClass);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const offeredClass = request.body;

    const createdOfferedClass = await getOfferedClassRepository().createOfferedClass(
      offeredClass,
    );

    return response.json(createdOfferedClass);
  }
}

export default new OfferedClassController();
