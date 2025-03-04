import mongoose from "mongoose";

const pollSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    options: [optionSchema],
  },
  { timestamps: true }
);

const optionSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    votes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Poll = mongoose.model("Poll", pollSchema);
const Options = mongoose.model("Options", optionSchema);

export { Poll, Options };
