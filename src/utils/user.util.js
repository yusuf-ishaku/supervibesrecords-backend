/* eslint-disable prettier/prettier */
import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
export const hashPassword = async (body) => {
  let data = {
    ...body,
    password: await hash(body.password, 10)
  };
  return data;
};

export const signToken = async (body) => {
  let JWT_SECRET = process.env.ADMIN_JWT_SECRET;
  let token = sign(
    {
      email: body.email,
      password: body.password
    },
    JWT_SECRET,
    {
      expiresIn: '3d'
    }
  );

  return token;
};
