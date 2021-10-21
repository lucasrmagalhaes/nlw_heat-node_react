import { Router } from 'express';
import { AuthenticationUserController } from './controllers/AuthenticationUserController';

const router = Router();

router.post('/authenticate', new AuthenticationUserController().handle);

export { router };