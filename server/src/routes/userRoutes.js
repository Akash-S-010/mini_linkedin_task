import express from 'express'
import { checkUser, login, logout, signup } from '../controllers/userController.js';
import checkAuth  from '../middlewares/checkAuth.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout)
router.get("/me", checkAuth, checkUser);

export default router