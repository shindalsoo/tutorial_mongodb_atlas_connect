import mongoose, { model } from "mongoose";

const dataSchema = new mongoose.Schema({
  name: {
    require: true,
    type: String,
  },
  age: {
    require: true,
    type: Number,
  },
});

const Model = mongoose.model("myFriends", dataSchema, "myFriends"); //3번째 인자를 안주면 첫번째 인자를 모두 소문자화하고 끝에 자동으로 s를 붙힘
export default Model;
