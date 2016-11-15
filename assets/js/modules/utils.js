var body = document.getElementsByTagName('body')[0];

/**
* Debounce a function so that it will only fire once
*
* USAGE EXAMPLE:
* $scope.search = debounce(performSearch, 500); // Bind to ng-keyup
*
* http://davidwalsh.name/javascript-debounce-function
*
* @param func [Function] - The function to execute
* @param wait [int] - How many milliseconds to debounce
* @param immediate [boolean] - If true, fires at the leading edge
* @return [Function]
*/
function debounce (func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
