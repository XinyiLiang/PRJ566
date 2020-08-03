var express = require('express')
var router = express.Router()
var pool = require('../main/db')
  
  //save new collected clue for team to db
  router.post('/api/team_score_clue/posttodb', (req, res, next) => {
    const clue_id = req.body.clue_id
    pool.query(`INSERT INTO public."TEAM_SCORE"(CLUE_ID)
                VALUES($1)`, [clue_id],
             (q_err, q_res) => {
            if(q_err) return next(q_err);
            res.json(q_res.rows)
      })
  })
  
  router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

module.exports = router