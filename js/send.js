var accountSid = "AC55eb772dd66094a2971cbe4a9f496f9f";
var authToken = "03e1b72ac9aaff447505348ccda78af5";

var client = require('twilio') (accountSid, authToken);
client.messages.create({
    to:"+254711667171",
    from: "	(201) 430-7890",
    body:"This is you",
}, function(err, message){
    if(err){
        console.log(err);
    }else{
        console.log(message.sid);
    }
    });