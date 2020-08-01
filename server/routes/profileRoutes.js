var express = require('express')
var router = express.Router()
var pool = require('../main/db')



//get player profile(using email and password)
router.get('/api/get/getPlayer', (req, res, next ) => {
    const email = req.body.email,
    const password=req.body.password
    pool.query(`SELECT * FROM public."PLAYER" WHERE EMAIL = $1 AND PASSWORD=$2`, [ email,password ],
              (q_err, q_res) => {
                    res.json(q_res.rows)
    })
  })


  
  //edit current player
  router.put('/api/put/user', (req, res, next) => {
    const values = [ req.body.player_id,
                     req.body.username,
                     req.body.password,
                     req.body.email,
                     req.body.phonenumber,
                     req.body.team_id]
    pool.query(`UPDATE public."PLAYER" SET  USERNAME = $2, PASSWORD = $3, EMAIL = $4, PHONENUMBER = $5, TEAM_ID = $6
                WHERE PLAYER_ID = $1`, values,
                (q_err, q_res) => {
                  console.log(q_res)
                  console.log(q_err)
          })
  })
  
  router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

module.exports = router