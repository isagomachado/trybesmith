import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const ordersController = {
  async list(req: Request, res: Response) {
    const arr: any[] = [];
    const orders = await ordersService.list();
    
    orders.forEach((order) => {
      const aux = arr.find((item) => item.userId === order.userId);
      if (aux) {
        aux.productsIds.push(order.productsIds);
      } else {
        arr.push({
          id: order.id,
          userId: order.userId,
          productsIds: [order.productsIds],
        });
      }
    });

    return res.status(200).json(arr);
  },
};

export default ordersController;