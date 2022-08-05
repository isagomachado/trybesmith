import Joi from 'joi';
import jwt from 'jsonwebtoken';
import NotFoundError from '../errors/not-found.error';
import usersModel from '../models/users.model';
import { AddUser, User } from '../types';

const secret = 'minhaSenhaSuperSecreta';

const usersService = {
  async validateBody(unknown: unknown) {
    const schema = Joi.object<AddUser>({
      username: Joi.string().required().min(3),
      classe: Joi.string().required().min(3),
      level: Joi.number().required().positive(),
      password: Joi.string().required().min(8),
    });
    const result = schema.validateAsync(unknown);
    console.log(result);
    return result;
  },
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