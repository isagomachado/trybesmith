import { Request, Response } from 'express';
import productsService from '../services/products.service';

const productsController = {
  async add(req: Request, res: Response) {
    const id = await productsService.add(req.body);
    const product = await productsService.get(id);
    res.status(201).json(product);
  },
};

export default productsController;