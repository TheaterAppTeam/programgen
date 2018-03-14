var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fefu/title',function(req, res, next){
	res.render('title',
	  {
      title:'Fefu and her Friends',
      chair: 'Susan Dibble',
      artisticDirector: 'Robert Walsh',
		  playwright:'María Irene Fornés',
		  director:'Adrianne Krstansky',
      scenicDesigner: 'Cameron Anderson',
      costumeDesigner: 'Mary Hurd',
      lightingDesigner: 'Jeff Adelberg',
      soundDesigner: 'Dewey Dellay',
      stageManager: 'Hannah Uher',
      publisher: 'Broadway Play Publishing Inc, NYC',
	  });
});

router.get('/fefu/notes',function(req, res, next){
	res.render('notes',
	  );
});

router.get('/fefu/cast',function(req, res, next){
	res.render('cast',
	  );
});

router.get('/fefu/bio',function(req, res, next){
	res.render('bio',
	  );
});

router.get('/fefu/ps',function(req, res, next){
	res.render('ps2',
	  );
});

router.get('/fefu/sponsors',function(req, res, next){
	res.render('sponsors',
	  );
});

router.get('/itw',function(req, res, next){
	res.render('title',
	  {title:'Into the Woods',
		 playwright:'Disney',
		 director:'Joelle Robinson',
	  });
});

module.exports = router;
