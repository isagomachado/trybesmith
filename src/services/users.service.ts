// import Joi from 'joi';
import jwt from 'jsonwebtoken';
import NotFoundError from '../errors/not-found.error';
import usersModel from '../models/users.model';
import { AddUser, User } from '../types';

const secret = 'minhaSenhaSuperSecreta';

const usersService = {
  async makeToken(data: AddUser): Promise<string> {
    const payload = { data };
    const token = jwt.sign(payload, secret, { expiresIn: '30d', algorithm: 'HS256' });
    return token;
  },
  
  async add(data: AddUser): Promise<User['id']> {
    const id = await usersModel.add(data);
    return id;
  },

  async get(id: User['id']): Promise<User> {
    const user = await usersModel.get(id);
    if (!user) throw new NotFoundError('user not found');
    return user;
  },
};

export default usersService;