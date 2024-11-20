import User from "../models/userModel.js";

export const login = async (req, res) => {
  try {
    const { nim } = req.body;

    if (!nim.includes("061") || nim.length > 10) {
      return res.status(400).json({ message: "NIM tidak valid." });
    }

    let user = await User.findOne({ nim });
    if (!user) {
      user = await User.create({ nim });
    }

    res.status(200).json({ message: "Login berhasil", user });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan.", error });
  }
};

export const logout = (req, res) => {
  try {
    // Hapus token dari klien dengan mengirimkan token kosong dan waktu kedaluwarsa
    res.status(200).json({
      message: "Logout berhasil.",
      token: null, // Atur token menjadi null
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan saat logout.",
      error,
    });
  }
};
