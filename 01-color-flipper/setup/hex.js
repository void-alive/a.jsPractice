const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

$(document).ready(function () {
  $("#btn").on("click", function () {
    let randomNumber = 0;

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      randomNumber = Math.floor(Math.random() * hex.length);
      hexColor = hexColor + hex[randomNumber];
    }

    $("main").css("backgroundColor", hexColor);
    $(".color").text(hexColor);
    console.log(hexColor);
  });
});