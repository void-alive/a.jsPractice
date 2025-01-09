$(document).ready(function(){
  let counter=0;

  $(".increase").on("click",function(){
    counter++;
    $("#value").text(counter);
    $("#value").css("color","green");
    // console.log(counter);
  });
  $(".reset").on("click",function(){
    counter=0;
    $("#value").text(counter);
    $("#value").css("color","black");
    // console.log(counter);
  });
  $(".decrease").on("click",function(){
    counter--;
    $("#value").text(counter);
    $("#value").css("color","red");
    // console.log(counter);
  });
});