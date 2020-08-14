var express = require('express')
var router = express.Router()
var pool = require('../main/db')

//get all NPC from a particular scenario
router.get('/get/getScenario_npcs', (req, res, next ) => {
    const scenario_id = req.query.scenario_id
    pool.query(`SELECT * FROM public."NPC_SCENARIO" WHERE SCENARIO_ID = $1`, [ scenario_id ],
              (q_err, q_res) => {
                    res.json(q_res.rows)
    })
  })
  


module.exports = router