import { Request, Response } from 'express';

import Student from '../entities/Student.entity';

import { getStudentRepository } from '../../database';

class StudentController {
  async create(request: Request, response: Response): Promise<Response> {
    const student = request.body as Student;

    const createdStudent = await getStudentRepository().createAndSave(student);

    return response.json(createdStudent);
  }
}

export default new StudentController();
