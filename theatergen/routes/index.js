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
  {
    title: 'Fefu & Her Friends',
    cast: [
              {
                role: 'Fefu',
                people: 'Rebecca Meyers'
              },
              {
                role: 'Cindy',
                people: 'Keturah'
              },
              {
                role: 'Julia',
                people: 'Sara Kenney'
              },
              {
                role: 'Emma',
                people: 'Haia Bchiri'
              },
              {
                role: 'Paula',
                people: 'Remony Perlman'
              },
              {
                role: 'Sue',
                people: 'Emily Bisno'
              },
              {
                role: 'Cecilia',
                people: 'Alex Wu'
              }
          ],
      setting : 'Location: New England, Spring 1935',
      acts: [
        {
          act: 'Part 1-',
          location: 'Noon'
        },
        {
          act: 'Part 2-',
          location: 'Afternoon'
        },
        {
          act: 'Part 3-',
          location: 'Evening'
        }
      ]
  });
});

router.get('/fefu/bio',function(req, res, next){
	res.render('bio',

	  );
});

router.get('/fefu/ps',function(req, res, next){
	res.render('ps',
  {
    staff: [
              {
                role: 'Fefu',
                people: 'Rebecca Meyers'
              },
              {
                role: 'Cindy',
                people: 'Keturah'
              },
              {
                role: 'Julia',
                people: 'Sara Kenney'
              },
              {
                role: 'Emma',
                people: 'Haia Bchiri'
              },
              {
                role: 'Paula',
                people: 'Remony Perlman'
              },
              {
                role: 'Sue',
                people: 'Emily Bisno'
              },
              {
                role: 'Cecilia',
                people: 'Alex Wu'
              }
          ]
  });
});

router.get('/fefu/friends',function(req, res, next){
	res.render('friends',
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
