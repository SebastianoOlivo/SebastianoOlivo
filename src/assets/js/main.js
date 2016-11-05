var body = document.getElementsByTagName('body')[0],
    container = body.querySelectorAll('.container')[0],
    navBtn = container.querySelectorAll('.nav-btn')[0],
    navItems = container.querySelectorAll('.mainnav')[0];

function toggleMenu() {
    container.classList.toggle('menu-active');
}

window.addEventListener("load", function() {
    navBtn.addEventListener('click', toggleMenu);
    navItems.addEventListener('click', toggleMenu);



});
