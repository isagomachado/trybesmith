import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { AddProduct, Product } from '../types';
import connection from './connection';

const productsModel = {
  async add(data: AddProduct): Promise<Product['id']> {
    const { name, amount } = data;
    const sql = `
      INSERT INTO Trybesmith.Products (name, amount)
      VALUES (?, ?);
    `;

    const [{ insertId }] = await connection.query<ResultSetHeader>(sql, [
      name,
      amount,
    ]);

    return insertId;
  },

  async get(id: Product['id']): Promise<Product> {
    const sql = `
      SELECT *
      FROM Trybesmith.Products
      WHERE id = (?)
    `;

    const [[item]] = await connection.query<RowDataPacket[]>(sql, [id]);
    
    return item as Product;
  },
};

export default productsModel;