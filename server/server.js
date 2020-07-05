const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const updateTablesRouter = require('./routers/router.updateTables');
const getTablesRouter = require('./routers/router.getTables');
const createTableRouter = require('./routers/router.createTable');
const addTaskRouter = require('./routers/router.addTaskRouter');
const statusRouter = require('./routers/router.status');
const deleteTableRouter = require('./routers/router.deleteTable');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));
app.use('/getTables', getTablesRouter);
app.use('/updateTables', updateTablesRouter);
app.use('/createTable', createTableRouter);
app.use('/addTask', addTaskRouter);
app.use('/status', statusRouter);
app.use('/deleteTable', deleteTableRouter);

app.listen(port, ()=>{
    console.log('Server is listening on port: ', port);
});
