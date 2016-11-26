var project = document.querySelector('.project'),
showMore = project.querySelector('.show-more');

function toggleMoreInfo() {
  project.classList.toggle('project__info--unfold');
}

window.addEventListener('load', function() {
  showMore.addEventListener('click', toggleMoreInfo, false);
});
