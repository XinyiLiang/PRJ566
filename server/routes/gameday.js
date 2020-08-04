var express = require('express')
var router = express.Router()
var pool = require('../main/db')

//get all the gamedays from database ordered by date (closest first)
router.get('/api/get/getAllGamedays', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM public."GAMEDAY" ORDER BY "DATE" ASC') 
              
                    res.send(rows)
    })

  
  //get one gameday
router.get('/api/get/gameday', (req, res, next) => {
    const game_id = req.query.game_id
    pool.query(`SELECT * FROM public."GAMEDAY"
                WHERE GAME_ID=$1`,[ game_id ],
              (q_err, q_res) => {
                  res.json(q_res.rows)
        })
  } )
  
  //save new gameday to db
  router.post('/api/gameday/posttodb', (req, res, next) => {
    const values = [ req.body.date,
                     req.body.time]
    pool.query(`INSERT INTO public."GAMEDAY"(DATE, TIME)
                VALUES($1, $2)`,
             values, (q_err, q_res) => {
            if(q_err) return next(q_err);
            res.json(q_res.rows)
      })
  })
  
  //edit current GAME
  router.put('/api/put/gameday', (req, res, next) => {
    const values = [ req.body.game_id,
                     req.body.date,
                     req.body.time]
    pool.query(`UPDATE public."GAMEDAY" SET DATE = $2, TIME=$3
                WHERE GAME_ID = $1`, values,
                (q_err, q_res) => {
                  console.log(q_res)
                  console.log(q_err)
          })
  })
  
  router.delete('/api/delete/gameday', (req, res, next) => {
    const game_id = req.body.game_id
    pool.query(`DELETE FROM public."GAMEDAY" WHERE GAME_ID = $1`, [ game_id ],
                (q_err, q_res) => {
                  res.json(q_res.rows)
                  console.log(q_err)
         })
  })
  router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

module.exports = router