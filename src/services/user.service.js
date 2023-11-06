import Audios from '../models/audio.model';

//get all users
export const getAllAudios = async () => {
  const data = await Audios.find();
  return data;
};

//create new user
export const newAudio = async (body) => {
  const data = await Audios.create(body);
  return data;
};

//update single user
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single user
export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return '';
};

//get single user
export const getUser = async (id) => {
  const data = await User.findById(id);
  return data;
};
