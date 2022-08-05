import { NextFunction, Request, Response, Router } from 'express';
import usersController from '../controllers/users.controller';

const usersRoutes = Router();

usersRoutes.post('/', usersController.add);
// usersRoutes.get('/', productsController.list);

usersRoutes.use((
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { message } = error;
  switch (message) {
    case '"username" is required':
      res.status(400).json({ message }); break;
    case '"classe" is required':
      res.status(400).json({ message }); break;
    case '"level" is required':
      res.status(400).json({ message }); break;
    case '"password" is required"':
      res.status(400).json({ message }); break;
    default:
      res.status(422).json({ message });
  }
});

export default usersRoutes;