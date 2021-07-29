import { Application } from "./application";
import { getWindowSize, clearBody, appendBody } from "./dom";
import { Matrix4, Pose, radians } from "@math.gl/core";

let application: Application;

let mouseTracking = false;
let mouseX = 0;
let mouseY = 0;

// A few silly functions for camera transform testing.
function camOpenGL() {
  const cam = new Matrix4().lookAt([0, 0, 10], [0, 0, 0], [0, 1, 0]);
  let result: number[] = [];
  const center = cam.transformAsPoint([0, 0, 0], result);
  console.log("camOpenGL center: ", center);

  const ul = cam.transformAsPoint([-1, 1, 0], result);
  console.log("camOpenGL ul: ", ul);
}

function camECEF() {
  const pose = new Pose({
    x: 10,
    y: 0,
    z: 0,
    yaw: radians(0),
    pitch: radians(0),
    roll: radians(0),
  });

  const cam = pose.getTransformationMatrix().invert();

  //console.log("mat: ", cam);

  let result: number[] = [];
  const center = cam.transformAsPoint([0, 0, 0], result);
  console.log("camECEF center: ", center);

  const ul = cam.transformAsPoint([0, -1, 1], result);
  console.log("camECEF ul: ", ul);
}

function camNED() {
  const pose = new Pose({
    x: -2208039.5330739156,
    y: -4879520.1039087232,
    z: 3457784.4159664311,
    yaw: radians(99.341067507018877),
    pitch: radians(-30.462887267059706),
    roll: radians(148.67312666606449),
  });

  const cam = pose.getTransformationMatrix().invert();
  let result: number[] = [];
  const center = cam.transformAsPoint(
    [-2209364.927517795, -4871462.6201173449, 3462587.2972338162],
    result
  );

  console.log("camNED center: ", center);

  const ul = cam.transformAsPoint(
    [-2209410.8340384108, -4871421.8375324365, 3462613.8061516923],
    result
  );

  console.log("camNED ul: ", ul);
}

window.onload = () => {
  //camOpenGL();
  //camECEF();
  //camNED();

  try {
    // This is ugly. But for now ...
    console.log("Will try to load image ...");
    const image = new Image();
    image.onload = (e) => {
      console.log("Image loaded. Application start continues!");

      // Make a fake depth image.
      const depthImage = fakeDepthImage(64, radians(-25), 20.0);

      application = new Application(image, depthImage, getWindowSize());
      application.run();

      const canvas = application.canvas();
      canvas.addEventListener("mousedown", (e) => {
        if (e.button == 0) {
          mouseTracking = true;
          mouseX = e.offsetX;
          mouseY = e.offsetY;
        }
      });

      canvas.addEventListener("mousemove", (e) => {
        if (mouseTracking) {
          const deltaX = e.offsetX - mouseX;
          const deltaY = e.offsetY - mouseY;

          mouseX = e.offsetX;
          mouseY = e.offsetY;

          if (application !== undefined) {
            application.mouseMove(deltaX, deltaY);
          }
        }
      });

      canvas.addEventListener("mouseup", (e) => {
        if (e.button == 0) {
          mouseTracking = false;
        }
      });
    };

    image.src = "./data/im0.png";
  } catch (error) {
    console.error(error);
    clearBody();

    const elem = document.createElement("h3");
    elem.innerText = error;
    appendBody(elem);
  }
};

window.onresize = () => {
  if (application !== undefined) {
    application.setWindowSize(getWindowSize());
  }
};

function fakeDepthImage(
  dim: number,
  theta: number,
  baseDepth: number
): [Float32Array, number, number] {
  let image = new Float32Array(dim * dim);

  let index = 0;
  for (let row = 0; row < dim; ++row) {
    const offset = (row - Math.round(dim / 2)) * Math.tan(theta);

    for (let col = 0; col < dim; ++col) {
      image[index++] = baseDepth + offset;
    }
  }

  return [image, dim, dim];
}
