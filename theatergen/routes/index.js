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
	res.render('ps',
	  {title:'Fefu and her Friends',
		 staff:[
			 {title:"Assistant Directors",people:"Andrew Child, Joelle Robinson"},
			 {title:"Assistant Stage Managers",people:"Delaney Palma, Emily Politi"}
		 ]
	  });
});

router.get('/itw',function(req,res, next){
	res.render('title',
	  {title:'Into the Woods',
		 playwright:'Disney',
		 director:'Joelle Robinson',
	  });
});

module.exports = router;
