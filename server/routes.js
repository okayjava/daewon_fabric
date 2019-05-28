import examplesRouter from './api/controllers/examples/router';
import balanceRouter from './api/controllers/balance/router';
import deliveryRouter from './api/controllers/delivery/router';
import productRouter from './api/controllers/product/router';

export default function routes(app) {
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/balance', balanceRouter);
  app.use('/api/v1/delivery', deliveryRouter);
  app.use('/api/v1/product', productRouter);
}
