import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';

import Student from '../../Students/Entity/Student.entity';

@Entity()
class OfferedClass {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: number;

  @ManyToMany(() => Student, student => student.classes)
  students: Student[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default OfferedClass;
