import { Router } from 'express';
import { AuthenticationUserController } from './controllers/AuthenticationUserController';
import { CreateMessageController } from './controllers/CreateMessageControler';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = Router();

router.post('/authenticate', new AuthenticationUserController().handle);
router.post('/messages', ensureAuthenticated, new CreateMessageController().handle);

export { router };