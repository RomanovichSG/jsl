let $ = require('jquery');
$(document).ready(function(){
    $.ajax({
        type: "POST",
            url: "/user",
        data: JSON.stringify({userName: userName, userAge: userAge}),
        dataType: "json",
        contentType: "application/json",
        success: function(data){
            console.log(data);
        }
    });
});