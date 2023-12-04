/* eslint-disable prettier/prettier */
// import { type } from '@hapi/joi/lib/extend';
import { Schema, model } from 'mongoose';
const userSchema = new Schema(
  {
    username: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
  },
  {
    timestamps: true
  }
);
export default model('User', userSchema);

