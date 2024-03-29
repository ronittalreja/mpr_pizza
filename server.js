require('dotenv').config()
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3300
const session = require('express-session')
const flash = require('express-flash')
const passport = require('passport')
const Emitter = require('events')

// Session config with secret key
app.use(session({
    secret: '123456789', // Replace 'your-secret-key-here' with your actual secret key
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 hours
}))

// Other middleware and configurations...

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
