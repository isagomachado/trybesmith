import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const ordersRoutes = Router();

ordersRoutes.get('/', ordersController.list);

export default ordersRoutes;