import indexRouter from '@/routes/index';
import { createUser } from '@/controllers/user';

export default function (app) {
  app.use('/', indexRouter);
  app.use('/user', createUser)
}
