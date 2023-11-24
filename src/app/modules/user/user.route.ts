import express from 'express';
import { userControllers } from './user.controller';
const router = express.Router();

router.post('/', userControllers.createUser);
router.get('/', userControllers.getallUsers);
router.get('/:id', userControllers.getSingleData);
router.put('/:id', userControllers.updateUserInfo);
router.delete('/:id', userControllers.deleteUserInfo);

export const userRouter = router;
