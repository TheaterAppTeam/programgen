var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fefu/front',function(req,res, next){
	res.render('title',
	  {title:'Fefu and her Friends',
		 playwright:'María Irene Fornés',
		 director:'Adrianne Krstansky',
	  });
});

router.get('/fefu/ps',function(req,res, next){
	res.render('ps2',
	  );
});

router.get('/fefu/friends',function(req,res, next){
	res.render('sponsors',
	  );
});

router.get('/itw',function(req,res, next){
	res.render('title',
	  {title:'Into the Woods',
		 playwright:'Disney',
		 director:'Joelle Robinson',
	  });
});

module.exports = router;
