import express from 'express';
import { userControllers } from './user.controller';
const router = express.Router();

router.post('/', userControllers.createUser);
router.get('/', userControllers.getallUsers);
router.get('/:id', userControllers.getSingleData);
router.put('/:id', userControllers.updateUserInfo);
router.delete('/:id', userControllers.deleteUserInfo);
router.put('/:id/orders', userControllers.addOrder);
router.get('/:id/orders', userControllers.getOrders);

export const userRouter = router;
