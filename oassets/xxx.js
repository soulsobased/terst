function toggleOverlay() {
  const overlay = document.getElementById("overlay");
  if (overlay.style.display === "block") {
    hideOverlay();
  } else {
    showOverlay();
  }
}

function togglePlay(elementId) {
  const mediaElement = document.getElementById(elementId);
  if (mediaElement.paused) {
    mediaElement.play();
  } else {
    mediaElement.pause();
    mediaElement.currentTime = 0;
  }
}

function showOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";
  document.body.style.overflow = "hidden";
}

function hideOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
  document.body.style.overflow = "auto";
}

function playMedia(elementId) {
  togglePlay(elementId);
}

function musi() {
  playMedia("bg");
}

function pv() {
  playMedia("mv");
}

const titles = ["zay", "@N3TFL1X", "SW4G"];
let index = 0;

function change() {
  const overlay = document.getElementById("overlay");
  if (overlay.style.display !== "block") {
    document.title = titles[index];
    index = (index + 1) % titles.length;
 
