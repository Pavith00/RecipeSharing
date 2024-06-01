require('dotenv').config()   //install as dotenv-load environment variables from a .env file into the Node.js process.env object.

const express = require('express')//call express pkg
const mongoose = require('mongoose')
const recipeRoutes = require('./routes/recipes')
const userRoutes = require('./routes/user')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/recipes', recipeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/user', userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to te db && listening on port 4000!!!', process.env.PORT)
        })

    })
    .catch((error) => {
        console.log(error)
    })



