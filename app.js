// name of module
const express = require('express')

// our app is an express app
const app = express()

const port = 3000

const mongoose = require('mongoose');

// use mongoose connect method to connect to a local mongodb instance
// by default , local mongodb uses the address 127.0.0.1:27017
mongoose.connect('mongodb+srv://admin-agustin:1991July08@cluster0-svqu7.mongodb.net/expressrest?retryWrites=true&w=majority', {useNewUrlParser: true})

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log ("We're connected to the cloud database"));

// used in parsing json request bodies
app.use(express.json());

// used in parsing form data
app.use(express.urlencoded({extended:true}))

// require the router instance that was exported from /routes/api.js
const zuittDevRouter = require('./routes/api')

app.use('/api', zuittDevRouter)

app.listen(port, () => {
	console.log(`Listening on port: ${port}`)
})

