import { EntityRepository, Repository } from 'typeorm';

import StudentOfferedClass from '../entities/StudentOfferedClass.entity';

import {
  getStudentRepository,
  getOfferedClassRepository,
} from '../../database';

import Student from '../entities/Student.entity';
import OfferedClass from '../entities/OfferedClass.entity';

@EntityRepository(StudentOfferedClass)
class StudentOfferedClassRepository extends Repository<
  StudentOfferedClass | boolean
> {
  async enrollStudentInOfferedClass(
    student_id: number,
    offeredClass_id: number,
  ): Promise<boolean> {
    const studentRepository = getStudentRepository().checkStudentExists(
      student_id,
    );
    const offClassRepository = getOfferedClassRepository().checkClassExists(
      offeredClass_id,
    );

    if (!(studentRepository && offeredClass_id)) {
      return false;
    }
    this.save({ student_id, offeredClass_id });

    return true;
  }
}

export default StudentOfferedClassRepository;
