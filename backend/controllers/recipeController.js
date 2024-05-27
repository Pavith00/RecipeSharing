const Recipe = require('../models/recipeModel')
const mongoose = require('mongoose')

// get all recipes
const getRecipes = async (req, res) => {         
  const recipes = await Recipe.find({}).sort({createdAt: -1}) 
  res.status(200).json(recipes)      
}
// get a single recipe
const getRecipe = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Recipe'})
  }

  const recipe = await Recipe.findById(id)

  if (!recipe) {
    return res.status(404).json({error: 'No such Recipe'})
  }

  res.status(200).json(recipe)
}

// create a new recipe
const createRecipe = async (req, res) => {
  const {name, ingredients, instructions, imageUrl, cookingTime} = req.body

  let emptyFields = []

  if (!name) {
    emptyFields.push('name')
  }
  if (!ingredients) {
    emptyFields.push('ingredients')
  }
  if (!instructions) {
    emptyFields.push('instructions')
  }
  if (!imageUrl) {
    emptyFields.push('imageUrl')
  }
  if (!cookingTime) {
    emptyFields.push('cookingTime')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try {
    const recipe = await Recipe.create({name, ingredients, instructions, imageUrl, cookingTime })
    res.status(200).json(recipe)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a recipe
const deleteRecipe = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such recipe'})
  }

  const recipe = await Eecipe.findOneAndDelete({_id: id})

  if(!recipe) {
    return res.status(400).json({error: 'No such recipe'})
  }

  res.status(200).json(recipe)
}

// update a recipe
const updateRecipe = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such recipe'})
  }

  const recipe = await Recipe.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!recipe) {
    return res.status(400).json({error: 'No such recipe'})
  }

  res.status(200).json(recipe)
}

//export things
module.exports = {
  getRecipe,
  getRecipes,
  createRecipe,
  deleteRecipe,
  updateRecipe
}