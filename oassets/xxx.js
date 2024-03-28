function toggleOverlay() {
  const overlay = document.getElementById("overlay");
  if (overlay.style.display === "block") {
    overlay.style.display = "none";
  } else {
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

function playMedia(elementId) {
  const mediaElement = document.getElementById(elementId);
  if (mediaElement.paused) {
    mediaElement.play();
  } else {
    mediaElement.pause();
    mediaElement.currentTime = 0;
  }
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
  document.title = titles[index];
  index = (index + 1) % titles.length;
}

setInterval(change, 1000);

const body = document.getElementsByTagName("body")[0];
const metaViewport = document.querySelector("meta[name=viewport]");

window.addEventListener("keydown", (event) => {
  if (event.ctrlKey && (event.key === "S" || event.key === "s")) {
    event.preventDefault();
    window.location.reload();
  }

  if (event.ctrlKey && (event.key === "C")) {
    event.preventDefault();
    window.location.reload();
  }

  if (event.ctrlKey && (event.key === "E" || event.key === "e")) {
    event.preventDefault
