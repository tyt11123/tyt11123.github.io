// All animations will take exactly 900ms
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 900
});

let last_known_scroll_position = 0;
let elem = document.getElementsByClassName('navbar')[0];

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (last_known_scroll_position > 100) {
    elem.classList.remove('bg-secondary');
  } else if (last_known_scroll_position <= 99) {
    elem.classList.add('bg-secondary');
  }
});

var element = document.querySelector('.grid');
// var imgLoad = imagesLoaded(element);
// function onAlways(instance) {
//   var msnry = new Masonry(element, {
//     // options
//     itemSelector: '.gallery',
//     columnWidth: 60
//   });
// }
// // bind with .on()
// imgLoad.on('always', onAlways);

var msnry = new Masonry(element, {
  // options
  itemSelector: '.gallery',
  columnWidth: 60
});