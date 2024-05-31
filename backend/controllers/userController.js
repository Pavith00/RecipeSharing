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
  const { username, password } = req.body

  let emptyFields = []

  if (!username) {
    emptyFields.push('username')
  }
  if (!password) {
    emptyFields.push('password')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try {
    const user = await User.create({ username, password })
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


//export things
module.exports = {
  getUser,
  createUser,
  deleteUser,
  
}