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
const arrow1 = document.getElementById("down-arrow1");
const arrow2 = document.getElementById("down-arrow2");
bg.style.display = "none";
bgBlack.style.display = "none";
lang.style.display = "none";
var a = true;

visibleLogin = function () {
  if (bg.style.display == "block") {
    bg.style.display = "none";
    login.style.color = "white";
    bgBlack.style.display = "none"; 
    display.style.display = "block";
    arrow1.style.transform = "rotate(0deg)";
    arrow1.style.color = "white";
  } else {
    bg.style.display = "block";
    login.style.color = "red";
    bgBlack.style.display = "block";
    display.style.display = "none";
    arrow1.style.transform = "rotate(180deg)";
    arrow1.style.color = "red";
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
    arrow2.style.transform = "rotate(180deg)";
    arrow2.style.color = "red";
    // login page remove
    bg.style.display = "none";
    login.style.color = "white";
    bgBlack.style.display = "none";
    
  } else {
    lang.style.display = "none";
    display.style.display = "block";
    language.style.color = "white";
    arrow2.style.transform = "rotate(0deg)";
    arrow2.style.color = "white";
  }
};


stop = function () {
 video.pause();
 pauseBtn.style.display = "none"
 playBtn.style.display = "block";
}
resume = function () {
  video.play();
  pauseBtn.style.display = "block"
  playBtn.style.display = "none";
 }