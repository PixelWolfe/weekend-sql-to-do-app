
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
        $( "#sortable" ).sortable();
        $( "#sortable" ).disableSelection();
      } );
}

// if ($("input[type=checkbox]").prop( 
//     ":checked"))

function strikeSiblingLabel(){
    console.log('input clicked');
    
    $(this).siblings('label').toggleClass('strike-it');
}