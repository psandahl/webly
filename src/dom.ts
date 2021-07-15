type Size = [number, number];

/**
 * Get tuple [width, height] describing the window size.
 */
export function getWindowSize(): Size {
  return [window.innerWidth, window.innerHeight];
}

/**
 * Create a canvas element.
 */
export function createCanvasElement(elementId: string): HTMLCanvasElement {
  let canvas = document.createElement("canvas") as HTMLCanvasElement;
  canvas.id = elementId;

  return canvas;
}
