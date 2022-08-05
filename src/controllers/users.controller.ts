import { Request, Response } from 'express';
import usersService from '../services/users.service';

const usersController = {
  async add(req: Request, res: Response) {
    const validateBody = await usersService.validateBody(req.body);
    const id = await usersService.add(validateBody);
    const user = await usersService.get(id);
    const token = await usersService.makeToken(user);
    res.status(201).json({ token });
  },
};

export default usersController;