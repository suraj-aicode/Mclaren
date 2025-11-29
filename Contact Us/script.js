// Toggle Menu Button
function toggleMenu() {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav");
  menu.classList.toggle("active");
  nav.classList.toggle("active");
}

// Change the background video
function changeVideo(name) {
  const bgvideoList = document.querySelectorAll(".bg-video");
  const trailer = document.querySelectorAll(".trailer");
  const models = document.querySelectorAll(".model");

  // Mapping Background Videos
  bgvideoList.forEach((video) => {
    video.classList.remove("active");
    if (video.classList.contains(name)) {
      video.classList.add("active");
    }
  });

  // Mapping model name
  models.forEach((model) => {
    model.classList.remove("active");
    if (model.classList.contains(name)) {
      model.classList.add("active");
    }
  });

  // Mapping trailer videos change
  trailer.forEach((video) => {
    video.classList.remove("active");
    if (video.classList.contains(name)) {
      video.classList.add("active");
    }
  });
}

// Change the play and pause button on click event
function togglePlay() {
  const play = document.querySelector(".play");
  const pause = document.querySelector(".pause");
  play.classList.toggle("active");
  pause.classList.toggle("active");
}

// Play and Pause functionality
function pauseVideo() {
  const bgvideoList = document.querySelectorAll(".bg-video.active");
  bgvideoList.forEach((video) => {
    video.pause();
  });

  togglePlay();
}

function playVideo() {
  const bgvideoList = document.querySelectorAll(".bg-video.active");
  bgvideoList.forEach((video) => {
    video.play();
  });

  togglePlay();
}
