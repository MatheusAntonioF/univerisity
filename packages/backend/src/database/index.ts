import { createConnection, Connection } from 'typeorm';

let connection: Connection;

export default async function connect_db(): Promise<void> {
  connection = await createConnection();
}

export function isConnected(): boolean {
  return connection.isConnected;
}
