/**
 * ----------------------------------------------------------------------------------
 * jQuery customfileinput plugin
 * Author: Alfie Nollora, alfienollora@yahoo.com
 * Copyright (c) 2013 alfieindesigns
 * licensed under MIT (alfieindesigns.com/code/afn-custominputfile/mit-license.txt)
 * ----------------------------------------------------------------------------------
 */

//on mousemove, keep file input under the cursor to steal click
$(".file-type").on('mousemove', function(e){ 
    var parentOffset    = $(this).offset();   
    var leftPosition    = (e.pageX - parentOffset.left) - 250;
    var topPosition     = (e.pageY - parentOffset.top) - 15;

    $('#file').css({
       left:  leftPosition,
       top:   topPosition
    });
});

// Detect if file type has change
$('#file').change(function(e){
    $in=$(this);
    $in.next().val($in.val());
    var filePath = $("#file-path").val();
    var button   = $(".file-type .button");

    // Change button name
    if(filePath) {
        button.html("Change");
    }
    else {
        button.html("Browse");
    }
});