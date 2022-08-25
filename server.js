const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user.routes')
require('dotenv').config({ path: './config/.env' })
require('./config/db')

const app = express()

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// routes
app.use('/api/user', userRoutes)

// server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})