import mongoose from "mongoose";

const voteSchema = new mongoose.Schema({
  nim: {
    type: String,
    required: true,
    unique: true,
  },
  candidate: {
    type: String,
    required: true,
    enum: ["Candidate1", "Candidate2"],
  },
});

const Vote = mongoose.model("Vote", voteSchema);
export default Vote;
