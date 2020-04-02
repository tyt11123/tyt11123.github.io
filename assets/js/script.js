var elem = document.querySelector('.grid');
var imgLoad = imagesLoaded(elem);
function onAlways(instance) {
  var msnry = new Masonry(elem, {
    // options
    itemSelector: '.gallery',
    columnWidth: 60
  });
}
// bind with .on()
imgLoad.on('always', onAlways);