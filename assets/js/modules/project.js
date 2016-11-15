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
