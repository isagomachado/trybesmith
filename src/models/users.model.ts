import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { AddUser, User } from '../types';
import connection from './connection';

const usersModel = {
  async add(data: AddUser): Promise<User['id']> {
    const { username, classe, level, password } = data;
    const sql = `
      INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUES (?, ?, ?, ?);
    `;

    const [{ insertId }] = await connection.query<ResultSetHeader>(sql, [
      username,
      classe,
      level,
      password,
    ]);

    return insertId;
  },

  async get(id: User['id']): Promise<User> {
    const sql = `
      SELECT *
      FROM Trybesmith.Users
      WHERE id = (?)
    `;

    const [[item]] = await connection.query<RowDataPacket[]>(sql, [id]);
    
    return item as User;
  },
};

export default usersModel;