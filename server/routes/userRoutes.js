var express = require('express')
var router = express.Router()
var pool = require('../main/db')


  //create new user
  router.post('/api/user/posttodb', (req, res, next) => {
    const values = [ req.body.primaryInfo.first_name,
      req.body.primaryInfo.last_name,
      req.body.primaryInfo.username,
      req.body.password,
      req.body.primaryInfo.email
   ]    
            
    pool.query(`INSERT INTO public."PLAYER"("FIRST_NAME", "LAST_NAME","USERNAME", "PASSWORD", "EMAIL", "TEAM_ID")
                 SELECT $1, $2, $3, $4, $5 ,0
                 WHERE NOT EXISTS  
                 (SELECT * FROM public."PLAYER" WHERE "EMAIL"= $5::varchar(50)) RETURNING *; `,
             values, (q_err, q_res) => {
            if(q_err) return next(q_err);
            res.json(q_res.rows);
      })
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
  router.put(`/api/put/user/:email`, (req, res, next) => {
    const values = [ req.body.username,
                     req.body.password,
                     req.body.email]
    pool.query(`UPDATE public."PLAYER" SET  USERNAME = $2, PASSWORD = $3, EMAIL = $4
                WHERE "EMAIL" = $1`, values,
                (q_err, q_res) => {
                  console.log(q_res)
                  console.log(q_err)
          })
  })

    
  //edit current player team
  router.put(`/api/put/userTeam/:email`, (req, res, next) => {
    const values = [req.body.email,
                  req.body.team_id]
     
    pool.query(`UPDATE public."PLAYER" SET "TEAM_ID" = $2
                WHERE "EMAIL" = $1`, values, (q_err, q_res) => {
                  if(q_err) return next(q_err);
                  res.json(q_res.rows)
          })
  })
  


//get players for particular team - added by Xinyi Liang
router.get('/api/get/GetAllTeamInfo', (req, res, next ) => {
  pool.query(`SELECT t."TEAM_ID",t."NAME",t."PASSWORD",t."TYPE",
  count(p."TEAM_ID") as "TEAM_MEMBER_COUNT"
  from public."PLAYER" p, public."TEAMS" t
  where p."TEAM_ID" = t."TEAM_ID"
  group by t."TEAM_ID"`, 
            (q_err, q_res) => {
                   res.json(q_res.rows)
  })
})

module.exports = router