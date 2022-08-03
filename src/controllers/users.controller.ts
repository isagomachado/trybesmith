import { Request, Response } from 'express';
import usersService from '../services/users.service';

const usersController = {
  async add(req: Request, res: Response) {
    const id = await usersService.add(req.body);
    const user = await usersService.get(id);
    const token = await usersService.makeToken(user);
    res.status(201).json({ token });
  },
};

export default usersController;