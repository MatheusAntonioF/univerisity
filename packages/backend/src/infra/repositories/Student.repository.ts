import { EntityRepository, Repository } from 'typeorm';

import Student from '../entities/Student.entity';

@EntityRepository(Student)
class StudentRepository extends Repository<Student> {
  async getAllStudents(): Promise<Student[]> {
    const allStudents = await this.find();

    return allStudents;
  }

  async checkEmailExists(email: string): Promise<boolean> {
    const studentExists = await this.find({ where: { email } });

    if (studentExists.length !== 0) {
      return true;
    }

    return false;
  }

  async findOneStudent(id: string): Promise<Student> {
    const student = await this.findOne({ where: { id } });

    return student;
  }

  async createAndSave(student: Student): Promise<Student | boolean> {
    const studentExists = await this.checkEmailExists(student.email);

    if (studentExists) {
      return false; // if email already exist
    }

    const createdStudent = await this.save(student);

    return createdStudent;
  }

  async deleteStudent(id: string): Promise<void> {
    await this.delete(id);
  }
}

export default StudentRepository;
