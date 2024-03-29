const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //공백제거
    unique: 1,
  },
  role: {
    type: Number,
    default: 0,
  },
  password: { type: String, minlength: 5 },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

/*userSchema.pre("save", function (next) {
  var user = this;

  if ((user, isModified("password"))) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next(); //비밀번호 암호화
      });
    });
  } else {
    next();
  }
});*/

const User = mongoose.model("User", userSchema);
module.exports = { User };
