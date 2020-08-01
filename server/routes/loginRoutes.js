var express = require('express')
var router = express.Router()
var pool = require('../main/db')



//get player by email and password
router.get('/api/get/getPlayer', (req, res, next ) => {
    const email = req.body.email,
    const password=req.body.password
    pool.query(`SELECT * FROM public."PLAYER" WHERE EMAIL = $1 AND PASSWORD=$2`, [ email,password ],
              (q_err, q_res) => {
                    res.json(q_res.rows)
    })
  })

  router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

module.exports = router