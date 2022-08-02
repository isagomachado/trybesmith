import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productsRoutes = Router();

productsRoutes.post('/', productsController.add);

export default productsRoutes;