var express = require('express')
var router = express.Router()
var pool = require('../main/db')


//create new user
router.post('/api/user/posttodb', (req, res, next) => {
    const values = [ req.body.first_name,
                     req.body.last_name,
                     req.body.birthdate,
                     req.body.username,
                     req.body.password,
                     req.body.email,
                     req.body.phonenumber,
                     req.body.team_id]
    pool.query(`INSERT INTO public."PLAYER"(FIRST_NAME, LAST_NAME, BIRTHDATE, USERNAME, PASSWORD, EMAIL, PHONENUMBER, TEAM_ID)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8)`,
             values, (q_err, q_res) => {
            if(q_err) return next(q_err);
            res.json(q_res.rows)
      })
  })

  router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

module.exports = router