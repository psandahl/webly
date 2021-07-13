type Size = [number, number];

/**
 * Get tuple [width, height] describing the window size.
 * */
export function getWindowSize(): Size {
    return [window.innerWidth, window.innerHeight];
}

export function createCanvasElement(size: Size, elementId: string): HTMLCanvasElement {
    let canvas = document.createElement('canvas') as HTMLCanvasElement;
    canvas.id = elementId;
    canvas.width = size[0];
    canvas.height = size[1];

    return canvas;
}