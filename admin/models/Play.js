var mongoose = require('mongoose');

var titlePage = new mongoose.Schema({
	title: String, 
	chair: String, 
	artistic_director: String,
	playwright: String,
	director: String, 
	scenic_designer: String, 
	costume_designer: String, 
	lighting_designer: String,
	sound_designer: String, 
	stage_manager: String, 
	publisher: String,
})
var PlaySchema = new mongoose.Schema({
  name: String,
  qty: Number,
  titlepage: [titlePage]
});

module.exports = mongoose.model('Play4', titlePage);
