hitted = false;
document.addEventListener("DOMContentLoaded", function () {
  scene = document.getElementById("scene");
  player = document.getElementById("player");
  camera = document.getElementById("#camera").object3D;
  whiteboard = document.getElementById("whiteboard");
  raycasterLeft = document.getElementById("raycasterLeft");
  raycasterRight = document.getElementById("raycasterRight");

  domCamera = document.getElementById("#camera");

  rightController = document.getElementById("rightController");
  leftController = document.getElementById("leftController");

  elevator = document.getElementById("elevator");

  currentElement = undefined;

  raycasterObj = undefined;
  currentColor = "black";
  points = [];

  rightController.addEventListener("selectstart", onSelect1Start);
  leftController.addEventListener("selectstart", onSelect1Start);
  rightController.addEventListener("selectend", onSelect1End);
  leftController.addEventListener("selectend", onSelect1End);
  rightController.addEventListener("triggerdown", onSelect1Start);
  leftController.addEventListener("triggerdown", onSelect1Start);
  rightController.addEventListener("triggerup", onSelect1End);
  leftController.addEventListener("triggerup", onSelect1End);
});

function onSelect1Start() {
  if (!currentElement) return;

  if (currentElement.id === "whiteboard") {
    hitted = true;
    return;
  }

  if (currentElement.id === "eraser") {
    currentColor = "white";
  } else if (currentElement.getAttribute("color")) {
    currentColor = currentElement.getAttribute("color");
  }
  raycasterLeft.setAttribute("raycaster", "lineColor", currentColor);
  raycasterRight.setAttribute("raycaster", "lineColor", currentColor);
}

function onSelect1End() {
  hitted = false;
}

window.addEventListener("load", function (event) {
  setTimeout(() => {
    var loadingScreen = document.getElementById("loadingScreen");

    loadingScreen.style.display = "none";
    scene.style.display = "contents";
  }, 1);
});
