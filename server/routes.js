var express = require('express')
var router = express.Router()
var pool = require('./main/db')


/*
    TEAMS ROUTES SECTION
*/
router.get('/api/get/getTeams', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM public."TEAMS"') 
              
                    res.send(rows)
    })

  
  router.get('/api/get/team/:id', async (req, res) => {
    const { id } = req.params
    const { rows } = await pool.query('SELECT * FROM public."TEAMS"  WHERE TEAM_ID=$1', [id])
    res.send(rows[0])
  })
    
  router.post('/api/team/posttodb', async (req, res, next) => {
    const values = [ req.body.name,
                     req.body.type, 
                     req.body.password]
                     const { rows } = await pool.query('INSERT INTO public."TEAMS"(NAME, TYPE, PASSWORD)VALUES($1, $2, $3)',
             values, (q_err, q_res) => {
            if(q_err) return next(q_err);
            res.json(rows)
      })
  })
  
  router.put('/api/put/post', (req, res, next) => {
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
  
  router.delete('/api/delete/team', (req, res, next) => {
    const post_id = req.body.team_id
    pool.query(`DELETE FROM public."TEAMS" WHERE TEAM_ID = $1`, [ team_id ],
                (q_err, q_res) => {
                  res.json(q_res.rows)
                  console.log(q_err)
         })
  })
  
/*
    NPC ROUTES SECTION
*/

router.get('/api/get/getAllNpc', (req, res, next ) => {
    pool.query(`SELECT * FROM public."NPC"`, 
              (q_err, q_res) => {
                    res.json(q_res.rows)
    })
  })
  
  router.get('/api/get/NPC', (req, res, next) => {
    const npc_id = req.query.npc_id
  
    pool.query(`SELECT * FROM public."NPC"
                WHERE NPC_ID=$1`,
              [ npc_id ], (q_err, q_res) => {
                  res.json(q_res.rows)
        })
  } )
  
  
  router.post('/api/npc/posttodb', (req, res, next) => {
    const values = [ req.body.name,
                     req.body.clue,
                     req.body.answer,
                     req.body.phoneNum, 
                     req.body.sid]
    pool.query(`INSERT INTO public."NPC"(NAME, CLUE, ANSWER, PHONE_NUMBER, SCENARIO_ID)
                VALUES($1, $2, $3, $4, $5)`,
             values, (q_err, q_res) => {
            if(q_err) return next(q_err);
            res.json(q_res.rows)
      })
  })
  
  router.put('/api/put/npc', (req, res, next) => {
    const values = [ req.body.nid,
                     req.body.name,
                     req.body.clue,
                     req.body.answer,
                     req.body.phoneNum, 
                     req.body.sid]
    pool.query(`UPDATE public."NPC" SET NAME= $2, CLUE=$3, ANSWER=$4, PHONE_NUMBER=$5, SCENARIO_ID=$6
                WHERE NPC_ID = $1`, values,
                (q_err, q_res) => {
                  console.log(q_res)
                  console.log(q_err)
          })
  })
  
  router.delete('/api/delete/npc', (req, res, next) => {
    const post_id = req.body.npc_id
    pool.query(`DELETE FROM public."NPC" WHERE NPC_ID = $1`, [ npc_id ],
                (q_err, q_res) => {
                  res.json(q_res.rows)
                  console.log(q_err)
         })
  })


module.exports = router