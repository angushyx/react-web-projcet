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
  data: {
    type: Date,
    default: Date.now,
  },
  thumbnail: {
    type: String,
  },

  //local login *使用者不是選擇 google login 方式，而是選擇本地的 login
  email: {
    type: String,
  },
  password: {
    type: String,
    maxLength: 1024,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
