import { getWindowSize, clearBody, appendBody } from "./dom";
import { GLContext } from "./gl_context";
import { SimpleBuilding } from "./simple_building";

import { Matrix4, toRadians } from "@math.gl/core";

let glContext: GLContext;
let simpleBuilding: SimpleBuilding;

let mouseTracking = false;
let mouseX = 0;
let mouseY = 0;

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
  return new Matrix4().lookAt([20, 10, 20], [0, 0, 0], [0, 1, 0]);
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

        console.log(`deltaX: ${deltaX} deltaY: ${deltaY}`);

        mouseX = e.offsetX;
        mouseY = e.offsetY;
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
