import { getWindowSize, clearBody, appendBody } from "./dom";
import { GLContext } from "./gl_context";
import { SimpleBuilding } from "./simple_building";

import { Matrix4, toRadians } from "@math.gl/core";

let glContext: GLContext;
let simpleBuilding: SimpleBuilding;

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

window.onload = () => {
  const [w, h] = getWindowSize();
  const msg = `Window loaded with size width: ${w} and height: ${h}`;

  console.log(msg);

  try {
    glContext = new GLContext();
    simpleBuilding = new SimpleBuilding(glContext.gl());
    simpleBuilding.setProjectionMatrix(projectionMatrix());

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
