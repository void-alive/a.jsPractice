// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

$(document).ready(function () {
  $(".nav-toggle").on("click", function () {
    $(".links").toggleClass("show-links");
  });
});