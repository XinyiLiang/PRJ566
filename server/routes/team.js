var express = require('express')
var router = express.Router()
var pool = require('../main/db')


router.get('/get/getTeams', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM public."TEAMS"') 
              
                    res.send(rows)
    })

  
  router.get('/get/team/:id', async (req, res) => {
    const  id  = req.params.id
    const { rows } = await pool.query('SELECT * FROM public."TEAMS"  WHERE "TEAM_ID"=$1', [id])
    res.send(rows[0])
  })


  //modified by Xinyi Liang
  router.post('/team/posttodb', (req, res, next) => {
    const values = [ req.body.undefined.TeamName,
                     req.body.undefined.TeamType, 
                     req.body.undefined.teamPassword]
                  
  pool.query(`INSERT INTO public."TEAMS"("NAME", "TYPE", "PASSWORD") VALUES($1, $2, $3)`,
             values, (q_err, q_res) => {
            if(q_err) return next(q_err);
            res.json(q_res)
      });

      
  })
  
  router.put('/put/post', (req, res, next) => {
    const values = [ req.body.uid, 
                     req.body.name,
                     req.body.type, 
                     req.body.password]
    pool.query(`UPDATE public."TEAMS" SET NAME= $2, TYPE=$3, PASSWORD=$4
                WHERE TEAM_ID = $1`, values,
                (q_err, q_res) => {
                  console.log(q_res)
                  console.log(q_err)
          })
  })
  
  router.delete('/delete/team', (req, res, next) => {
    const post_id = req.body.team_id
    pool.query(`DELETE FROM public."TEAMS" WHERE TEAM_ID = $1`, [ team_id ],
                (q_err, q_res) => {
                  res.json(q_res.rows)
                  console.log(q_err)
         })
  })
  module.exports = router