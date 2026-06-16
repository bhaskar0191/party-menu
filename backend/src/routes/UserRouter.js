import express from 'express';
import {
    register,
    login,
    logout,
    passwordUpdate,
    getUser
} from '../controllers/UserController.js'
import auth from '../middleware/AuthMiddleware.js'

const router = express.Router()

router.post('/register', register);
router.post('/login', login);
router.get('/:id', auth, getUser);
router.post('/logout', logout);
router.put('/update/:id', auth, passwordUpdate)

export default router