import { EntityRepository, Repository } from 'typeorm';

import Student from '../entities/Student.entity';

@EntityRepository(Student)
class StudentRepository extends Repository<Student> {
  async allStudents(): Promise<Student[]> {
    const allStudents = await this.find();

    return allStudents;
  }

  async findOneStudent(id: number): Promise<Student> {
    const student = await this.findOne({ where: { id } });

    return student;
  }

  async createAndSave(student: Student): Promise<Student> {
    const createdStudent = await this.save(student);

    return createdStudent;
  }
}

export default StudentRepository;
