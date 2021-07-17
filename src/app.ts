import { getWindowSize, clearBody, appendBody } from "./dom";
import { GLContext } from "./gl_context";
import { RenderEngine } from "./render_engine";

let glContext: GLContext;

let renderEngine: RenderEngine;

window.onload = () => {
  const [w, h] = getWindowSize();
  const msg = `Window loaded with size width: ${w} and height: ${h}`;

  console.log(msg);

  try {
    glContext = new GLContext();

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
