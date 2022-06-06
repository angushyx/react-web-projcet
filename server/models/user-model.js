const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//從 google 取得的資訊儲存在 user 的檔案
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
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
    minLength: 6,
    maxLength: 50,
  },
  password: {
    type: String,
    maxLength: 255,
    minLength: 6,
    required: true,
  },
  confirmPassword: {
    type: String,
  },
  id: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "seller"],
    required: true,
  },
});

//mongoose schema  middleware
userSchema.pre("save", async function (next) {
  if (this.isModified("password" || this.isNew)) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  } else {
    return next();
  }
});

userSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return cb(err, isMatch);
    }
    cb(null, isMatch);
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
