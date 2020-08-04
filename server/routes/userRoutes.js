var express = require('express')
var router = express.Router()
var pool = require('../main/db')


  //create new user
  router.post('/api/user/posttodb', (req, res, next) => {
    const values = [ req.body.primaryInfo.first_name,
                     req.body.primaryInfo.last_name,
                     req.body.primaryInfo.username,
                     req.body.password,
                     req.body.primaryInfo.email,

                  ]
                  
                   
    console.log(req.body);              
    pool.query(`INSERT INTO public."PLAYER"("FIRST_NAME", "LAST_NAME","USERNAME", "PASSWORD", "EMAIL", "TEAM_ID")
                VALUES($1, $2, $3, $4, $5 ,'0')`,
             values, (q_err, q_res) => {
            if(q_err) return next(q_err);
            res.json(q_res.rows)
      });
  })

//get player (using email)
  router.get('/api/get/getPlayer/:email', async (req, res) => {
    const email  = req.params.email
    const { rows } = await pool.query('SELECT * FROM public."PLAYER" WHERE "EMAIL" = $1 ', [email])
    res.send(rows[0])
  })
 

//player login(using email)
router.post('/api/get/PlayerLogin', (req, res, next ) => {
  const email = req.body.undefined.email;
  const password = req.body.undefined.password;
  pool.query(`SELECT * FROM public."PLAYER" WHERE "EMAIL" = $1 and "PASSWORD" = $2`, [ email,password ],
            (q_err, q_res) => {
                  if(q_err) return next(q_err);
                  res.json(q_res.rows);
  });
})
//get players for particular team
router.get('/api/get/getAllTeamPlayers', (req, res, next ) => {
    const team_id = req.body.team_id
    pool.query(`SELECT * FROM public."PLAYER" WHERE TEAM_ID = $1`, [ team_id ],
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