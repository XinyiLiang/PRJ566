var express = require('express')
var router = express.Router()
var pool = require('../main/db')


router.get('/get/getAllNpc', (req, res, next ) => {
    pool.query(`SELECT * FROM public."NPC"`, 
              (q_err, q_res) => {
                    res.json(q_res.rows)
    })
  })

 
  router.get('/get/NPC', (req, res, next) => {
    const npc_id = req.query.npc_id
  
    pool.query(`SELECT * FROM public."NPC"
                WHERE NPC_ID=$1`,
              [ npc_id ], (q_err, q_res) => {
                  res.json(q_res.rows)
        })
  } )
  
  
  router.post('/npc/posttodb', (req, res, next) => {
    const values = [ req.body.name,
                     req.body.answer,
                     req.body.phoneNum, 
                     req.body.scenario_id]
    pool.query(`INSERT INTO public."NPC"(NAME, ANSWER, PHONE_NUMBER, SCENARIO_ID)
                VALUES($1, $2, $3, $4)`,
             values, (q_err, q_res) => {
            if(q_err) return next(q_err);
            res.json(q_res.rows)
      })
  })
  
  router.put('/put/npc', (req, res, next) => {
    const values = [ req.body.npc_id,
                     req.body.name,
                     req.body.answer,
                     req.body.phoneNum, 
                     req.body.scenario_id]
    pool.query(`UPDATE public."NPC" SET NAME= $2, ANSWER=$3, PHONE_NUMBER=$4, SCENARIO_ID=$5
                WHERE NPC_ID = $1`, values,
                (q_err, q_res) => {
                  console.log(q_res)
                  console.log(q_err)
          })
  })
  
  router.delete('/delete/npc', (req, res, next) => {
    const post_id = req.body.npc_id
    pool.query(`DELETE FROM public."NPC" WHERE NPC_ID = $1`, [ npc_id ],
                (q_err, q_res) => {
                  res.json(q_res.rows)
                  console.log(q_err)
         })
  })


module.exports = router