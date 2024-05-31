const express = require('express')
const {
  getUser,  
  createUser, 
  deleteUser, 
  
} = require('../controllers/userController')

const router = express.Router()


// GET a single ruser
router.get('/:id', getUser)

// POST a new ruser
router.post('/', createUser)

// DELETE a ruser
router.delete('/:id', deleteUser)



module.exports = router