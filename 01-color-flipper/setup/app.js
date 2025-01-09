const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
$(document).ready(function () {
  $("#btn").on("click", function () {
    let randomNumber = 0;
    randomNumber = Math.floor(Math.random() * 4);
    $("main").css("backgroundColor",colors[randomNumber]);
    $(".color").text(colors[randomNumber]);
  });
});