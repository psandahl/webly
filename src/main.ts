import { Application } from "./application";
import { getWindowSize, clearBody, appendBody } from "./dom";

let application: Application;

let mouseTracking = false;
let mouseX = 0;
let mouseY = 0;

window.onload = () => {
  const [w, h] = getWindowSize();
  //const msg = `Window loaded with size width: ${w} and height: ${h}`;

  //console.log(msg);

  try {
    application = new Application([w, h]);
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
  //const msg = `Window resized with size width: ${w} and height: ${h}`;

  //console.log(msg);

  if (application !== undefined) {
    application.setSize([w, h]);
  }
};
