const pool = require('./pool');
const express = require('express');
const router = express.Router();

console.log('in delete table server route');


router.delete('/', (req,res)=>{
    console.log('in delete table');
    
    let queryString = `DROP TABLE "${req.body.table_name}"`;
    pool.query(queryString)
        .then(response=>{
            res.sendStatus(200);
        })
        .catch(err=>{
            res.sendStatus(500);
        })
})

module.exports = router;