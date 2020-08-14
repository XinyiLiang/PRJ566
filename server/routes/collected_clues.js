var express = require('express')
var router = express.Router()
var pool = require('../main/db')


router.get(`/get/getTeamClues/:id`, async (req, res) => {
    const  id  = req.params.id
     const { rows } = await pool.query(`SELECT * FROM public."CLUES" col JOIN public."COLLECTED_CLUES" c ON c."CLUE_ID"=col."CLUE_ID" WHERE "TEAM_ID" = $1`, [id])
     res.send(rows)
     console.log(rows)
     console.log(id)
      })


      router.post('/coll_clue/posttodb', (req, res, next) => {
        const values = [ req.body.team_id,
                         req.body.clue_id
                         
                        ]    
                        console.log(values);
        pool.query(`INSERT INTO public."COLLECTED_CLUES"("TEAM_ID", "CLUE_ID")
                     SELECT $1, $2
                     WHERE NOT EXISTS  
                     (SELECT * FROM public."COLLECTED_CLUES" WHERE "CLUE_ID"= $2) RETURNING *; `,
                 values, (q_err, q_res) => {
                if(q_err) return next(q_err);
                res.json(q_res.rows);
                //console.log(values);
          })
      })


module.exports = router