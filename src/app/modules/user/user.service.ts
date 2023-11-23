import { UserModel } from '../user.model';
import { IUser } from './user.interface';

const createUser = async (user: IUser) => {
  const result = await UserModel.create(user);
  return result;
};
const getallUsers = async () => {
  const result = await UserModel.aggregate([
    {
      $project: {
        username: 1,
        fullName: 1,
        age: 1,
        email: 1,
        address: 1,
      },
    },
  ]);
  return result;
};

const getSingleData = async (id: string) => {
  const result = await UserModel.findOne({ userId: id }, { password: 0 });
  return result;
};

export const userServices = {
  createUser,
  getallUsers,
  getSingleData,
};
