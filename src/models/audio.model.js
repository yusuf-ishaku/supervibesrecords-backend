// import { type } from '@hapi/joi/lib/extend';
import { Schema, model } from 'mongoose';

const audioSchema = new Schema(
  {
    title: {
      type: String
    },
    audioUrl: {
      type: String
    },
    imageUrl: {
      type: String
    },
    artiste: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('Audio', audioSchema);
