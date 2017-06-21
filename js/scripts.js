var myNumbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var randomArray=[4,8,10,20,25];
$("#random").click (function(){
  var number=myNumbers.length;
  var selected=Math.floor(Math.random()*number);
  $("#display").text(selected);
  for(var j=0; j<randomArray.length;j++){
    if(selected===randomArray[j]){
      $("#display").text("You have won! Grab yourself free lunch and a 500ml bottle of hot mbuzi bone soup at one of our listed kibandaskis")
    }
  }
  //console.log(selectedt;
});

new WOW().init();
