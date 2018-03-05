var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fefu',function(req,res, next){
	res.render('fefu',
	  {title:'Fefu and her Friends',
		 playwright:'María Irene Fornés',
		 director:'Adrianne Krstansky',
	  });
});

router.get('/itw',function(req,res, next){
	res.render('fefu',
	  {title:'Into the Woods',
		 playwright:'Disney',
		 director:'Joelle Robinson',
	  });
});

module.exports = router;
