var router = require('express').Router();



router.use('/user', require('./user')); 
router.use('/clue', require('./clue'));  
router.use('/gameday', require('./gameday'));  
router.use('/npc', require('./npc'));  
//router.use('/npcScenario', require('./npcScenario'));  
//router.use('/question', require('./question'));  
router.use('/scenario', require('./scenario'));  
//router.use('/score', require('./score'));
//router.use('/teamAnswer', require('./teamAnswer'));
router.use('/teams', require('./teams'));
//router.use('/teamScore', require('./teamScore'));
//router.use('/teamTrophy', require('./teamTrophy'));
//router.use('/trophy', require('./trophy'));

module.exports = router;