import { UserModel } from '../user.model';
import { IUser } from './user.interface';

const createUser = async (user: IUser) => {
  const result = await UserModel.create(user);
  return result;
};
const getallUsers = async () => {
  const result = await UserModel.find(
    {},
    { _id: 0, username: 1, fullName: 1, age: 1, email: 1, address: 1 },
  );
  return result;
};

const getSingleData = async (id: string) => {
  if (await UserModel.isUserExists(id)) {
    const result = await UserModel.findOne({ userId: id }, { password: 0 });
    return result;
  } else {
    return false;
  }
};

const updateUserInfo = async (id: string, userData: IUser) => {
  if (await UserModel.isUserExists(id)) {
    const result = await UserModel.updateOne(
      { userId: id },
      { $set: userData },
      { new: true },
    );
    return result;
  } else {
    return false;
  }
};

const deleteUserInfo = async (id: string) => {
  if (await UserModel.isUserExists(id)) {
    const result = await UserModel.deleteOne({ userId: id });
    return result;
  } else {
    return false;
  }
};

export const userServices = {
  createUser,
  getallUsers,
  getSingleData,
  updateUserInfo,
  deleteUserInfo,
};
