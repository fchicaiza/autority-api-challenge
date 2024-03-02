import { Router } from 'express';

import * as homeController from '@/controllers/home';
import * as userController from '@/controllers/user'

const router = Router();

router.get('/', homeController.index);

router.get('/health', homeController.healthCheck);

router.post('user', userController.createUser);


export default router;
