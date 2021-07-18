import { getWindowSize, clearBody, appendBody } from "./dom";
import { GLContext } from "./gl_context";
import { SimpleBuilding } from "./simple_building";

let glContext: GLContext;
let simpleBuilding: SimpleBuilding;

window.onload = () => {
  const [w, h] = getWindowSize();
  const msg = `Window loaded with size width: ${w} and height: ${h}`;

  console.log(msg);

  try {
    glContext = new GLContext();
    simpleBuilding = new SimpleBuilding(glContext.gl());

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
  }
};
