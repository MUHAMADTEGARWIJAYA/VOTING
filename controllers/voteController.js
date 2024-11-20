import User from "../models/userModel.js";
import Vote from "../models/voteModel.js";

export const vote = async (req, res) => {
  try {
    const { nim, candidate } = req.body;

    const user = await User.findOne({ nim });
    if (!user || user.hasVoted) {
      return res.status(400).json({ message: "User sudah memilih atau tidak valid." });
    }

    await Vote.create({ nim, candidate });
    user.hasVoted = true;
    await user.save();

    res.status(200).json({ message: "Voting berhasil." });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan.", error });
  }
};
