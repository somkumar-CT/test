import * as express from 'express';
import { UserController } from '../controllers/userController';

const router = express.Router();

router.get('/login', UserController.LoginUser);
router.get('/register', UserController.RegisterUser);

export default router;
