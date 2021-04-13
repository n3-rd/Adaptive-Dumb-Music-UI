const colorThief = new ColorThief();
const img = document.querySelector("img");

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
  // document.getElementsByClassName('control-icon')
  document.querySelector(".control-icons").style.color = dominantColor;
  document.querySelector(".header-buttons").style.color = dominantColor;

  document.querySelector(".progress-bar").style.background = dominantColor;
}

getDominantColor();
convertArrayToRbg();
