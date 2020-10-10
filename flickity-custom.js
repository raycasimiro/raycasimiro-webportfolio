

function is_touch_device()
{
  // Checks for existence in all browsers and IE10/11 & Surface
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

var navs = document.querySelectorAll('.scrollable');

if (!is_touch_device())
{
  for ( var i = 0, length = navs.length; i < length; i++ ) {
    var nav = navs[i];
    new Flickity( nav, {
      cellAlign: 'left',
      freeScroll: true,
      prevNextButtons: false,
      pageDots: false,
      contain: true
    });
  }
}