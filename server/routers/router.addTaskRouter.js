const express = require('express');
const router = express.Router();
const pool = require('./pool');

router.post('/', (req,res)=>{

    let queryString = `
        INSERT INTO "${req.body.table_name}" ("status", "task_description", "position_number")
        VALUES ( $1, $2, $3 );`;

    pool.query(queryString, [req.body.status, req.body.task_description, req.body.position_number])
        .then(response=>{
            res.sendStatus(201);
        })
        .catch(err=>{
            res.sendStatus(500);
        });
})

module.exports = router;