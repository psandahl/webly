import { getWindowSize, clearBody } from "./dom";
import { RenderEngine } from "./render_engine";

let renderEngine: RenderEngine;

window.onload = () => {
  const [w, h] = getWindowSize();
  const msg = `Window loaded with size width: ${w} and height: ${h}`;

  console.log(msg);

  try {
    renderEngine = new RenderEngine();
    renderEngine.start();
  } catch (error) {
    console.error(error);
    clearBody();

    const elem = document.createElement("h3");
    elem.innerText = error;
    document.body.appendChild(elem);
  }
};

window.onresize = () => {
  const [w, h] = getWindowSize();
  const msg = `Window resized with size width: ${w} and height: ${h}`;

  console.log(msg);

  renderEngine.resize();
};
