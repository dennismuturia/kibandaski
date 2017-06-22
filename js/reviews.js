$(document).ready(function(){
    $('button').click(function(){
        var message = $('textarea').val();
        var old = $(".content").html();
        
        $(".content").html(old + '<p>'+ message+ '</p>');
        
        });
    });