var body = document.getElementsByTagName('body')[0],
    container = body.querySelectorAll('.container')[0],
    navBtn = container.querySelectorAll('.nav-btn')[0],
    navItems = container.querySelectorAll('.mainnav__item'),
    footerNavItems = container.querySelectorAll('.footer-nav__item'),
    projectBtn = document.querySelector('.project-btn'),
    activeItem = "";


function toggleMenu() {
    container.classList.toggle('menu-active');
    if(container.classList.contains('project') || container.classList.contains('contact')){
      container.classList = 'container';
    }
}

function _menuActions(event) {
    event.preventDefault();
    var elem = event.currentTarget,
        elemAtt = elem.getAttribute("data-navBtn");
    if (activeItem !== "") {
        container.classList.remove(activeItem);
    }
    if (elemAtt !== null) {
      console.log('yop');
        event.preventDefault();
        container.classList.add(elemAtt);

    } else {
      var url = event.currentTarget.getElementsByTagName('A')[0];
      url = url.getAttribute('href');
      window.location.href = url;

    }
    activeItem = elemAtt;
}

window.addEventListener("load", function() {
    navBtn.addEventListener('click', toggleMenu);
    if(projectBtn !== null) {
      projectBtn.addEventListener('click', _menuActions);
    }
    for (var i = navItems.length; i--;) {
        navItems[i].addEventListener('click', _menuActions);
    }
    for (var i = footerNavItems.length; i--;) {
        footerNavItems[i].addEventListener('click', _menuActions);
    }
});
