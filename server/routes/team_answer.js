var express = require('express')
var router = express.Router()
var pool = require('../main/db')

//get entered answer for particular question and team 
router.get('/api/get/answerTeam', (req, res, next ) => {
    const values = [ req.query.question_id,
                     req.query.team_id]
    pool.query(`SELECT * FROM public."TEAM_ANSWER" WHERE QUESTION_ID = $1 AND TEAM_ID = $2`, values, 
              (q_err, q_res) => {
                    res.json(q_res.rows)
    })
  })
  
  //save new answer to db
  router.post('/api/answer/posttodb', (req, res, next) => {
    const values = [ req.body.team_id,
                     req.body.question_id,
                     req.body.answer]
    pool.query(`INSERT INTO public."TEAM_ANSWER"("TEAM_ID", "QUESTION_ID", "ANSWER")
                VALUES($1, $2, $3)`,
             values, (q_err, q_res) => {
            if(q_err) return next(q_err);
            res.json(q_res.rows)
      })
  })
  
  //edit current answer
  router.put('/api/put/answer', (req, res, next) => {
    const values = [ req.body.team_id,
                     req.body.question_id,
                     req.body.answer,
                     req.body.answer_id]
    pool.query(`UPDATE public."TEAM_ANSWER" SET TEAM_ID = $1, QUESTION_ID=$2, ANSWER = $3
                WHERE ANSWER_ID = $4`, values,
                (q_err, q_res) => {
                  console.log(q_res)
                  console.log(q_err)
          })
  })
  
  router.delete('/api/delete/answer', (req, res, next) => {
    const answer_id = req.body.answer_id
    pool.query(`DELETE FROM public."TEAM_ANSWER" WHERE ANSWER_ID = $1`, [ answer_id ],
                (q_err, q_res) => {
                  res.json(q_res.rows)
                  console.log(q_err)
         })
  })
  router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

module.exports = router