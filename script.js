const audio = document.getElementById("backgroundMusic");

const audioQuery = document.querySelector("audio");
window.addEventListener("DOMContentLoaded", (event) => {
  audioQuery.volume = 1;
  audioQuery.play();
});

function audioController() {
  if (!audio.paused) {
    audio.pause();
  } else {
    audio.play();
  }
}
imageTracker = "i";
function imageChange() {
  var image = document.getElementById("audioController");

  if (imageTracker == "i") {
    image.src = "assets/audioControllerOn.png";
    imageTracker = "I";
  } else {
    image.src = "assets/audioControllerOff.png";
    imageTracker = "i";
  }
}
