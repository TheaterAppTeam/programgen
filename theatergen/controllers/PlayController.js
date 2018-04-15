var mongoose = require("mongoose");
var Play = require("../models/Play");

var playController = {};

// Show list of plays
playController.list = function(req, res) {
  Play.find({}).exec(function (err, plays) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/plays/index", {plays: plays});
    }
  });
};

// Show play by id
playController.show = function(req, res) {
  Play.findOne({_id: req.params.id}).exec(function (err, play) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/plays/show", {play: play});
    }
  });
};

// Create new play
playController.create = function(req, res) {
  res.render("../views/plays/create");
};

// Save new play
playController.save = function(req, res) {
  var play = new Play(req.body);

  play.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/plays/create");
    } else {
      console.log("Successfully created an play.");
      res.redirect("/plays/show/"+play._id);
    }
  });
};

// Edit an play
playController.edit = function(req, res) {
  Play.findOne({_id: req.params.id}).exec(function (err, play) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/plays/edit", {play: play});
    }
  });
};

// Update an play
playController.update = function(req, res) {
  Play.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, director: req.body.director }}, { new: true }, function (err, play) {
    if (err) {
      console.log(err);
      res.render("../views/plays/edit", {play: req.body});
    }
    res.redirect("/plays/show/"+play._id);
  });
};

// Delete an play
playController.delete = function(req, res) {
  Play.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("play deleted!");
      res.redirect("/plays");
    }
  });
};

module.exports = playController;
