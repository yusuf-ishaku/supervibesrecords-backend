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
export const updateAudio = async (_id, body) => {
  const data = await Audios.findByIdAndUpdate(
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
export const deleteAudio = async (id) => {
  await Audios.findByIdAndDelete(id);
  return '';
};

//get single user
export const getAudio = async (id) => {
  const data = await Audios.findById(id);
  return data;
};
