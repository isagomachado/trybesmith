import Joi from 'joi';
import NotFoundError from '../errors/not-found.error';
import productsModel from '../models/products.model';
import { AddProduct, Indexable, Product } from '../types';

const productsService = {
  async validateParamsId(unknown: unknown): Promise<Indexable> {
    const schema = Joi.object<Indexable>({
      id: Joi.number().positive().integer().required(),
    });
    const result = schema.validateAsync(unknown);
    return result;
  },

  // async validateBody(unknown: unknown) {
  //   const schema = Joi.object<AddProduct> ({
  //     name: Joi.string().required().min(2)
  //       .message: Record<string, string> ({
  //         'any.required': '"name" is required',
  //         'array.min': '"name" length must be at least 5 characters long',
  //       })
  //   });
  //   const result = schema.validateAsync(unknown);
  //   return result;
  // },
  
  async add(data: AddProduct): Promise<Product['id']> {
    const id = await productsModel.add(data);
    return id;
  },

  async get(id: Product['id']): Promise<Product> {
    const product = await productsModel.get(id);
    if (!product) throw new NotFoundError('product not found');
    return product;
  },

  async list(): Promise<Product[]> {
    const products = await productsModel.list();
    if (!products) throw new NotFoundError('products not found');
    return products;
  },

  async exists(id: Product['id']): Promise<void> {
    const exists = await productsModel.exists(id);
    if (!exists) throw new NotFoundError('product not found');
  },

};

export default productsService;