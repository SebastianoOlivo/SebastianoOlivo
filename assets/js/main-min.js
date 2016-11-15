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


var  container = body.querySelectorAll('.container')[0],
        navBtn = container.querySelectorAll('.nav-btn')[0],
      navItems = container.querySelectorAll('.mainnav')[0];

function toggleMenu() {
    container.classList.toggle('menu-active');
}



window.addEventListener("load", function() {
    navBtn.addEventListener('click', toggleMenu);
    navItems.addEventListener('click', toggleMenu);
});


var project = body.querySelector('.project'),
    projectCover = project.querySelector('.project__cover'),
    projectContent = project.querySelector('.project__content'),
    infoNotshown = true,
    coverUnfold = true,
    scrollPosition = 0,
    disableScroll = true;

function toggleInfo() {
    projectCover.classList.toggle('show-info');
}

function toglleCover() {
    projectCover.classList.toggle('fold');
}

function scrollToglle() {
  if(disableScroll){
    disableScroll = false;
    return;
  }
  disableScroll = true;
}


function projectScrolling() {
  if(disableScroll){
    console.log('disable');
      project.scrollTo(0, 0);
  }
  if (scrollPosition <= project.scrollLeft && coverUnfold && infoNotshown) {
        toggleInfo();
        infoNotshown = false;
        setTimeout(scrollToglle, 1000);
    }else if (scrollPosition < project.scrollLeft && coverUnfold && infoNotshown === false) {
          console.log('test');
        toglleCover();
        coverUnfold = false;
    }else if(scrollPosition > project.scrollLeft && coverUnfold === false){
      toglleCover();
      coverUnfold = true;
    }else if(scrollPosition > project.scrollLeft && coverUnfold === true && infoNotshown === false){
      //toggleInfo();
      //infoNotshown = true;
    }

    scrollPosition = project.scrollLeft;
}

window.addEventListener("load", function() {
    project.addEventListener("scroll", projectScrolling);

});




