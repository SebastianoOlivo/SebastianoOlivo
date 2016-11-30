var project = document.querySelector('.project'),
showMore = project.querySelector('.show-more'),
video = project.querySelector('.project-video'),
playVideo = project.querySelector('.play-video'),
hideVideo = project.querySelector('.hide-video'),
options = {},
player = new Vimeo.Player('project-video', options),
isPlaying = false;


function toggleMoreInfo() {
  project.classList.toggle('project__info--unfold');
}

function toggleVideo(){
  video.classList.toggle('project-video--play');
  if(isPlaying){
    player.pause();
    isPlaying = false;
  }else{
    player.play();
    isPlaying = true;
  }
}

window.addEventListener('load', function() {
  showMore.addEventListener('click', toggleMoreInfo, false);
  playVideo.addEventListener('click', toggleVideo, false);
  hideVideo.addEventListener('click', toggleVideo, false);

});
