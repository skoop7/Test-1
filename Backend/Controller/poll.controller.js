import { Poll } from "../models/pollSchema";

const getAllPolls = async (req, res) => {
  try {
    const polls = await Poll.find();
    res.status(200).json(polls, { message: "Polls fetched success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAPoll = async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.id);
    if (!poll) {
      return res.status(404).json({ message: "Poll not found" });
    }
    res.status(200).json(poll, { message: "Poll fetched success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAPoll = async (req, res) => {
  try {
    const { question, options } = req.body;

    if (!question || !options) {
      return res.status(400).json({ message: "All fields are require" });
    }

    const optionsSorted = options.map((o) => ({
      text: o,
      votes: 0,
    }));

    const finalPoll = new Poll({
      options: optionsSorted,
      question,
    });

    try {
    } catch (error) {}
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
