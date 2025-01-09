// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
$(document).ready(function () {
  $(".modal-btn").on("click", function () {
    $(".modal-overlay").addClass("open-modal");
  });
  $(".close-btn").on("click", function () {
    $(".modal-overlay").removeClass("open-modal");
  });
});