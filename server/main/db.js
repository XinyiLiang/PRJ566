const { Pool } = require('pg')
const connectionString = 'postgres://nfhkxughwjwgah:62743b64d08cbe95b21297cdccc1a06fa98b7bb8852245dae28c1b5194224f0a@ec2-52-70-15-120.compute-1.amazonaws.com:5432/d94tf3vfhdhee3'

const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
})


module.exports=pool