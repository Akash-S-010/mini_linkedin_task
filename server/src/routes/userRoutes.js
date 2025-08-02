import express from 'express'
import { checkUser, login, signup } from '../controllers/userController.js';
import checkAuth  from '../middlewares/checkAuth.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", checkAuth, checkUser);

export default router