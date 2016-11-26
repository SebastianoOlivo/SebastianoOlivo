var body = document.getElementsByTagName('body')[0],
    container = body.querySelectorAll('.container')[0],
    navBtn = container.querySelectorAll('.nav-btn')[0],
    navItems = container.querySelectorAll('.mainnav__item'),
    activeItem = "";


function toggleMenu() {
    container.classList.toggle('menu-active');
}

function _menuActions(event) {
    event.preventDefault();
    var elem = event.currentTarget,
        elemAtt = elem.getAttribute("data-navBtn");
    if (activeItem !== "") {
        container.classList.remove(activeItem);
    }
    if (elemAtt !== "") {
        event.preventDefault();
        container.classList.add(elemAtt);

    } else {


    }
    activeItem = elemAtt;
    toggleMenu();
}

window.addEventListener("load", function() {
    navBtn.addEventListener('click', toggleMenu);
    for (var i = navItems.length; i--;) {
        navItems[i].addEventListener('click', _menuActions);
    }
});
