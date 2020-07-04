const express = require('express');
const router = express.Router();
const pool = require('./pool');

router.post('/',(req,res)=>{

    let queryString = `
    CREATE TABLE ${req.body.table_name} (
    "id" serial PRIMARY KEY,
    "status" varchar(20) NOT NULL,
    "task_description" varchar(100) NOT NULL,
    "position_number" varchar(3) NOT NULL);
    `;

    pool.query(queryString)
        .then(response=>{
            res.sendStatus(201);
        })
        .catch(err=>{
            res.sendStatus(500);
        })
})






 module.exports = router;