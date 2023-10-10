window.addEventListener("deviceorientation",
  on_device_orientation);
function on_device_orientation(evt) {
  var alpha = evt.alpha;
  var beta = evt.beta;
  var gamma = evt.gamma;
  document.getElementById("a").innerHTML = "alpha = " + alpha;
  document.getElementById("b").innerHTML = "beta = " + beta;
  document.getElementById("c").innerHTML = "gamma = " + gamma;
  var canvasbeta = document.getElementById("canvasbeta");
  var contextbeta = canvasbeta.getContext("2d");
  var centru = { x: canvasbeta.width / 2, y: canvasbeta.height / 2 }
  var latura_patrat = 50;
  contextbeta.clearRect(0, 0, canvasbeta.width, canvasbeta.height);
  if (beta < 0) {
    contextbeta.fillStyle = "#6A0888";
  } else {
    contextbeta.fillStyle = "#FF8080";
  }
  contextbeta.beginPath();
  contextbeta.fillRect(180, 150, beta, 50);

  var canvasgamma = document.getElementById("canvasgamma");
  var contextgamma = canvasgamma.getContext("2d");
  var centru = { x: canvasgamma.width / 2, y: canvasgamma.height / 2 }
  var latura_patrat = 50;
  contextgamma.clearRect(0, 0, canvasgamma.width, canvasgamma.height);
  if (gamma < 0) {
    contextgamma.fillStyle = "#6A0888";
  } else {
    contextgamma.fillStyle = "#FF8080";
  }
  contextgamma.beginPath();
  contextgamma.fillRect(180, 150, 50, gamma);

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var centru = { x: canvas.width / 2, y: canvas.height / 2 }
  var latura_patrat = 50;
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (beta + gamma < 0) {
    context.fillStyle = "#6A0888";
  } else {
    context.fillStyle = "#FF8080";
  }
  context.beginPath();
  context.fillRect(180, 150, beta, gamma);

}