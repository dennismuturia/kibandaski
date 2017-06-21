$(".validate").submit(function (event) {
  event.preventDefault(); 
//  var email = $("#mce-EMAIL").val();
//  var firstName = $("#mce-FNAME").val();
//  var lastName = $("#mce-LNAME").val();
//  var phoneNumber =$("#mce-MMERGE3").val();
//  
// var EMAILTYPE = $("input:radio[name=EMAILTYPE]:checked").val(); 
//  
//  if (!email || !EMAILTYPE){
//    alert ("check your parameters");
     (function($) {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0] = 'EMAIL';
    ftypes[0] = 'email';
    fnames[1] = 'FNAME';
    ftypes[1] = 'text';
    fnames[2] = 'LNAME';
    ftypes[2] = 'text';
    fnames[3] = 'MMERGE3';
    ftypes[3] = 'phone';
  }(jQuery));
  var $mcj = jQuery.noConflict(true);
  });
