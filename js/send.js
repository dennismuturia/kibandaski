$(document).ready(function(){
   $("form").submit(function(event){
        var telNo = $('input#mce-FNAME').val();
        https://rest.nexmo.com/sms/json?api_key=5645f383&api_secret=f5e39886aea38d2c&to=+254711667171&from=%22NEXMO%22&text=%22Hello%20from%20Nexmo%22
        console.log(telNo);
    }); 
});




