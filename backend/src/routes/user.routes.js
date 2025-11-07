import {Router} from 'express'
import { changePassword, getUserProfile, loginUser, logoutUser, refreshAccessToken, registerUser } from '../controllers/user.controller.js';
import {verifyJwt} from '../middlewares/auth.middleware.js'

const router = Router();



router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", verifyJwt, logoutUser);
router.post("/refresh-token", refreshAccessToken);
router.post("/change-password", verifyJwt, changePassword);
router.get("/profile", verifyJwt, getUserProfile);

export default router;