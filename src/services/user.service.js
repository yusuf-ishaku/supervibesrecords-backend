/* eslint-disable prettier/prettier */
import User from '../models/user.model';

export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};

export const getUserByEmail = async (email) => {
    const data = await User.findOne({
        email
    });
    return data;
}
export const createUser = async (body) => {
    const data = await User.create(body);
    return data;
}