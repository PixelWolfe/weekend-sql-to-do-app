// const getTablesRouter = require("../../routers/router.getTables");

$(document).ready(onReady);

function onReady(){
    $('main').on('click', 'input[type=checkbox]', strikeSiblingLabel);
    $('main').on('click', '.add-task-button', addTask);
    $('.create-list-button').on('click', checkTableName);
    getTables();
}

function strikeSiblingLabel(){
    console.log('input clicked');
    
    $(this).siblings('label').toggleClass('strike-it');
}

function addTask(){
    console.log('Add Task Clicked');

    let inputValue = $(this).siblings('.task-input').val();
    let table = $(this).parent().siblings();
    let tableBody = table.children();
    let tableBodyLength = tableBody.children().length;
    let position = tableBodyLength + 1;

    $.ajax({
        method: "POST",
        url: '/addTask',
        data: {table_name: tableBody[0].id, status: 'not completed', task_description: `${inputValue}`, position_number: position}
    }).then(function(response){
        updateTables(tableBody[0].id)
    }).catch(function(err){
        alert('Error from server adding task, ', err);
    })
}

function updateTables(tableName){

    $.ajax({
        method: "POST",
        url: "/updateTables",
        data: {table_name: tableName}
    }).then(function(response){
        console.log('Back from server with: ', response);
        $(`#${tableName}`).empty();
        for(let i = 0; i < response.length; i++){
            let inputAndLabel = `
                <input type="checkbox" id="" name="" value="${response[i].task_description}"></input>
                <label for="">${response[i].task_description}</label>
            `
            if(response[i].status === "completed"){
                inputAndLabel = `
                    <input checked type="checkbox" class="" id="" name="" value="${response[i].task_description}">
                    <label class="strike-it" for="">${response[i].task_description}</label>
                `
            }

            let tr = `
                <tr data-id="${response[i].id}" data-position="${response[i].position_number}">
                    <td>
                        ${inputAndLabel}
                    </td>
                </tr>
            `;
            console.log('logging #tableName.append: ', `#${tableName}`);
            
            $(`#${tableName}`).append(tr);
        }
            
    }).catch(function(err){
        console.log('Error from server: ', err);
    })
}

function getTables(){
    $.ajax({
        method: "GET",
        url: "/getTables"
    }).then(function(response){
        console.log('Back from server with: ', response);
        $('main').empty();
        for(table of response){
            let card = `
                <div class="list card text-center">
                    <h2 class="mb-0">${table.table_name}</h2>
                    <div class="card-body my-0 pt-2 pl-0 text-left">
                        <table class="table">
                            <tbody class="sortable" id="${table.table_name}">
                            </tbody>
                        </table>
                        <div class="text-center">
                            <input type="text" class="task-input" placeholder="Enter task here...">
                            <button class="btn-success add-task-button">Add Task</button>  
                        </div>
                    </div>
                </div>`;
            $('main').append(card);
            updateTables(table.table_name);
        }
    }).catch(function(err){
        console.log('Server Error: ', err);
    })
}

function checkTableName(){
    console.log('create list button pressed');

    let inputField = $('.create-list-input');
    let tableName = inputField.val();

    inputField.removeClass('red-border');
    
    if(tableName === ''){
        inputField.addClass('red-border');
        console.log('shake');
        return;
    }

    //post tableName and check to see tables exist with the same name
    //send back 
    $.ajax({
        method: "GET",
        url: "/getTables"
    }).then(function(response){
        for(let name of response){
            console.log('name vs tablename', name.table_name, tableName);
            if(name.table_name === tableName){
                inputField.addClass('red-border');
                alert('List name already exists! Try another name!');
                return;
            }
        }
        createTable(tableName);
        console.log('Input is Unique! 0 matches found!');
    }).catch(function(err){
        alert('Server Error checking existing table names: ', err);
    })
}

function createTable(tableName){
    //send ajax command to create table
    //post with tableName
    //in then create server side tables with getTables()

    $.ajax({
        method: "POST",
        url: "/createTable",
        data: {table_name: tableName}
    }).then(function(response){
        getTables();
        console.log('dont forget to make me a meme.'); 
    }).catch(function(err){
        alert('Server Error creating table: ', err);
    })
}

function checkBox(){
    
}