import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
  id: ObjectId,
  class: String
  // any other properties you want to define for the "class" collection
});

export const Class = mongoose.model('class', classSchema);