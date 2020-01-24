/*GALERIA
$('.gallery-link').magnificPopup
  type: 'image'
  closeOnContentClick: true
  closeBtnInside: false
  mainClass: 'mfp-with-zoom mfp-img-mobile'
  image: 
    verticalFit: true
    titleSrc: (item) ->
      item.el.find('figcaption').text() || item.el.attr('title')
  zoom:
    enabled: true
    # duration: 300
  gallery:
    enabled: true
    navigateByImgClick: false
    tCounter: ''
  disableOn: ->
    $(window).width() > 640 */
 
/*TIMELINE*/
(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();


 