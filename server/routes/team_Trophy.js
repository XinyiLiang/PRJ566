var express = require('express')
var router = express.Router()
var pool = require('../main/db')

//get trophies for particular team
router.get('/api/get/getAllTeamTrophies', (req, res, next ) => {
    const team_id = req.query.team_id
    pool.query(`SELECT NAME FROM public."TROPHIES" t JOIN public."TEAM_TROPHY" tt ON t.TROPHY_ID=tt.TROPHY_ID WHERE tt.TEAM_ID=$1`, [ team_id ], 
              (q_err, q_res) => {
                    res.json(q_res.rows)
    })
  })

//save collected trophy for team to db  
  router.post('/api/team_trophy/posttodb', (req, res, next) => {
    const trophy_id = req.body.trophy_id
    pool.query(`INSERT INTO public."TEAM_TROPHY"(TROPHY_ID)
                VALUES($1)`,
             trophy_id, (q_err, q_res) => {
            if(q_err) return next(q_err);
            res.json(q_res.rows)
      })
  })

  router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

module.exports = router