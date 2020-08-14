var express = require('express')
var router = express.Router()
var pool = require('../main/db')

//get clues for particular npc
router.get('/get/getAllNpcClues/:id', async (req, res) => {
  const  id  = req.params.id
   const { rows } = await pool.query(`SELECT * FROM public."CLUES" WHERE "NPC_ID" = $1`, [id])
   res.send(rows)
   console.log(rows)
   console.log(id)
    })


  //get collected clues for particular team
router.get('/get/getAllTeamClues/:id', (req, res, next ) => {
  const values = [ req.query.team_id,
                   req.query.game_id]
  pool.query(`SELECT DESCRIPTION FROM public."CLUES" c JOIN public."TEAM_SCORE" t ON c.CLUE_ID=t.CLUE_ID WHERE t.TEAM_ID = $1 AND
  t.GAME_ID=$2 `, values,
            (q_err, q_res) => {
                  res.json(q_res.rows)
  })
})
  
  //save new clue to db
  router.post('/clue/posttodb', (req, res, next) => {
    const values = [ req.body.description,
                     req.body.npc_id]
    pool.query(`INSERT INTO public."CLUES"(DESCRIPTION, NPC_ID)
                VALUES($1, $2)`,
             values, (q_err, q_res) => {
            if(q_err) return next(q_err);
            res.json(q_res.rows)
      })
  })
  
  //edit current clue
  router.put('/put/clue', (req, res, next) => {
    const values = [ req.body.clue_id,
                     req.body.description,
                     req.body.npc_id]
    pool.query(`UPDATE public."CLUES" SET DESCRIPTION = $2, NPC_ID=$3
                WHERE CLUE_ID = $1`, values,
                (q_err, q_res) => {
                  console.log(q_res)
                  console.log(q_err)
          })
  })
  
  router.delete('/delete/clue', (req, res, next) => {
    const clue_id = req.body.clue_id
    pool.query(`DELETE FROM public."CLUES" WHERE CLUE_ID = $1`, [ clue_id ],
                (q_err, q_res) => {
                  res.json(q_res.rows)
                  console.log(q_err)
         })
  })

module.exports = router