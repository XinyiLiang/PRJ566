var express = require('express');
var router = express.Router();


var clues  = require('../routes/clue');
<<<<<<< HEAD
var npc  = require('../routes/npcs');
 var gameday = require('../routes/gameday');
 var npm_Scenario = require('../routes/npc_scenario');
var questions = require('../routes/question');
 var score = require('../routes/score');
 var team_answer = require('../routes/team_answer');
var team_score = require('../routes/team_score');
 var team_Trophy = require('../routes/team_Trophy');
 var team = require('../routes/team');
var user = require('../routes/user');
 var scenario = require('../routes/scenario');
 var trophys = require('../routes/trophy');
=======
var npc  = require('../routes/npc');
 var gameday = require('../routes/gameday');
 var npm_Scenario = require('../routes/npc_scenario');
 var questions = require('../routes/question');
 var score = require('../routes/score');
 var team_answer = require('../routes/team_answer');
 var team_score = require('../routes/team_score');
 var team_Trophy = require('../routes/team_Trophy');
 var team = require('../routes/team');
var user = require('../routes/userRoutes');
 var scenario = require('../routes/scenario');
var trophys = require('../routes/trophy');
>>>>>>> 9dc0f523b0d9e0fe296311dba3472c9b23d5e4fe




router.use(clues);
router.use(npc);
 router.use(gameday);
<<<<<<< HEAD
router.use(npm_Scenario);
 router.use(questions);
 router.use(score);
 router.use(team_answer);
 router.use(team_score);
 router.use(team_Trophy);
=======
 router.use(npm_Scenario);
router.use(questions);
 router.use(score);
 router.use(team_answer);
 router.use(team_score);
router.use(team_Trophy);
>>>>>>> 9dc0f523b0d9e0fe296311dba3472c9b23d5e4fe
router.use(team);
 router.use(user);
 router.use(scenario);
 router.use(trophys);


module.exports = router;