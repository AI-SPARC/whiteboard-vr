document.addEventListener("DOMContentLoaded", function () {
  scene = document.getElementById("scene");
  player = document.getElementById("player");
  camera = document.getElementById("#camera").object3D;
  whiteboard = document.getElementById("whiteboard");

  domCamera = document.getElementById("#camera");

  rightController = document.getElementById("rightController");
  leftController = document.getElementById("leftController");

  elevator = document.getElementById("elevator");

  currentElement = undefined;

  hitted = false;
  raycasterObj = undefined;
  currentColor = "black";
  points = [];

  // controller1 = scene.renderer.xr.getController(1);
  rightController.addEventListener("selectstart", onSelect1Start);
  leftController.addEventListener("selectstart", onSelect1Start);
  rightController.addEventListener("selectend", onSelect1End);
  leftController.addEventListener("selectend", onSelect1End);
  rightController.addEventListener("triggerdown", onSelect1Start);
  leftController.addEventListener("triggerdown", onSelect1Start);
  rightController.addEventListener("triggerup", onSelect1End);
  leftController.addEventListener("triggerup", onSelect1End);
  // rightController.addEventListener("squeezestart", onSelect1Start);
  // leftController.addEventListener("squeezestart", onSelect1Start);
  // rightController.addEventListener("triggerdown", onSelect1Start);
  // leftController.addEventListener("triggerdown", onSelect1Start);
  // rightController.addEventListener("gripdown", onSelect1Start);
  // leftController.addEventListener("gripdown", onSelect1Start);
});


function onSelect1Start() {
  if (!currentElement) return;
  if (currentElement.id === "whiteboard") {
    hitted = true;
    return;
  }
  if (currentElement.getAttribute("color")) {
    currentColor = currentElement.getAttribute("color");
  }
}

function onSelect1End() {
  hitted = false;
}

// function draw() {
//   if (!raycasterObj) {
//     return;
//   }

//   let intersection =
//     raycasterObj.components.raycaster.getIntersection(currentElement);
//   if (!intersection) {
//     return;
//   }


//     const geometry = new THREE.SphereBufferGeometry(0.05);
//     const material = new THREE.MeshBasicMaterial({
//       color: currentColor || "black",
//       opacity: 1,
//       side: THREE.DoubleSide,
//     });
//     const mesh = new THREE.Mesh(geometry, material);

//     mesh.position.copy(intersection.point);

//     scene.object3D.add(mesh);
// }

window.addEventListener("load", function (event) {
  setTimeout(() => {
    var loadingScreen = document.getElementById("loadingScreen");

    loadingScreen.style.display = "none";
    scene.style.display = "contents";
  }, 1);
});
