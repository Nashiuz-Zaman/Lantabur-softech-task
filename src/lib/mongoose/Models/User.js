import {Schema, model,models} from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type:String,
    required: true,
  }
})

export const UserModel = models.User || model('User', userSchema)