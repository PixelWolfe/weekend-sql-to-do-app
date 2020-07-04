const express = require('express');
const getTablesRouter = express.Router();
const pool = require('./pool');

console.log('In getTablesRouter');

getTablesRouter.get('/', (req,res)=>{
    let queryString = `
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema = 'public'
        ORDER BY table_name;    
    `
    pool.query(queryString)
        .then(response=>{
            console.log('In getTables pool.then');
            res.send(response.rows); 
        })
        .catch(err=>{
            console.log('In getTables pool.catch: ', err);
            res.sendStatus(500);
        })
})

module.exports = getTablesRouter;
