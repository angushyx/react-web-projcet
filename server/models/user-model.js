const mongoose = require("mongoose");

//從 google 取得的資訊儲存在 user 的檔案
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 255,
  },

  googleID: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  avatar: {
    type: String,
  },

  //local login *使用者不是選擇 google login 方式，而是選擇本地的 login
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    maxLength: 1024,
    required: true,
  },
  confirmPassword: {
    type: String,
    maxLength: 1024,
  },
  id: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
