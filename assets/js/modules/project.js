var project = body.querySelector('.project'),
    projectCover = project.querySelector('.project__cover'),
    projectContent = project.querySelector('.project__content'),
    projectItems = project.querySelectorAll('.projects__content__item').length - 1,
    infoNotshown = true,
    coverUnfold = true,
    position = 0,
    currentItem = 0,
    touchGesture = {},
    lastTime = 0,
    animationDuration = 500,
    quietPeriod = 800;


function toggleInfo() {
    projectCover.classList.toggle('show-info');
    infoNotshown = infoNotshown ? false : true;
}

function toglleCover() {
    projectCover.classList.toggle('fold');
    coverUnfold = coverUnfold ? false : true;
}

function _preventScrolling(event) {
    event = event || window.event;
    event.preventDefault();
    _preventScrolling();
}

function enableScrolling() {
    var currentTime = new Date().getTime(),
        enable = false;
    if (currentTime > lastTime) {
      lastTime = new Date().getTime() + animationDuration + quietPeriod;
        enable = true;
    }

    console.log(enable);
    return enable;
}

function swipedirection(event) {
    if (event) {
        var direction = "";

        if (touchGesture.touchstart.x < touchGesture.touchend.x || touchGesture.touchstart.y < touchGesture.touchend.y) {
            direction = "next";
        } else {
            direction = "prev";
        }
        scrollProject(direction);
    }
}

function scrollDirection(event) {
  console.log("x axe: "+event.deltaX);
  console.log("y axe: "+event.deltaY);
  console.log('wtf');

    if (event) {
        var direction = "",
            deltaX = event.deltaX,
            deltaY = event.deltaY;
        if (deltaX >= 1 || deltaY >= 1) {
            direction = "next";
        } else {
            direction = "prev";
        }
        scrollProject(direction);
    }
}



function scrollProject(direction) {
    console.log(direction);
    if (direction === "next") {
        if (currentItem !== projectItems) {
            position = position - 100;
            currentItem++;
        } else {
            position = 0;
            currentItem = 0;
        }
    } else {
        if (currentItem !== 0) {
            position = position + 100;
            currentItem--;
        } else {
            position = 0;
            currentItem = 0;
        }
    }


        projectContent.style.transform = "translate3d(" + position + "vw, 0, 0)";


}


function _handelScroll(event) {
  console.log("cc");
    event.preventDefault();

    if (infoNotshown && enableScrolling()) {
        toggleInfo();
    } else if (!infoNotshown && coverUnfold && enableScrolling()) {
        toglleCover();
        projectContent.style.margin = 0;
    } else if (event.type === "wheel" && enableScrolling()) {
        scrollDirection(event);
    }
}

window.addEventListener('DOMContentLoaded', function() {
    project.addEventListener('touchmove', _.throttle(function(event) {
      _handelScroll(event);
    },200));

    project.addEventListener('wheel', _.throttle(function(event) {
      _handelScroll(event);
    },200));

    document.addEventListener('touchstart', function(event) {
      console.log(event);
        touchGesture.touchstart = {
            x: event.screenX,
            y: event.screenX
        };
    });

    document.addEventListener('touchend', function(event) {
      console.log(event);
        touchGesture.touchend = {
            x: event.screenX,
            y: event.screenX
        };

        _handelScroll(event);
    });
});
