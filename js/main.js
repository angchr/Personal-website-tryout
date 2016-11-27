$(document).ready(function () {

  // initialize Masonry
  $('#content').masonry({
    columnWidth: 150,
    itemSelector: '.item',
    isFitWidth: true,
    isAnimated: !Modernizr.csstransitions
  }).imagesLoaded(function() {
      $(this).masonry('reload');
  });
});
