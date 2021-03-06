import { createConnection, Connection } from 'typeorm';

import db_config from '../config/database';
import StudentRepository from '../infra/repositories/Student.repository';
import OfferedClassRepository from '../infra/repositories/OfferedClass.repository';

let _connection: Connection;

export default async function connectionDB(): Promise<void> {
  _connection = await createConnection(db_config);
}

export function isConnected(): boolean {
  return _connection.isConnected;
}

export function getStudentRepository(): StudentRepository {
  return _connection.getCustomRepository(StudentRepository);
}
export function getOfferedClassRepository(): OfferedClassRepository {
  return _connection.getCustomRepository(OfferedClassRepository);
}
