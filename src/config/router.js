import indexRouter from '@/routes/index';
import { createUser, getAllUsers } from '@/controllers/user';

export default function (app) {
  app.use('/', indexRouter);
  app.use('/user', createUser)
  app.use('/user', getAllUsers)
}
