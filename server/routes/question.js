var express = require('express')
var router = express.Router()
var pool = require('../main/db')

//get all the questions for particular scenario
  router.get('/api/get/getAllQuestionsby/:id', async (req, res) => {
    const  scenario_id  = req.params.id
    const { rows } = await pool.query('SELECT * FROM public."QUESTION"  WHERE "SCENARIO_ID"=$1', [scenario_id])
    res.send(rows)
  })

  //get one question
router.get('/api/get/question/:id', (req, res, next) => {
    const question_id = req.query.question_id
    pool.query(`SELECT * FROM public."QUESTION"
                WHERE QUESTION_ID=$1`,[ question_id ],
              (q_err, q_res) => {
                  res.json(q_res.rows)
        })
  } )

  
  //save new question to db
  router.post('/api/question/posttodb', (req, res, next) => {
    const values = [ req.body.scenario_id,
                     req.body.description,
                     req.body.correct_answer,
                     req.body.worth]
    pool.query(`INSERT INTO public."QUESTION"(SCENARIO_ID, DESCRIPTION, CORRECT_ANSWER, WORTH)
                VALUES($1, $2, $3, $4)`,
             values, (q_err, q_res) => {
            if(q_err) return next(q_err);
            res.json(q_res.rows)
      })
  })
  
  //edit current question
  router.put('/api/put/question', (req, res, next) => {
    const values = [ req.body.question_id,
                     req.body.scenario_id,
                     req.body.description,
                     req.body.correct_answer,
                     req.body.worth]
    pool.query(`UPDATE public."QUESTION" SET SCENARIO_ID = $2, DESCRIPTION=$3, CORRECT_ANSWER = $4, WORTH = $5
                WHERE QUESTION_ID = $1`, values,
                (q_err, q_res) => {
                  console.log(q_res)
                  console.log(q_err)
          })
  })
  
  router.delete('/api/delete/question', (req, res, next) => {
    const question_id = req.body.question_id
    pool.query(`DELETE FROM public."QUESTION" WHERE QUESTION_ID = $1`, [ question_id ],
                (q_err, q_res) => {
                  res.json(q_res.rows)
                  console.log(q_err)
         })
  })
  router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

module.exports = router