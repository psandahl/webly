import { Application } from "./application";
import { getWindowSize, clearBody, appendBody } from "./dom";
import { radians } from "@math.gl/core";

let application: Application;

let mouseTracking = false;
let mouseX = 0;
let mouseY = 0;

window.onload = () => {
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
