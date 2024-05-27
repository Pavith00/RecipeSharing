const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  imageUrl:{
    type: String,
    required: true
  },
  cookingTime: {
    type: Number,
    required: true,
},

}, { timestamps: true })
module.exports = mongoose.model('Recipe', recipeSchema)

