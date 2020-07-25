import { Request, Response } from 'express';

import { getStudentRepository } from '../../database';

class StudentController {
  async list(request: Request, response: Response): Promise<Response> {
    const allStudents = await getStudentRepository().getAllStudents();

    return response.json(allStudents);
  }

  async show(
    request: Request<{ id: string }>,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const student = await getStudentRepository().findOneStudent(id);

    return response.json(student);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const studentRepo = getStudentRepository();

    const createdUser = await studentRepo.createAndSave(request.body);

    if (!createdUser) {
      return response.json({ message: 'Email already exists' });
    }

    return response.status(200).json(createdUser);
  }

  async delete(
    request: Request<{ id: string }>,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    await getStudentRepository().deleteStudent(id);

    return response.status(200).send();
  }
}

export default new StudentController();
