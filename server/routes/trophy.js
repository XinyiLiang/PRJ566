var express = require('express')
var router = express.Router()
var pool = require('../main/db')

//get all trophies
router.get('/get/getAlltrophies', (req, res, next ) => {
    pool.query(`SELECT * FROM public."TROPHY"`, 
              (q_err, q_res) => {
                    res.json(q_res.rows)
    })
  })
  
  //get ONE trophhy   
router.get('/get/trophy', (req, res, next) => {
    const trophy_id = req.query.trophy_id
    pool.query(`SELECT * FROM public."TROPHY"
                WHERE TROPHY_ID=$1`, [trophy_id],
              (q_err, q_res) => {
                  res.json(q_res.rows)
        })
  } )
  

module.exports = router