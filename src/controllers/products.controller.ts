import { Request, Response } from 'express';
import productsService from '../services/products.service';

const productsController = {
  async add(req: Request, res: Response) {
    const validateBody = await productsService.validateBody(req.body);
    const id = await productsService.add(validateBody);
    const product = await productsService.get(id);
    res.status(201).json(product);
  },

  async list(_req: Request, res: Response) {
    const products = await productsService.list();
    res.status(200).json(products);
  },
};

export default productsController;