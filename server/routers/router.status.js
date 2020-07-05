const express = require('express');
const router = express.Router();
const pool = require('./pool');

router.put('/:id', (req,res)=>{

    let queryString = `
        UPDATE "${req.body.table_name}" SET status='${req.body.status}' 
        WHERE id = '${req.params.id}';
    `;

    console.log(queryString);
    
    pool.query(queryString)
        .then(response=>{
            console.log('database response: ', response);
            
            res.sendStatus(201);
        })
        .catch(err => {
            console.log('database err: ', err);
            
            res.sendStatus(500);
        })
})

router.delete('/:id', (req,res)=>{
    
    let queryString = `DELETE FROM "${req.body.table_name}" WHERE id='${req.params.id}';`;
    pool.query(queryString)
        .then(response=>{
            res.sendStatus(200);
        })
        .catch(err=>{
            res.sendStatus(500);
        })
})


module.exports = router;