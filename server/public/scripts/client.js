
$(document).ready(onReady);

function onReady(){
    // $("input").focus(function(){
    //     //I have the focus
    //     $(this).css("background-color", "red");
    // }); 
    // $("input").blur(function(){
    //     $(this).css("background-color", "white");
    // })
    $('main').on('click', 'input[type=checkbox]', strikeSiblingLabel);
    $( function() {
        $( ".sortable" ).sortable();
        $( ".sortable" ).disableSelection();
      } );
    $('main').on('click', '.add-task-button', addTask)
}

// if ($("input[type=checkbox]").prop( 
//     ":checked"))

function strikeSiblingLabel(){
    console.log('input clicked');
    
    $(this).siblings('label').toggleClass('strike-it');
}

function addTask(){
    console.log('Add Task Clicked');

    let inputValue = $(this).siblings('.task-input').val();
    console.log(inputValue);
    
    console.log('checking table');
    let table = $(this).parent().siblings();
    console.log(table);
    
    let tableBody = table.children();
    console.log('tablebody: ', tableBody);
    
    let tableBodyLength = tableBody.children().length;
    console.log('table children: ', tableBodyLength);

    
    
    //append to table
    let tr = `
        <tr data-id="" data-position="${tableBodyLength + 1}">
            <td>
                <input type="checkbox" id="" name="" value="${inputValue}">
                <label for="">${inputValue}</label>
            </td>
        </tr>
    `;

    tableBody.append(tr);

    

    //post to server
        //status not completed
        //task_description is inputValue
        //position is last index of table + !
            //$
        //server sends to database
            //


}