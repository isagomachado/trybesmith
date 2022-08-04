import { NextFunction, Request, Response, Router } from 'express';
import productsController from '../controllers/products.controller';

const productsRoutes = Router();

productsRoutes.post('/', productsController.add);

productsRoutes.get('/', productsController.list);

productsRoutes.use((
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { message } = error;
  switch (message) {
    case '"name" is required':
      res.status(400).json({ message });
      break;
    case '"amount" is required':
      res.status(400).json({ message });
      break;
    default:
      res.status(422).json({ message });
  }
});

export default productsRoutes;