const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({

  fname:{
    type:String,
    required:true
  },
  lname:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },

}, { timestamps: true });

// Add a method to find a user by username and password
userSchema.statics.findByCredentials = async (username, password) => {
  const user = await User.findOne({ username, password });
  return user;
};
module.exports = mongoose.model('User', userSchema)

