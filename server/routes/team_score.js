var express = require('express')
var router = express.Router()
var pool = require('../main/db')
  
  //save new collected clue for team to db
  router.post('/team_score_clue/posttodb', (req, res, next) => {
    const clue_id = req.query.clue_id
    pool.query(`INSERT INTO public."TEAM_SCORE"("CLUE_ID")
                VALUES($1)`, [clue_id],
             (q_err, q_res) => {
            if(q_err) return next(q_err);
            res.json(q_res.rows)
      })
  })
  router.post('/team_score_game/posttodb', (req, res, next) => {
    const team_id = req.query.team_id
    const game_id = req.body.game_id
    pool.query(`INSERT INTO public."TEAM_SCORE"("GAME_ID")
                VALUES($2) WHERE "TEAM_ID"=$1`, [team_id, game_id],
             (q_err, q_res) => {
            if(q_err) return next(q_err);
            res.json(q_res.rows)
      })
  })

module.exports = router