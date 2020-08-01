var express = require('express');
var router = express.Router();


var clues  = require('../routes/cluesRoutes');
var npc  = require('../routes/npcRoutes');
// var gameday = require('../routes/gamedayRoutes');
// var npm_Scenario = require('../routes/npc_scenarioRoutes');
 //var questions = require('../routes/questionRouts');
// var score = require('../routes/scoreRoutes');
// var team_answer = require('../routes/team_answerRoutes');
// var team_score = require('../routes/team_scoreRoutes');
// var team_Trophy = require('../routes/team_TrophyRoutes');
// var team = require('../routes/teamRoutes');
var user = require('../routes/userRoutes');
// var scenario = require('../routes/scenarioRoutes');
// var trophys = require('../routes/trophyRouts');




router.use(clues);
router.use(npc);
// router.use(gameday);
// router.use(npm_Scenario);
 //router.use(questions);
// router.use(score);
// router.use(team_answer);
// router.use(team_score);
// router.use(team_Trophy);
// router.use(team);
 router.use(user);
// router.use(scenario);
// router.use(trophys);


module.exports = router;