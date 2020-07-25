import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import Student from './Student.entity';
import OfferedClass from './OfferedClass.entity';

@Entity({ name: 'students_offeredClass' })
class StudentOfferedClass {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Student, student => student.id)
  students: Student[];

  @ManyToMany(() => OfferedClass, offeredClass => offeredClass.id)
  classes: OfferedClass[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default StudentOfferedClass;
