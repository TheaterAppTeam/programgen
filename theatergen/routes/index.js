var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fefu',function(req,res, next){
	res.render('fefu',{title:'Fefu'});
});

module.exports = router;
