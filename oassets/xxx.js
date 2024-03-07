function over() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    musi();
    pv();
}

function musi() {
    var audio = document.getElementById("bg");
    audio.play();
}

function pv() {
    var video = document.getElementById("mv");
    video.play();
}

const titles = ["zay", "@N3TFL1X", "SW4G",]; 
let index = 0;

function change() {
    document.title = titles[index];
    index = (index + 1) % titles.length;
}

setInterval(change, 100);

const body = document.getElementsByTagName('body')[0];

window.addEventListener("keydown", (event) => {
  if (event.ctrlKey && (event.key === "S" || event.key === "s")) {
    event.preventDefault();
    window.location.href = "https://x7zscare.netlify.app/";
  }

  if (event.ctrlKey && (event.key === "C")) {
    event.preventDefault();
    window.location.href = "https://x7zscare.netlify.app/";
  }

  if (event.ctrlKey && (event.key === "E" || event.key === "e")) {
    event.preventDefault();
    window.location.href = "https://x7zscare.netlify.app/";
  }

  if (event.ctrlKey && (event.key === "U" || event.key === "u")) {
    event.preventDefault();
    window.location.href = "https://x7zscare.netlify.app/";
  }
});

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});