var express = require('express');
var router = express.Router();
var play = require("../controllers/PlayController.js");

// Get all plays
router.get('/', function(req, res) {
  play.list(req, res);
});

// Get single play by id
router.get('/show/:id', function(req, res) {
  play.show(req, res);
});

// Create play
router.get('/create', function(req, res) {
  play.create(req, res);
});

// Save play
router.post('/save', function(req, res) {
  play.save(req, res);
});

// Edit play
router.get('/edit/:id', function(req, res) {
  play.edit(req, res);
});

// Edit update
router.post('/update/:id', function(req, res) {
  play.update(req, res);
});

// Edit update
router.post('/delete/:id', function(req, res, next) {
  play.delete(req, res);
});

module.exports = router;