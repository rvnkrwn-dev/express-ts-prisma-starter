import { welcome } from './../controllers/welcomeController';
import { Router } from 'express';

const router = Router();

router.get('/', welcome);

export default router;
