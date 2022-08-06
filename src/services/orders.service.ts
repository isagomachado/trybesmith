import ordersModel from '../models/orders.model';
import NotFoundError from '../errors/not-found.error';
import { Order } from '../types';

const ordersService = {
  async list(): Promise<Order[]> {
    const products = await ordersModel.list();
    if (!products) throw new NotFoundError('products not found');
    return products;
  },
};

export default ordersService;