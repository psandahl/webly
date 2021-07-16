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

/**
 * Make body clean.
 */
export function clearBody(): void {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.lastChild!);
  }
}

/**
 * Append a node to the body.
 */
export function appendBody(node: ChildNode): void {
  document.body.appendChild(node);
}