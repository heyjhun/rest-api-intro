const express = require('express');

const Dev = require('../models/Dev');

// save this router instance as a constanat named router
const router = express.Router()

// the router object has methods for our http verbs

// use the get() method of our router object
	// pass in 2 arguments to your htpp method:
		// URI endpoint (string) signifying your resource
		// a function that acts as your route handler
router.get('/zuitt_devs', (req, res) => {
	res.send({
		type: 'GET'
	})
})

router.post('/zuitt_devs', (req, res) => {
	// use mongoose create() method to create a new Dev document
	// pass in the request body as an argument to the create() method
	// this method returns a Promise object
		// the Promise object represents the eventual completion (or failure) of an asynchronous operation.
	Dev.create(req.body)
	// the Promise object has a then() method
	// it means that once the Promise has returend, it will THEN call the dunction passed into it
	.then(dev => {
		res.send(dev)
	})
})

router.put('/zuitt_devs/:id' , (req, res) => {
	res.send({
		type: 'PUT'
	})
})

router.delete('/zuitt_devs/:id' , (req, res) => {
	res.send({
		type: 'DELETE'
	})
})

//export this Router instance as a module named router
module.exports = router








// Use this for testing methods
// router.get('/zuitt_devs', (req, res) => {
// 	res.send({
// 		type: 'GET'
// 	})
// })

// router.post('/zuitt_devs', (req, res) => {
// 	res.send({
// 		type: 'POST'
// 	})
// })

// router.put('/zuitt_devs/:id' , (req, res) => {
// 	res.send({
// 		type: 'PUT'
// 	})
// })

// router.delete('/zuitt_devs/:id' , (req, res) => {
// 	res.send({
// 		type: 'DELETE'
// 	})
// })