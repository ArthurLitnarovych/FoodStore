import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    maxlength: [30, "Більше 30 символів"],
    minLength: [2, "Менше 2 символів"],
  },
  category: {
    type: String,
    require: true,
    maxlength: [30, "Більше 30 символів"],
    minLength: [2, "Менше 2 символів"],
  },
  image: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("foodCard", schema);
