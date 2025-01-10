// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

$(document).ready(function () {
  // ********** set date ************
  $("#date").text(new Date().getFullYear());
  // ********** close links ************
  $(".nav-toggle").on("click", function () {
    $(".links-container").toggleClass("show-links");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(containerHeight === 0){
      $(this).height(linksHeight);
    }
  });
  // ********** fixed navbar ************

  // ********** smooth scroll ************
  // select links
});
