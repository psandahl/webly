import { getWindowSize, clearBody, appendBody } from "./dom";
import { GLContext } from "./gl_context";
import { SimpleBuilding } from "./simple_building";

import { Matrix4, Vector3, clamp, toRadians } from "@math.gl/core";

let glContext: GLContext;
let simpleBuilding: SimpleBuilding;

let mouseTracking = false;
let mouseX = 0;
let mouseY = 0;

let azimuth = 0.0;
let elevation = 0.0;
let scale = 20.0;

function projectionMatrix(): Matrix4 {
  const [w, h] = getWindowSize();
  const aspect = w / h;
  const param = {
    fovy: toRadians(45),
    aspect: aspect,
    near: 0.1,
    far: 100,
  };

  return new Matrix4().perspective(param);
}

function viewMatrix(): Matrix4 {
  const x = Math.cos(azimuth);
  const z = Math.sin(azimuth);
  const y = Math.tan(elevation);

  const vec = new Vector3(x, y, z).normalize();

  return new Matrix4().lookAt(vec.scale(scale), [0, 0, 0], [0, 1, 0]);
}

window.onload = () => {
  const [w, h] = getWindowSize();
  const msg = `Window loaded with size width: ${w} and height: ${h}`;

  console.log(msg);

  try {
    glContext = new GLContext();

    const canvas = document.getElementById(
      "render-canvas"
    ) as HTMLCanvasElement;

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

        const [w, h] = getWindowSize();
        azimuth += (deltaX / w) * (2 * Math.PI);
        azimuth = azimuth % (2 * Math.PI);

        elevation += (deltaY / h) * (2 * Math.PI);
        elevation = clamp(elevation, toRadians(-45), toRadians(45));

        simpleBuilding.setViewMatrix(viewMatrix());
      }
    });

    canvas.addEventListener("mouseup", (e) => {
      if (e.button == 0) {
        mouseTracking = false;
      }
    });

    simpleBuilding = new SimpleBuilding(glContext.gl());
    simpleBuilding.setProjectionMatrix(projectionMatrix());
    simpleBuilding.setViewMatrix(viewMatrix());

    glContext.setEntities([simpleBuilding]);
    glContext.enterRenderLoop();

    console.log((3 * Math.PI) % (2 * Math.PI));
  } catch (error) {
    console.error(error);
    clearBody();

    const elem = document.createElement("h3");
    elem.innerText = error;
    appendBody(elem);
  }
};

window.onresize = () => {
  const [w, h] = getWindowSize();
  const msg = `Window resized with size width: ${w} and height: ${h}`;

  console.log(msg);

  if (glContext !== undefined) {
    glContext.handleResize();
    simpleBuilding.setProjectionMatrix(projectionMatrix());
  }
};
