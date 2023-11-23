/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { userServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const result = await userServices.createUser(userData);
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something Want Worng!!',
      error: {
        code: 500,
        description: `${error.message} | User not found!`,
      },
    });
  }
};

const getallUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getallUsers();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something Want Worng!!',
      error: {
        code: 500,
        description: `${error.message} | User not found!`,
      },
    });
  }
};

const getSingleData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await userServices.getSingleData(id);
    res.status(200).json({
      success: true,
      message: 'Single User fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something Want Worng!!',
      error: {
        code: 500,
        description: `${error.message} | User not found!`,
      },
    });
  }
};

export const userControllers = {
  createUser,
  getallUsers,
  getSingleData,
};
