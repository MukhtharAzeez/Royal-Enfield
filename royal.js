const bg = document.getElementById("bg");
const video = document.getElementById("videos");
const display = document.getElementById("display");
const pauseBtn = document.getElementById("pause");
const playBtn = document.getElementById("play");
const login = document.getElementById("login");
const language = document.getElementById("language");
const lang = document.getElementById("lang");
const navbar = document.getElementsByClassName("navbar");
const bgBlack = document.getElementById("logbg");

bg.style.display = "none";
bgBlack.style.display = "none";
lang.style.display = "none";

visibleLogin = function () {
  if (bg.style.display == "block") {
    bg.style.display = "none";
    login.style.color = "white";
    bgBlack.style.display = "none";
    display.style.display = "block";
  } else {
    bg.style.display = "block";
    login.style.color = "red";
    bgBlack.style.display = "block";
    display.style.display = "none";

    // language page remove
    lang.style.display = "none";
   
    language.style.color = "white";
  }
};
visibleLanguage = function () {
  if (lang.style.display == "none") {
    lang.style.display = "block";
    display.style.display = "none";
    language.style.color = "red";

    // login page remove
    bg.style.display = "none";
    login.style.color = "white";
    bgBlack.style.display = "none";
    
  } else {
    lang.style.display = "none";
    display.style.display = "block";
    language.style.color = "white";
  }
};

var a = true;
function stop() {
  if (a == true) {
    video.pause();
    a = false;
  } else {
    video.play();
    a = true;
  }
}
