const pads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

function playSound(pad) {
  const audio = pad.querySelector(".clip");

  audio.currentTime = 0;
  audio.play();

  display.textContent = pad.id;
}

pads.forEach((pad) => {
  pad.addEventListener("click", () => {
    playSound(pad);
  });
});

document.addEventListener("keydown", (e) => {
  const pad = document.getElementById(e.key.toUpperCase());

  if (pad) {
    playSound(pad.parentElement);
  }
});
