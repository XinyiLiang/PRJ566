var express = require('express')
var router = express.Router()
var pool = require('../../main/db')

//get all the gamedays from database ordered by date (closest first)
router.get('/api/get/getAllScenarios', (req, res, next ) => {
    pool.query(`SELECT * FROM public."SCENARIO"`, 
              (q_err, q_res) => {
                    res.json(q_res.rows)
    })
  })
  
  //get scenario for particular gameday (for events schedule)
router.get('/api/get/scenarioGame', (req, res, next) => {
    const game_id = req.query.gameday_id
    pool.query(`SELECT * FROM public."SCENARIO"
                WHERE GAMEDAY_ID=$1`,[ game_id ],
              (q_err, q_res) => {
                  res.json(q_res.rows)
        })
  } )

    //get one scenario
router.get('/api/get/scenario', (req, res, next) => {
    const scenario_id = req.query.scenario_id
    pool.query(`SELECT * FROM public."SCENARIO"
                WHERE SCENARIO_ID=$1`,[ scenario_id ],
              (q_err, q_res) => {
                  res.json(q_res.rows)
        })
  } )
  
  //save new scenario to db
  router.post('/api/scenario/posttodb', (req, res, next) => {
    const values = [ req.body.name,
                     req.body.description,
                     req.body.image,
                     req.body.video,
                     req.body.storyline,
                     req.body.gameday_id]
    pool.query(`INSERT INTO public."GAMEDAY"(NAME, DESCRIPTION, IMAGE, VIDEO, STORYLINE, GAMEDAY_ID)
                VALUES($1, $2, $3, $4, $5, $6)`,
             values, (q_err, q_res) => {
            if(q_err) return next(q_err);
            res.json(q_res.rows)
      })
  })
  
  //edit current scenario
  router.put('/api/put/scenario', (req, res, next) => {
    const values = [ req.body.scenario_id,
                     req.body.name,
                     req.body.description,
                     req.body.image,
                     req.body.video,
                     req.body.storyline,
                     req.body.gameday_id]
    pool.query(`UPDATE public."SCENARIO" SET NAME = $2, DESCRIPTION=$3, IMAGE = $4, VIDEO = $5, STORYLINE = $6, GAMEDAY_ID = $7
                WHERE SCENARIO_ID = $1`, values,
                (q_err, q_res) => {
                  console.log(q_res)
                  console.log(q_err)
          })
  })
  
  router.delete('/api/delete/scenario', (req, res, next) => {
    const scenario_id = req.body.scenario_id
    pool.query(`DELETE FROM public."SCENARIO" WHERE SCENARIO_ID = $1`, [ scenario_id ],
                (q_err, q_res) => {
                  res.json(q_res.rows)
                  console.log(q_err)
         })
  })
  router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

module.exports = router