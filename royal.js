const bg = document.getElementById("bg");
const video = document.getElementById("videos");
const display = document.getElementById("display");
const pauseBtn = document.getElementById("pause");
const playBtn = document.getElementById("play");
const login = document.getElementById("login");

bg.style.display = "none";

visible = function () {
  if (bg.style.display == "block") {
    bg.style.display = "none";
    login.style.color = "white";
    display.style.display = "block";
   
  } else {
    bg.style.display = "block";
    login.style.color = "red";
    display.style.display = "none";
  }
};

function stop() {
  video.pause();
  pauseBtn.style.display = "none";
  playBtn.style.display = "block";
}
function resume() {
  video.play();
  pauseBtn.style.display = "block";
  playBtn.style.display = "none";
}
