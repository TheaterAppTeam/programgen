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
    {
      notes: [
        {
          note: 'Fefu & Her Friends has been a project of discovery. Through countless hours of rehearsals and workshops, we as a cast unearthed hidden gems placed on Earth by María Irene Fornés. It was the celebration of diverse women and the ordinary that drove me to the play. And it was Fornes’ free spirit and natural curiosity that kept me entangled in Fefu’s world. As a collective we uncovered questions and thoughts that were previously deeply embedded in my unconsciousness; facing these thoughts together made me realize a lot about navigating the world around me. Please enjoy a moment of realness with Fefu and her friends. Allow yourself see a world, a light, a guardian—in everything.',
          people: 'Joelle Robinson',
          role: 'Assistant Director'
        },
        {
          note: 'Fornés’ gift with Fefu is that, in creating a piece which revels in being about so little (a group of women gathering to rehearse for a fundraiser) she has built a vehicle that encompasses nuances of truths which manage to dually seem to be both unearthed and self-imposed. In our scuffling with the text, it seems to have snowballed through contemporary social and political ideologies, festooning itself in the garb of exactly what we need to see right now on our campus. The unsupposing genius of Fornes is that her attention to deceptively insignificant details allows her work to take on hugely impactful commentary. While it seems to be our constant job as theatre artists to defend why our work is pertinent right now, because of Fornés’ ability to nestle her plays deep within the shadows of the human experience, we have not had that challenge with Fefu',
          people: 'Andrew Child',
          role: 'Assistant Director'
        }
      ]
    });
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
  {
    producerCircle:
      [
        {
          donor: 'The Blanche and Irving Laurie Foundation',
          inHonor: ''
        },
        {
          donor: 'Harold & Mimi Steinberg Charitable Trust',
          inHonor: ''
        }
      ],
    playwrightCircle:
      [
        {
          donor: 'FJN Charitable Foundation',
          inHonor: ''
        }
      ],
    designerCircle:
      [
        {
          donor: 'Sally Marshall Glickman',
          inHonor: ''
        },
        {
          donor:'Nancy and Maurice Lazarus Fund',
          inHonor: ''
        }
      ],
    artistCircle:
      [
        {
          donor: 'Batja Sanders Astrachan',
          inHonor: ''
        },
        {
          donor: 'Mohit Gourisaria',
          inHonor: ''
        }
      ],
    leadingRole:
      [
        {
          donor: 'Terry E.D. & Cornelia Duryee Moore',
          inHonor: ''
        }
      ],
    supportingRole:
      [
        {
          donor: 'Norman A. & Sydney Rose Abend',
          inHonor: ''
        },
        {
          donor: 'Malik B. El-Amin',
          inHonor: ''
        },
        {
          donor: 'Lisa H. Fleischman',
          inHonor: ''
        },
        {
          donor: 'Scott M. & Marcia J. Glickman',
          inHonor: ''
        },
        {
          donor: 'Emily Griffin',
          inHonor: ''
        },
        {
          donor: 'David J. & Mary D. Kaye',
          inHonor: ''
        },
        {
          donor: 'Roberta Willison & Scott T. Kisker',
          inHonor: ''
        },
        {
          donor: 'Leona & Mel Lazar',
          inHonor: ''
        }
      ],
      supportingRole2:
      [
        {
          donor: 'Paula M. Marcus',
          inHonor: ''
        },
        {
          donor: 'Constance Simo Rosenblum',
          inHonor: 'In Memory of Robert J. Rosenblum'
        },
        {
          donor: 'Robert Stephen Tupper',
          inHonor: ''
        }
      ],
      artParton: [
        {
          donor: 'Michael T. Allosso & Peggy Whitefield',
          inHonor: ''
        },
        {
          donor: 'Julio & Olympia Contrada',
          inHonor: ''
        },
        {
          donor: 'Julia Davis',
          inHonor: ''
        },
        {
          donor: 'Alyson Blair Eller',
          inHonor: ''
        },
        {
          donor: 'Samuel M. Fuchs',
          inHonor: ''
        },
        {
          donor: 'Lenore F. & Irving Goldstein',
          inHonor: ''
        },
        {
          donor: 'Bethany Marie Greenbaum',
          inHonor: ''
        },
        {
          donor: 'Felix Kreisel',
          inHonor: ''
        },
        {
          donor: 'Joy Caroline Liebman',
          inHonor: ''
        },
        {
          donor: 'Sean P. & Margaret S. McCarthy',
          inHonor: ''
        },
        {
          donor: 'Valy & Kathy Menkin',
          inHonor: ''
        },
        {
          donor: 'Sarah Minkoff',
          inHonor: ''
        },
        {
          donor: 'Joseph & Miriam More',
          inHonor: ''
        },
        {
          donor: 'Marie E. & John I. Murray',
          inHonor: ''
        },
        {
          donor: 'Joanne & John J. O\'Donnell',
          inHonor: ''
        },
        {
          donor: 'Iris J. Raylesberg & Michael L. Rozansky',
          inHonor: 'In Honor of Chaye Zuckerman Shapot'
        },
        {
          donor: 'Karen S. Ryker',
          inHonor: ''
        },
        {
          donor: 'Laury P. & Mark H. Sorensen',
          inHonor: 'In Honor of Sally Glickman'
        },
        {
          donor: 'James A. True',
          inHonor: ''
        },
        {
          donor: 'Sarai Chava Warsoff'
        }
      ],
      notes: 'We were so fortunate to have documentary filmmaker Michelle Memran and award winning theater director join us for rehearsals. Michelle has spent the last couple of years making a film about the life and work for Maria Irene Fornes entitled ‘The Rest I Make Up’. For more information, please go to therestimakeup.com.',
      comments: ' The 2017-18 Brandeis Department of Theater Arts season is made possible through generous support from the Harold and Mimi Steinberg Charitable Trust; the Laurie Foundation; the Robin, Barbara and Malcolm L. Sherman Endowment for the Performing Arts; the Brandeis Arts Council; the Herbert and Kim Marie Beigel New Play Fund; and the Poses Fund.'
    });
});

router.get('/itw',function(req, res, next){
	res.render('title',
	  {title:'Into the Woods',
		 playwright:'Disney',
		 director:'Joelle Robinson',
	  });
});

module.exports = router;
