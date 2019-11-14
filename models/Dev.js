const mongoose = require('mongoose')


// use the Schema() constructor of mongoosed to define the structure of a Document.
const DevSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name field is required']
	},
	portfolio: {
		type: String,
		required: [true, 'Portfolio field is required']
	},
	hired: {
		type: Boolean,
		default: false
	},
	batch: {
		type: Number,
		required: [true, 'Batch field is required']
	}
})

// compile the above schema into a model
// this is done via the model() method of mongoose

const Dev =  mongoose.model('Dev', DevSchema)

module.exports = Dev