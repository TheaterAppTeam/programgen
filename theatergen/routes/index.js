var express = require('express');
var router = express.Router();

fefu =
{
 title:
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
  },
 notes:
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
      ],
    },

  cast:
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
  },

  ps:
     {
    prodStaff: [
              {
                role: 'Assistant Director',
                people: ['Andrew Child', 'Joelle Robinson']
              },
              {
                role: 'Assistant Stage Manager',
                people: ['Delaney Palma', 'Emily Politi']
              },
              {
                role: 'Prop Master',
                people: ['Maggie Cooper']
              },
              {
                role: 'Scenic Charge',
                people: ['Holly Diaz']
              },
              {
                role: 'Shop Supervisor',
                people: ['Thomas Farrell']
              },
              {
                role: 'Carpenters',
                people: ['Sivan Ertel', 'Luis Flores', 'Molly Rocca']
              },
              {
                role: 'Run Crew',
                people: ['Emily Hancock', 'Melody Wilkenfeld Wu']
              },
              {
                role: 'Electricians',
                people: ['Kaeda Morales', 'Steven Reilly', 'Jacob Margolis',
                'Anthony Fimmano', 'Zachary Kolar',
                'Megan McClory', 'Noah Mark']
              },
              {
                role: 'Lighting Programmer',
                people: ['Megan McClory']
              },
              {
                role: 'Sound Board Operator',
                people: ['Zain Walker']
              },
              {
                role: 'Open Caption Designer',
                people: ['Andrew Child']
              },
              {
                role: 'Open Caption Operator',
                people: ['Isabella Stork']
              },
              {
                role: 'First Hand',
                people: ['Sally Perry']
              },
              {
                role: 'Costume Construction',
                people: ['Marisol Abreu', 'Haia Bchiri', 'Ellie McKnight', 'Remony Perlman']
              },
              {
                role: 'Dressers',
                people: ['Riely Allen', 'Kate Kesselman']
              },
              {
                role: 'House Manager',
                people: ['Katie Sumi']
              },
              {
                role: 'Head Ushers',
                people: ['Tamara Garcia', 'Brenda Shen']
              },
              {
                role: 'Front of House',
                people: ['Ben Astrachan', 'Jessica Lam', 'Anna Sherman', 'Jared Snyder',
                 'Alina Sipp-Alpers', 'Gabe Walker', 'Arya Vanetsky']
              },
              {
                role: 'Box Office',
                people: ['Brittany Duncan', 'Lily Feinson', 'Tafara Gava',
                'Melina Gross', 'Emma Gutman', 'Emma Hanselman', 'Jamie Jason',
                 'Candice Jiang', 'Emily Kaplan', 'Carmen Lopez-Landaverde']
              }
          ]
  },

  friends:
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
          inHonor: 'In Honor of Adrianne Krstansky'
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
    },
};

festival =
{
  // fesStaff:
  // [
  //   {
  //     people: 'Alicia Hyland',
  //     role: 'Executive Director',
  //     bio: "Alicia has worked with the Senior Festival in a variety of capacities over the last seven years, and is thrilled to be a part of the growth of this program. At Brandeis, Alicia has been the Academic Administrator for the past fourteen years, taught several courses, and directed readings of new and existing plays. Alicia received her MFA in Creative Writing from Lesley University and has had work placed in a variety of literary magazines, including Mason's Road and Fwriction Review."
  //   },
  //   {
  //     people: 'Alex Jacobs',
  //     role: 'Assistant Director',
  //     bio: 'Alex Jacobs is an Adjunct Professor and MFA ‘14 Acting graduate at Brandeis. He is proud to be involved in the festival supporting these talented seniors. He was most recently seen on the Brandeis stage in Martyr, Shoes On, Shoes Off, and Cabaret, among others. Alex received his undergraduate degree in Theatre from the University of Leeds in England and the University of Memphis, Tennessee. His Regional Credits include: Steve (Zeitgeist),The T Party (Company One), The End of the World (Boston Actors Theatre), The 39 Steps (Winnipesaukee Playhouse) and Animals out of Paper (Hampstead Theatre), the last of which he received a New Hampshire Theatre Award for Best Supporting Actor in a Professional Comedy/Drama. Alex can be seen this April in The Lyons, at the Boston Center for the Arts.'
  //   }
  //   ,
  //   {
  //     people: 'Emily McCourt',
  //     role: 'Lighting Designer',
  //     bio: "Emily is a Boston-area set and lighting designer. This is Emily's fourth year working on the Brandeis Senior Festival. Emily has designed for many local theatre groups, including GAN-e-meed Theatre Project, Theatre on Fire, Bad Habit Productions, The Longwood Players, Argos Productions, Happy Medium Theatre, Sleeping Weazel, Boston Public Works and Worcester County Light Opera Company."
  //   }
  //   ,
  //   {
  //     people: 'Lauren Burke',
  //     role: 'Production Stage Manager',
  //     bio: "Lauren is a stage manager in the Boston area. Credits include: American Repertory Theatre, Lyric Stage Company, Boston Opera Collaborative, North Shore Music Theatre, Harvard University, Suffolk University, Poets’ Theatre, Israeli Stage, Boston Ballet and Actors’ Shakespeare Project. She is a graduate of Suffolk University."
  //   }
  // ]
};

plays={fefu:fefu, festival:festival};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/festival/festival-staff', function(req, res, next) {
  res.render('festival-staff',
    {
      festivalStaff:
      [
        {
          people: 'Alicia Hyland',
          role: 'Executive Director',
          bio: "Alicia has worked with the Senior Festival in a variety of capacities over the last seven years, and is thrilled to be a part of the growth of this program. At Brandeis, Alicia has been the Academic Administrator for the past fourteen years, taught several courses, and directed readings of new and existing plays. Alicia received her MFA in Creative Writing from Lesley University and has had work placed in a variety of literary magazines, including Mason's Road and Fwriction Review."
        },
        {
          people: 'Alex Jacobs',
          role: 'Assistant Director',
          bio: 'Alex Jacobs is an Adjunct Professor and MFA ‘14 Acting graduate at Brandeis. He is proud to be involved in the festival supporting these talented seniors. He was most recently seen on the Brandeis stage in Martyr, Shoes On, Shoes Off, and Cabaret, among others. Alex received his undergraduate degree in Theatre from the University of Leeds in England and the University of Memphis, Tennessee. His Regional Credits include: Steve (Zeitgeist),The T Party (Company One), The End of the World (Boston Actors Theatre), The 39 Steps (Winnipesaukee Playhouse) and Animals out of Paper (Hampstead Theatre), the last of which he received a New Hampshire Theatre Award for Best Supporting Actor in a Professional Comedy/Drama. Alex can be seen this April in The Lyons, at the Boston Center for the Arts.'
        }
        ,
        {
          people: 'Emily McCourt',
          role: 'Lighting Designer',
          bio: "Emily is a Boston-area set and lighting designer. This is Emily's fourth year working on the Brandeis Senior Festival. Emily has designed for many local theatre groups, including GAN-e-meed Theatre Project, Theatre on Fire, Bad Habit Productions, The Longwood Players, Argos Productions, Happy Medium Theatre, Sleeping Weazel, Boston Public Works and Worcester County Light Opera Company."
        }
        ,
        {
          people: 'Lauren Burke',
          role: 'Production Stage Manager',
          bio: "Lauren is a stage manager in the Boston area. Credits include: American Repertory Theatre, Lyric Stage Company, Boston Opera Collaborative, North Shore Music Theatre, Harvard University, Suffolk University, Poets’ Theatre, Israeli Stage, Boston Ballet and Actors’ Shakespeare Project. She is a graduate of Suffolk University."
        }
    ]
  });
});

router.get('/:play/:page',function(req, res, next){
    var playname=req.params.play;
    var pagename = req.params.page;
    console.log('getting title for '+playname+"/"+pagename);
    res.render(pagename, plays[playname][pagename]);
});

/*
router.get('/:play/notes',function(req, res, next){
    var playname=req.params.play;
    res.render('notes',plays[playname].dirnotes)
});

router.get('/:play/cast',function(req, res, next){
    var playname=req.params.play;
	res.render('cast',plays[playname].cast);
});

router.get('/fefu/bio',function(req, res, next){
    var playname=req.params.play;
	res.render('bio',{} );
});

router.get('/fefu/ps',function(req, res, next){
    var playname=req.params.play;
	res.render('ps2',plays.fefu.ps2);
});

router.get('/fefu/friends',function(req, res, next){
    var playname=req.params.play;
	res.render('friends',plays.fefu.friends);
});
*/

router.get('/itw',function(req, res, next){
	res.render('title',
	  {title:'Into the Woods',
		 playwright:'Disney',
		 director:'Joelle Robinson',
	  });
});

module.exports = router;
