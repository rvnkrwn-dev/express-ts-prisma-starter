import { Router } from 'express';
import { createUser, getUser, updateUser, deleteUser, listUsers } from './../controllers/userController';

const router = Router();

router.post("/", createUser);
router.get("/:id", getUser);
router.put("/:id", deleteUser);
router.get("/", listUsers); // Endpoint untuk list users dengan pagination

export default router;
