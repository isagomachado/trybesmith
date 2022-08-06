import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { Order } from '../types';

const ordersModel = {
  async list(): Promise<Order[]> {
    const sql = `
      select O.id, O.userId, P.id AS productsIds 
      from Trybesmith.Orders AS O
      JOIN Trybesmith.Products AS P ON O.id = P.orderId
      ORDER BY O.userId ASC;
    `;

    const [item] = await connection.query<RowDataPacket[]>(sql);
    
    return item as Order[];
  },
};

export default ordersModel;