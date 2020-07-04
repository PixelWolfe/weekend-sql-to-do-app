const express = require('express');
const updateTablesRouter = express.Router();
const pool = require('./pool');

updateTablesRouter.post('/', (req,res)=>{

    console.log('req.body.table_name: ', req.body.table_name)
    let queryString = `
        SELECT * FROM "${req.body.table_name}" ORDER BY position_number ASC;
    `

    pool.query(queryString)
        .then(response=>{
            res.send(response.rows);
        })
        .catch(err=>{
            console.log('Error: ', err);
            res.sendStatus(500);
        })
})

module.exports = updateTablesRouter;
