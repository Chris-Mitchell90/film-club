'use strict';

const mongoose = require('./index.js');
const Schema = mongoose.Schema;

const moviecollectionSchema = new Schema({
	email: {
		type: String,
		required: [true, 'email is missing'],
		unique: true,
	},
	person: {
		id: Number,
		name: String,
	},
	moviecoll: [{
		collectionID: Number,
		inWatchlist: Boolean,
		seen: Boolean,
		user_rating: Number,
		poster_path: String,
		vote_average: Number,
		overview: String,
		release_date: String,
		title: String,
		id: Number,
		character: String
	}]
});

const Moviecollection = mongoose.model('moviecollection', moviecollectionSchema);


module.exports = Moviecollection;