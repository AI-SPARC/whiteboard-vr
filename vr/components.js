AFRAME.registerComponent("thumbstick-logging-right", {
  init: function () {
    this.el.addEventListener("thumbstickmoved", this.logThumbstick);
  },

  logThumbstick: function (evt) {
    let deltaTheta = evt.detail.x / 20.0;

    player.object3D.rotation.y -= deltaTheta;
  },
});

AFRAME.registerComponent("clicable", {
  init: function () {
    let el = this.el;

    this.onRaycastHit = (evt) => {
      currentElement = el;
      raycasterObj = evt.detail.el;
    };

    this.onRaycastClear = (evt) => {
      hitted = false;
      currentElement = undefined;
      this.raycasterObj = undefined;
    };

    this.el.addEventListener("raycaster-intersected", this.onRaycastHit);
    this.el.addEventListener(
      "raycaster-intersected-cleared",
      this.onRaycastClear
    );
  },

  remove: function () {
    this.el.removeEventListener("raycaster-intersected", this.onRaycastHit);
    this.el.removeEventListener(
      "raycaster-intersected-cleared",
      this.onRaycastClear
    );
  },
  tick: function (evt) {
    if (!hitted || !this.el.id === "whiteboard" || !raycasterObj) return;

    this.draw();
  },

  draw: function () {
    let intersection =
      raycasterObj.components.raycaster.getIntersection(currentElement);
    if (!intersection) {
      return;
    }

    const geometry = new THREE.SphereBufferGeometry(0.06);
    const material = new THREE.MeshBasicMaterial({
      color: currentColor || "black",
      opacity: 1,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.set(intersection.point.x, intersection.point.y, 0.5);
    console.log(intersection.point);

    scene.object3D.add(mesh);
  },
});
