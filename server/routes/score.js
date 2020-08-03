var express = require('express')
var router = express.Router()
var pool = require('../main/db')

//get all scores
router.get('/api/get/getAllScores', (req, res, next ) => {
    pool.query(`SELECT * FROM public."SCORE"`, 
              (q_err, q_res) => {
                    res.json(q_res.rows)
    })
  })
  
  //get ONE SCORE   
router.get('/api/get/score', (req, res, next) => {
    const values = [req.query.score_id,
                    req.query.game_id]
    pool.query(`SELECT * FROM public."SCORE"
                WHERE SCORE_ID=$1 AND GAME_ID=$2`,[ values ],
              (q_err, q_res) => {
                  res.json(q_res.rows)
        })
  } )
  
    //get score for particular team   
router.get('/api/get/scoreTeam', (req, res, next) => {
    const values = [ req.query.team_id,
                     req.query.game_id]
    pool.query(`SELECT * FROM public."SCORE" 
                WHERE TEAM_ID=$1 AND GAME_ID=$2`, values,
              (q_err, q_res) => {
                  res.json(q_res.rows)
        })
  } )

  //save new score to db
  router.post('/api/score/posttodb', (req, res, next) => {
    const values = [ req.body.total_score,
                     req.body.moves,
                     req.body.correct_answers,
                     req.body.team_id,
                     req.body.game_id]
    pool.query(`INSERT INTO public."SCORE"(TOTAL_SCORE, MOVES, CORRECT_ANSWERS, TEAM_ID, GAME_ID)
                VALUES($1, $2, $3, $4, $5)`,
             values, (q_err, q_res) => {
            if(q_err) return next(q_err);
            res.json(q_res.rows)
      })
  })
  
  //edit current score
  router.put('/api/put/score', (req, res, next) => {
    const values = [ req.body.score_id,
                     req.body.total_score,
                     req.body.moves,
                     req.body.correct_answers,
                     req.body.team_id,
                     req.body.game_id]
    pool.query(`UPDATE public."SCORE" SET TOTAL_SCORE = $2, MOVES=$3, CORRECT_ANSWERS=$4, TEAM_ID=$5, GAME_ID=$6
                WHERE SCORE_ID = $1`, values,
                (q_err, q_res) => {
                  console.log(q_res)
                  console.log(q_err)
          })
  })
  
  router.delete('/api/delete/score', (req, res, next) => {
    const score_id = req.body.score_id
    pool.query(`DELETE FROM public."SCORE" WHERE SCORE_ID = $1`, [ score_id ],
                (q_err, q_res) => {
                  res.json(q_res.rows)
                  console.log(q_err)
         })
  })
  router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

module.exports = router