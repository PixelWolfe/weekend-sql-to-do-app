// const getTablesRouter = require("../../routers/router.getTables");

$(document).ready(onReady);

function onReady(){
    $('main').on('click', 'input[type=checkbox]', strikeSiblingLabel);
    $('main').on('click', '.add-task-button', addTask);
    $('.create-list-button').on('click', checkTableName);
    $('main').on('click', '.row-delete', deleteRow)
    getTables();
}

function deleteTable(){

}

function strikeSiblingLabel(){
    console.log('input clicked');
    $(this).siblings('label').toggleClass('strike-it');
    
    let editId = $(this).data('id');
    let status = null;
    let tableName = $(this).data('table');

    if ($(this).prop('checked') === true){
        status = "completed";
    }
    else{
        status = "not completed"
    }
    
    $.ajax({
        method: "PUT",
        url: "/status/" + editId,
        data: {status: status, table_name: tableName}
    })
    .then(function(response){
        console.log('Status updated on database!: ', response);
        updateTables(tableName);
    })
    .catch(function(err){
        console.log('Server Error: ', err);
    })
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
                <input type="checkbox" data-table="${tableName}" data-id="${response[i].id}" name="" value="${response[i].task_description}"></input>
                <label class="m-0" for="">${response[i].task_description}</label>
            `
            if(response[i].status === "completed"){
                inputAndLabel = `
                    <input checked type="checkbox" data-table="${tableName}"
                     class="" data-id="${response[i].id}" name="" value="${response[i].task_description}">
                    <label class="strike-it m-0" for="">${response[i].task_description}</label>
                `
            }

            let deleteTd = `
                <td>
                    <button class="btn-danger row-delete" data-id="${response[i].id}" data-table="${tableName}">Delete</button>
                </td>
            `;

            console.log(deleteTd);
            
            let tr = `
                <tr data-position="${response[i].position_number}">
                    <td class="pl-3">
                        ${inputAndLabel}
                    </td>
                    ${deleteTd}
                </tr>
            `;
            console.log('tr', tr);
            
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
                    
                    <div class="card-body my-0 pl-0 pt-2 pr-0 pb-2 text-left">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <tbody class="sortable" id="${table.table_name}">
                                </tbody>
                            </table>
                            <div class="text-center">
                                <input type="text" class="task-input" placeholder="Enter task here...">
                                <button class="btn-success add-task-button">Add Task</button>  
                            </div>
                        </div>
                    </div>
                </div>`;
            $('main').append(card);
            $( ".sortable" ).sortable();
            $( ".sortable" ).disableSelection();
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

function deleteRow(){
    let deleteId = $(this).data('id');
    let tableName = $(this).data('table');

    $.ajax({
        method: "DELETE",
        url: "/status/" + deleteId,
        data: {table_name: tableName}
    }).then(function (response){
        updateTables(tableName);
    }).catch(function(err){
        alert('Error deleting list row!', err)
    })
}