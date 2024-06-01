const User = require('../models/userModel')
const mongoose = require('mongoose')


// get a single user
const getUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such User' })
  }

  const user = await User.findById(id)

  if (!user) {
    return res.status(404).json({ error: 'No such User' })
  }

  res.status(200).json(user)
}

// create a new ruser
const createUser = async (req, res) => {
  const { username, password,fname,lname } = req.body

  let emptyFields = []

  if (!username) {
    emptyFields.push('username')
  }
  if (!password) {
    emptyFields.push('password')
  }
  if (!fname) {
    emptyFields.push('fname')
  }
  if (!lname) {
    emptyFields.push('lname')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try {
    const user = await User.create({ username, password ,lname,fname})
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such user' })
  }

  const user = await User.findOneAndDelete({ _id: id })

  if (!user) {
    return res.status(400).json({ error: 'No such user' })
  }

  res.status(200).json(user)
}

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
      const user = await User.findByCredentials(username, password);
      if (!user) {
          return res.status(401).send({ error: 'Login failed! Check authentication credentials' });
      }
      // Here you might want to create a JWT token for authentication
      res.status(200).send(user);
  } catch (error) {
      res.status(400).send(error);
  }
};

//export things
module.exports = {
  getUser,
  createUser,
  deleteUser,
  loginUser,
  
}