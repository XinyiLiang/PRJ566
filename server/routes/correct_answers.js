var express = require('express')
var router = express.Router()
var pool = require('../main/db')

router.get('/api/get/question_answer/:id', async (req, res) => {
    const question_id  = req.params.id
    const { rows } = await pool.query('SELECT * FROM public."CORRECT_ANSWER"  WHERE "QUESTION_ID"=$1', [question_id])
    res.send(rows)
  })