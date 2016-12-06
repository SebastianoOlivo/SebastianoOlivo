var container = document.querySelectorAll('.container')[0],
    page = container.querySelector('.page'),
    navBtn = container.querySelectorAll('.nav-btn')[0],
    navItems = container.querySelectorAll('.mainnav__item'),
    footerNavItems = container.querySelectorAll('.footer-nav__item'),
    projectBtn = document.querySelector('.project-btn');

function navState(isActive, elem, value) {
    if (isActive && elem === page) {
        container.classList = 'container';
    } else if (isActive && elem === navBtn) {
        container.classList = 'container';

    } else if (!isActive && elem === navBtn) {
        container.classList.add('menu-active');

    } else if (value !== null && value === "vision-active") {
        var url = elem.getElementsByTagName('A')[0].getAttribute('href');
        window.location.href = url;
    } else if (value !== null) {
        container.classList = 'container menu-active ' + value;
    }

}

function _navEventHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    var elem = event.currentTarget,
        elemAtt = elem.getAttribute("data-activeItem"),
        isActif = container.classList.contains('menu-active');
    navState(isActif, elem, elemAtt);
}



window.addEventListener("load", function() {
    var i = 0;
    navBtn.addEventListener('click', _navEventHandler);
    page.addEventListener('click', _navEventHandler);
    if (projectBtn !== null) {
        projectBtn.addEventListener('click', _navEventHandler);
    }
    for (i = navItems.length; i--;) {
        navItems[i].addEventListener('click', _navEventHandler);
    }
    for (i = footerNavItems.length; i--;) {
        footerNavItems[i].addEventListener('click', _navEventHandler);
    }
});
