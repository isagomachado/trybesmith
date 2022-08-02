import express from 'express';
import 'express-async-errors';
import errorHandlerMiddleware from './middlewares/errorHandler.middleware';

import productsRoutes from './routes/products.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);

app.use(errorHandlerMiddleware);

export default app;
