// Made with love by Godwin Jemegah (n3-rd.github.io)
// Buy me a coffe or donate at https://www.buymeacoffee.com/godwinjemegah

const colorThief = new ColorThief();
const img = document.querySelector(".album-image");
var randomImageIcon = document.getElementById("randomImageIcon");
img.crossOrigin = "Anonymous";

// Make sure image is finished loading
function getDominantColor() {
  if (img.complete) {
    colorThief.getColor(img);
    console.log(colorThief.getColor(img));
    var values = colorThief.getColor(img);
  } else {
    image.addEventListener("load", function () {
      colorThief.getColor(img);
    });
  }
}

function convertArrayToRbg() {
  function rgb(values) {
    return "rgb(" + values.join(", ") + ")";
  }

  var dominantColor = rgb(colorThief.getColor(img));
  document.querySelector(".control-icons").style.color = dominantColor;
  document.querySelector(".header-buttons").style.color = dominantColor;
  document.querySelector(".progress-bar").style.background = dominantColor;
}

function performMainTask() {
  Promise.all(
    Array.from(document.images)
      .filter((img) => !img.complete)
      .map(
        (img) =>
          new Promise((resolve) => {
            img.onload = img.onerror = resolve;
          })
      )
  ).then(() => {
    getDominantColor();
    convertArrayToRbg();
  });
}

performMainTask();

randomImageIcon.addEventListener("click", function () {
  img.setAttribute(
    "src",
    `https://picsum.photos/400/600?random=${Math.floor(Math.random() * 90)}`
  );
  performMainTask();
});
