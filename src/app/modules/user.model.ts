import { Schema, model } from 'mongoose';
import { IAddress, IFullName, IUser } from './user/user.interface';
import bcrypt from 'bcrypt';
import config from '../config';

const fullNameSchema = new Schema<IFullName>({
  firstName: { type: 'string', required: true },
  lastName: { type: 'string', required: true },
});

const addressSchema = new Schema<IAddress>({
  street: { type: 'string', required: true },
  city: { type: 'string', required: true },
  country: { type: 'string', required: true },
});

const userSchema = new Schema<IUser>({
  userId: { type: Number, unique: true, required: true },
  username: { type: String, unique: true, required: true, trim: true },
  password: { type: String, required: true },
  fullName: { type: fullNameSchema, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  address: { type: addressSchema, required: true },
});

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const UserModel = model<IUser>('User', userSchema);
